// @ts-nocheck
// src/routes/+layout.server.js

const SHEET_ID = '1YAtEQ3JW87v2JDepZ7ArP0mII0kTPtfMdpYy-tJ8b9Q';
const sheetUrl = (tab) =>
  `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${tab}`;

const AP_MONTHS = {
  january: 'Jan.', february: 'Feb.', march: 'March', april: 'April',
  may: 'May', june: 'June', july: 'July', august: 'Aug.',
  september: 'Sept.', october: 'Oct.', november: 'Nov.', december: 'Dec.',
  jan: 'Jan.', feb: 'Feb.', mar: 'March', apr: 'April',
  aug: 'Aug.', sep: 'Sept.', sept: 'Sept.', oct: 'Oct.', nov: 'Nov.', dec: 'Dec.',
};

function apDate(str) {
  if (!str) return str;
  return str.replace(/[A-Za-z]+/g, (m) => AP_MONTHS[m.toLowerCase()] ?? m);
}

function dateValue(str) {
  if (!str) return 0;
  const normalized = apDate(str).replace(/\./g, '');
  const timestamp = Date.parse(normalized);
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

/** @param {string} url */
function normalizeImageUrl(url) {
  if (!url) return url;
  // Allow sheet entries like /src/static/foo.png or /static/foo.png → /foo.png
  return url.replace(/^\/?src\/static\//, '/').replace(/^\/static\//, '/');
}

function parseCSV(text) {
  const rows = [];
  let fields = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (ch === '"') {
      if (inQuotes && next === '"') { current += '"'; i++; } // escaped quote
      else { inQuotes = !inQuotes; }
    } else if (ch === ',' && !inQuotes) {
      fields.push(current); current = '';
    } else if ((ch === '\n' || (ch === '\r' && next === '\n')) && !inQuotes) {
      if (ch === '\r') i++;
      fields.push(current); current = '';
      rows.push(fields); fields = [];
    } else {
      current += ch;
    }
  }
  if (current || fields.length) { fields.push(current); rows.push(fields); }

  const headers = rows[0].map((h) => h.trim());
  return rows.slice(1)
    .filter((r) => r.some((v) => v.trim()))
    .map((values) =>
      Object.fromEntries(headers.map((h, i) => [h, (values[i] ?? '').trim()]))
    );
}

export async function load({ fetch }) {
  const [jobsRes, clipsRes, funRes] = await Promise.all([
    fetch(sheetUrl('jobs')),
    fetch(sheetUrl('clips')),
    fetch(sheetUrl('fun')),
  ]);

  const [jobsCSV, clipsCSV, funCSV] = await Promise.all([
    jobsRes.text(),
    clipsRes.text(),
    funRes.text(),
  ]);

  const jobs = parseCSV(jobsCSV).sort((a, b) => +a.order - +b.order);
  // @ts-ignore
  const clips = parseCSV(clipsCSV).map((c) => ({
    ...c,
    date: apDate(c.date),
    image_url: normalizeImageUrl(c.image_url),
    featured_image_url: normalizeImageUrl(c.featured_image_url),
  }))
  .filter((c) => c.hidden?.toLowerCase() !== 'true')
  .sort((a, b) => dateValue(b.date) - dateValue(a.date));
  // @ts-ignore
  const fun = parseCSV(funCSV).map((f) => ({
    ...f,
    date: apDate(f.date),
    image_url: normalizeImageUrl(f.image_url),
  }));

  // Attach clips to their job, excluding featured and archive_only items
  const jobsWithClips = jobs.map((job) => ({
    ...job,
    clips: clips.filter((c) =>
      c.org === job.org &&
      c.featured?.toLowerCase() !== 'true' &&
      c.archive_only?.toLowerCase() !== 'true'
    ),
  }));

  const featured = clips
    .filter((c) => c.featured?.toLowerCase() === 'true')
    .slice(0, 3);

  // Archive shows all non-featured clips (including archive_only), except archive_only=FALSE which explicitly excludes
  const archive = clips.filter((c) =>
    c.featured?.toLowerCase() !== 'true' &&
    c.archive_only?.toLowerCase() !== 'false'
  );

  // Include anything with a type set (chart/project), plus non-archive items without a type
  const allWork = clips
    .filter((c) => c.type?.trim() ? true : c.archive_only?.toLowerCase() !== 'true')
    .sort((a, b) => dateValue(b.date) - dateValue(a.date));

  return { jobs: jobsWithClips, featured, archive, fun, allWork };
}
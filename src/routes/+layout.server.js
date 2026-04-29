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
  const lines = text.trim().split('\n');
  const headers = lines[0]
    .split(',')
    .map((h) => h.replace(/^"|"$/g, '').trim());

  return lines.slice(1).map((line) => {
    // Handle quoted fields with commas inside them
    const values = [];
    let current = '';
    let inQuotes = false;
    for (const char of line) {
      if (char === '"') { inQuotes = !inQuotes; }
      else if (char === ',' && !inQuotes) { values.push(current); current = ''; }
      else { current += char; }
    }
    values.push(current);

    return Object.fromEntries(
      headers.map((h, i) => [h, (values[i] ?? '').trim()])
    );
  });
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
  })).sort((a, b) => dateValue(b.date) - dateValue(a.date));
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

  return { jobs: jobsWithClips, featured, archive, fun };
}
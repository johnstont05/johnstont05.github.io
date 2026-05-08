// @ts-nocheck

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
  const [clipsRes, funRes] = await Promise.all([
    fetch(sheetUrl('clips')),
    fetch(sheetUrl('fun')),
  ]);

  const [clipsCSV, funCSV] = await Promise.all([
    clipsRes.text(),
    funRes.text(),
  ]);

  const clips = parseCSV(clipsCSV).map((c) => ({
    ...c,
    date: apDate(c.date),
    image_url: normalizeImageUrl(c.image_url),
    featured_image_url: normalizeImageUrl(c.featured_image_url),
  }))
  .filter((c) => c.hidden?.toLowerCase() !== 'true')
  .sort((a, b) => dateValue(b.date) - dateValue(a.date));

  const fun = parseCSV(funCSV).map((f) => ({
    ...f,
    date: apDate(f.date),
    image_url: normalizeImageUrl(f.image_url),
  }));

  const allWork = clips
    .filter((c) => c.type?.trim() ? true : c.archive_only?.toLowerCase() !== 'true')
    .sort((a, b) => dateValue(b.date) - dateValue(a.date));

  return { fun, allWork };
}
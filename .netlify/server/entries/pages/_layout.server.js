const SHEET_ID = "1YAtEQ3JW87v2JDepZ7ArP0mII0kTPtfMdpYy-tJ8b9Q";
const sheetUrl = (tab) => `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${tab}`;
function parseCSV(text) {
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",").map((h) => h.replace(/^"|"$/g, "").trim());
  return lines.slice(1).map((line) => {
    const values = [];
    let current = "";
    let inQuotes = false;
    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        values.push(current);
        current = "";
      } else {
        current += char;
      }
    }
    values.push(current);
    return Object.fromEntries(
      headers.map((h, i) => [h, (values[i] ?? "").trim()])
    );
  });
}
async function load({ fetch }) {
  const [jobsRes, clipsRes, funRes] = await Promise.all([
    fetch(sheetUrl("jobs")),
    fetch(sheetUrl("clips")),
    fetch(sheetUrl("fun"))
  ]);
  const [jobsCSV, clipsCSV, funCSV] = await Promise.all([
    jobsRes.text(),
    clipsRes.text(),
    funRes.text()
  ]);
  const jobs = parseCSV(jobsCSV).sort((a, b) => +a.order - +b.order);
  const clips = parseCSV(clipsCSV);
  const fun = parseCSV(funCSV);
  const jobsWithClips = jobs.map((job) => ({
    ...job,
    clips: clips.filter((c) => c.org === job.org)
  }));
  const featured = clips.filter((c) => c.featured?.toLowerCase() === "true").slice(0, 3);
  return { jobs: jobsWithClips, featured, fun };
}
export {
  load
};

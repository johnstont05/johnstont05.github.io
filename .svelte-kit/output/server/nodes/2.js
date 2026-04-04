import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.cQFT3IgM.js","_app/immutable/chunks/scheduler.CbZlucOW.js","_app/immutable/chunks/index.DySwc99N.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/WallGrid.wfBuP5vE.js"];
export const stylesheets = ["_app/immutable/assets/2.CWMfsxSf.css","_app/immutable/assets/WallGrid.BnDC0lUl.css"];
export const fonts = [];

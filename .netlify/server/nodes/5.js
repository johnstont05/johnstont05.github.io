

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.RGBUCWA1.js","_app/immutable/chunks/scheduler.CbZlucOW.js","_app/immutable/chunks/index.DySwc99N.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/WallGrid.wfBuP5vE.js"];
export const stylesheets = ["_app/immutable/assets/5.BM21-5gR.css","_app/immutable/assets/WallGrid.BnDC0lUl.css"];
export const fonts = [];

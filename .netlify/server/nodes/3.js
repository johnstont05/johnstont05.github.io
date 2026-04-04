

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CqF4F1tu.js","_app/immutable/chunks/scheduler.CbZlucOW.js","_app/immutable/chunks/index.DySwc99N.js"];
export const stylesheets = ["_app/immutable/assets/3.uwJTbzBm.css"];
export const fonts = [];

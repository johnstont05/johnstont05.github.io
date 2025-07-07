

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DXV84TLa.js","_app/immutable/chunks/scheduler.F4pRxHHa.js","_app/immutable/chunks/index.BZ_y8pTb.js"];
export const stylesheets = ["_app/immutable/assets/1.BH_BM0Ug.css"];
export const fonts = [];

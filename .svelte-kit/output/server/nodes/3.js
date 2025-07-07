

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.rlVZmFwu.js","_app/immutable/chunks/scheduler.F4pRxHHa.js","_app/immutable/chunks/index.BZ_y8pTb.js"];
export const stylesheets = ["_app/immutable/assets/3.CN8hv0kR.css"];
export const fonts = [];

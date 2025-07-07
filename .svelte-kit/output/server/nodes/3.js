

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.B825FlQv.js","_app/immutable/chunks/scheduler.F4pRxHHa.js","_app/immutable/chunks/index.-Ym-czUa.js"];
export const stylesheets = ["_app/immutable/assets/3.DTrpAajK.css"];
export const fonts = [];



export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CwCcnKVR.js","_app/immutable/chunks/scheduler.CbZlucOW.js","_app/immutable/chunks/index.DySwc99N.js"];
export const stylesheets = ["_app/immutable/assets/1.hbBo77CW.css"];
export const fonts = [];

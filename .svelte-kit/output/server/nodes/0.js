import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.CQM6hlGP.js","_app/immutable/chunks/scheduler.CbZlucOW.js","_app/immutable/chunks/index.DySwc99N.js","_app/immutable/chunks/entry.BZuPxu_J.js"];
export const stylesheets = ["_app/immutable/assets/0.gN8PKlQY.css"];
export const fonts = [];

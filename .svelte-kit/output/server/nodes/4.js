import * as universal from '../entries/pages/fun/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/fun/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/fun/+page.ts";
export const imports = ["_app/immutable/nodes/4.CK4qnQAK.js","_app/immutable/chunks/scheduler.CbZlucOW.js","_app/immutable/chunks/index.DySwc99N.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/4.BT6IBW29.css"];
export const fonts = [];

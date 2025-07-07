import * as universal from '../entries/pages/fun/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/fun/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/fun/+page.ts";
export const imports = ["_app/immutable/nodes/4.DHeZ30T8.js","_app/immutable/chunks/Constants.BTe6uP2D.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.F4pRxHHa.js","_app/immutable/chunks/index.BZ_y8pTb.js","_app/immutable/chunks/Cards.DhlO4zdw.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/Cards.srVZdf19.css"];
export const fonts = [];

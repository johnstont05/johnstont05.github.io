import * as universal from '../entries/pages/fun/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/fun/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/fun/+page.ts";
export const imports = ["_app/immutable/nodes/4.KnFMirE7.js","_app/immutable/chunks/Constants.BTe6uP2D.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.F4pRxHHa.js","_app/immutable/chunks/index.-Ym-czUa.js"];
export const stylesheets = ["_app/immutable/assets/4.CaawdrGH.css","_app/immutable/assets/Cards.Dm8ZFGZO.css"];
export const fonts = [];

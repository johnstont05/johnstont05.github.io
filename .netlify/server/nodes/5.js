

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.JQeWsL8Z.js","_app/immutable/chunks/scheduler.F4pRxHHa.js","_app/immutable/chunks/index.-Ym-czUa.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/Cards.Dm8ZFGZO.css"];
export const fonts = [];

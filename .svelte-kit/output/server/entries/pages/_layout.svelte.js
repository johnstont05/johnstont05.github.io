import { g as getContext, c as create_ssr_component, b as subscribe, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/exports.js";
import "devalue";
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const css$1 = {
  code: "nav.svelte-1vcu7p9{display:flex;justify-content:space-between;align-items:center;padding:20px 36px;border-bottom:2px solid var(--ink);position:sticky;top:0;background:var(--bg);z-index:10}.name.svelte-1vcu7p9{font-family:var(--display);font-weight:800;font-size:16px;letter-spacing:-0.01em;text-decoration:none;color:var(--ink);text-transform:uppercase}ul.svelte-1vcu7p9{display:flex;gap:28px;list-style:none;margin:0;padding:0}a.svelte-1vcu7p9{font-family:var(--display);font-weight:700;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink3);text-decoration:none;transition:color 0.15s}a.svelte-1vcu7p9:hover{color:var(--ink)}a.active.svelte-1vcu7p9{color:var(--ink);background:var(--chartreuse);padding:3px 8px}",
  map: `{"version":3,"file":"NavBar.svelte","sources":["NavBar.svelte"],"sourcesContent":["<script>\\n  import { page } from '$app/stores';\\n<\/script>\\n\\n<nav>\\n  <a href=\\"/\\" class=\\"name\\">Taylor Johnston</a>\\n  <ul>\\n    <li><a href=\\"/\\" class:active={$page.url.pathname === '/'}>Work</a></li>\\n    <li><a href=\\"/fun\\" class:active={$page.url.pathname === '/fun'}>Fun</a></li>\\n    <li><a href=\\"/about\\" class:active={$page.url.pathname === '/about'}>About</a></li>\\n  </ul>\\n</nav>\\n\\n<style>\\n  nav {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 20px 36px;\\n    border-bottom: 2px solid var(--ink);\\n    position: sticky;\\n    top: 0;\\n    background: var(--bg);\\n    z-index: 10;\\n  }\\n  .name {\\n    font-family: var(--display);\\n    font-weight: 800;\\n    font-size: 16px;\\n    letter-spacing: -0.01em;\\n    text-decoration: none;\\n    color: var(--ink);\\n    text-transform: uppercase;\\n  }\\n  ul { display: flex; gap: 28px; list-style: none; margin: 0; padding: 0; }\\n  a {\\n    font-family: var(--display);\\n    font-weight: 700;\\n    font-size: 12px;\\n    letter-spacing: 0.08em;\\n    text-transform: uppercase;\\n    color: var(--ink3);\\n    text-decoration: none;\\n    transition: color 0.15s;\\n  }\\n  a:hover { color: var(--ink); }\\n  a.active {\\n    color: var(--ink);\\n    background: var(--chartreuse);\\n    padding: 3px 8px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAcE,kBAAI,CACF,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,KAAK,CAAC,CACnC,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,CAAC,CACN,UAAU,CAAE,IAAI,IAAI,CAAC,CACrB,OAAO,CAAE,EACX,CACA,oBAAM,CACJ,WAAW,CAAE,IAAI,SAAS,CAAC,CAC3B,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,OAAO,CACvB,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,IAAI,KAAK,CAAC,CACjB,cAAc,CAAE,SAClB,CACA,iBAAG,CAAE,OAAO,CAAE,IAAI,CAAE,GAAG,CAAE,IAAI,CAAE,UAAU,CAAE,IAAI,CAAE,MAAM,CAAE,CAAC,CAAE,OAAO,CAAE,CAAG,CACxE,gBAAE,CACA,WAAW,CAAE,IAAI,SAAS,CAAC,CAC3B,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,MAAM,CACtB,cAAc,CAAE,SAAS,CACzB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,KAAK,CAAC,KACpB,CACA,gBAAC,MAAO,CAAE,KAAK,CAAE,IAAI,KAAK,CAAG,CAC7B,CAAC,sBAAQ,CACP,KAAK,CAAE,IAAI,KAAK,CAAC,CACjB,UAAU,CAAE,IAAI,YAAY,CAAC,CAC7B,OAAO,CAAE,GAAG,CAAC,GACf"}`
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<nav class="svelte-1vcu7p9"><a href="/" class="name svelte-1vcu7p9" data-svelte-h="svelte-1og08o3">Taylor Johnston</a> <ul class="svelte-1vcu7p9"><li><a href="/" class="${["svelte-1vcu7p9", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-19i3fnb">Work</a></li> <li><a href="/fun" class="${["svelte-1vcu7p9", $page.url.pathname === "/fun" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1ut3mjh">Fun</a></li> <li><a href="/about" class="${["svelte-1vcu7p9", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-i3o4jt">About</a></li></ul> </nav>`;
});
const css = {
  code: ".checker-strip.svelte-nl89sm{height:16px;background-image:repeating-conic-gradient(#0d0d0d 0% 25%, var(--chartreuse) 0% 50%);background-size:16px 16px;flex-shrink:0}footer.svelte-nl89sm{border-top:2px solid var(--ink)}.inner.svelte-nl89sm{padding:20px 36px;display:flex;justify-content:space-between;align-items:center}ul.svelte-nl89sm{display:flex;gap:20px;list-style:none;margin:0;padding:0}a.svelte-nl89sm{font-family:var(--display);font-weight:700;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:var(--ink3);text-decoration:none;transition:color 0.15s}a.svelte-nl89sm:hover{color:var(--teal)}p.svelte-nl89sm{font-family:var(--display);font-weight:800;font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:var(--ink)}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n  import NavBar from '$lib/components/NavBar.svelte';\\n  import '../app.css';\\n<\/script>\\n\\n<NavBar />\\n<div class=\\"checker-strip\\"></div>\\n<slot />\\n\\n<footer>\\n  <div class=\\"checker-strip\\"></div>\\n  <div class=\\"inner\\">\\n    <ul>\\n      <li><a href=\\"https://x.com/TF_Johnston\\" target=\\"_blank\\">Twitter</a></li>\\n      <li><a href=\\"https://github.com/johnstont05\\" target=\\"_blank\\">GitHub</a></li>\\n      <li><a href=\\"https://bsky.app/profile/taylorjohnston.bsky.social\\" target=\\"_blank\\">Bluesky</a></li>\\n      <li><a href=\\"mailto:taylorfjohnston@gmail.com\\">Email</a></li>\\n    </ul>\\n    <p>Taylor Fay Johnston</p>\\n  </div>\\n</footer>\\n\\n<style>\\n  .checker-strip {\\n    height: 16px;\\n    background-image: repeating-conic-gradient(#0d0d0d 0% 25%, var(--chartreuse) 0% 50%);\\n    background-size: 16px 16px;\\n    flex-shrink: 0;\\n  }\\n  footer { border-top: 2px solid var(--ink); }\\n  .inner {\\n    padding: 20px 36px;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n  }\\n  ul { display: flex; gap: 20px; list-style: none; margin: 0; padding: 0; }\\n  a {\\n    font-family: var(--display);\\n    font-weight: 700;\\n    font-size: 12px;\\n    letter-spacing: 0.06em;\\n    text-transform: uppercase;\\n    color: var(--ink3);\\n    text-decoration: none;\\n    transition: color 0.15s;\\n  }\\n  a:hover { color: var(--teal); }\\n  p {\\n    font-family: var(--display);\\n    font-weight: 800;\\n    font-size: 12px;\\n    letter-spacing: 0.04em;\\n    text-transform: uppercase;\\n    color: var(--ink);\\n  }\\n</style>\\n"],"names":[],"mappings":"AAuBE,4BAAe,CACb,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,yBAAyB,OAAO,CAAC,EAAE,CAAC,GAAG,CAAC,CAAC,IAAI,YAAY,CAAC,CAAC,EAAE,CAAC,GAAG,CAAC,CACpF,eAAe,CAAE,IAAI,CAAC,IAAI,CAC1B,WAAW,CAAE,CACf,CACA,oBAAO,CAAE,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,KAAK,CAAG,CAC3C,oBAAO,CACL,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MACf,CACA,gBAAG,CAAE,OAAO,CAAE,IAAI,CAAE,GAAG,CAAE,IAAI,CAAE,UAAU,CAAE,IAAI,CAAE,MAAM,CAAE,CAAC,CAAE,OAAO,CAAE,CAAG,CACxE,eAAE,CACA,WAAW,CAAE,IAAI,SAAS,CAAC,CAC3B,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,MAAM,CACtB,cAAc,CAAE,SAAS,CACzB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,KAAK,CAAC,KACpB,CACA,eAAC,MAAO,CAAE,KAAK,CAAE,IAAI,MAAM,CAAG,CAC9B,eAAE,CACA,WAAW,CAAE,IAAI,SAAS,CAAC,CAC3B,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,MAAM,CACtB,cAAc,CAAE,SAAS,CACzB,KAAK,CAAE,IAAI,KAAK,CAClB"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} <div class="checker-strip svelte-nl89sm"></div> ${slots.default ? slots.default({}) : ``} <footer class="svelte-nl89sm" data-svelte-h="svelte-1tbpqy0"><div class="checker-strip svelte-nl89sm"></div> <div class="inner svelte-nl89sm"><ul class="svelte-nl89sm"><li><a href="https://x.com/TF_Johnston" target="_blank" class="svelte-nl89sm">Twitter</a></li> <li><a href="https://github.com/johnstont05" target="_blank" class="svelte-nl89sm">GitHub</a></li> <li><a href="https://bsky.app/profile/taylorjohnston.bsky.social" target="_blank" class="svelte-nl89sm">Bluesky</a></li> <li><a href="mailto:taylorfjohnston@gmail.com" class="svelte-nl89sm">Email</a></li></ul> <p class="svelte-nl89sm">Taylor Fay Johnston</p></div> </footer>`;
});
export {
  Layout as default
};

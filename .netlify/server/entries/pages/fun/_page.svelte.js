import { c as create_ssr_component } from "../../../chunks/ssr.js";
/* empty css                                                  */
const css = {
  code: "p.svelte-k7agyw{margin:auto}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport Cards from \\"$lib/components/Cards.svelte\\";\\n  <\/script>\\n  \\n  <svelte:head>\\n\\t<title>Taylor Johnston - Fun</title>\\n  </svelte:head>\\n  \\n  <!-- <Cards sheetName=\\"fun\\" /> -->\\n\\n  <p>This page is under construction</p>\\n\\n\\n  <style>\\n\\tp {\\n  margin: auto;\\n}\\n</style>"],"names":[],"mappings":"AAcC,eAAE,CACD,MAAM,CAAE,IACV"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1v3uvr4_START -->${$$result.title = `<title>Taylor Johnston - Fun</title>`, ""}<!-- HEAD_svelte-1v3uvr4_END -->`, ""}  <p class="svelte-k7agyw" data-svelte-h="svelte-1l8k2v4">This page is under construction</p>`;
});
export {
  Page as default
};

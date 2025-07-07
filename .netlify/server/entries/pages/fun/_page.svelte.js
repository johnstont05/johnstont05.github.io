import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Cards } from "../../../chunks/Cards.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1v3uvr4_START -->${$$result.title = `<title>Taylor Johnston - Fun</title>`, ""}<!-- HEAD_svelte-1v3uvr4_END -->`, ""} ${validate_component(Cards, "Cards").$$render($$result, { sheetName: "fun" }, {}, {})}`;
});
export {
  Page as default
};

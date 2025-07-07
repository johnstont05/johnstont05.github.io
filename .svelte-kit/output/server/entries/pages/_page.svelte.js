import { c as create_ssr_component, o as onDestroy, a as escape } from "../../chunks/ssr.js";
const css = {
  code: "main.svelte-5c8q73{text-align:center;padding:0;margin:0 auto;display:flex;flex-direction:column;height:calc(100vh - 80px - 88px);justify-content:center;align-items:center}.cursor.svelte-5c8q73{animation:svelte-5c8q73-blink 1s infinite}@keyframes svelte-5c8q73-blink{0%{opacity:1}50%{opacity:0}100%{opacity:1}}@media(min-width: 900px){}@media(min-width: 600px){}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { onDestroy } from 'svelte';\\n  \\n\\tlet words = [\\"journalist\\", \\"designer\\", \\"developer\\", \\"data-driven\\"];\\n\\tlet currentWordIndex = 0;\\n\\tlet currentLetterIndex = 0;\\n\\tlet currentWord = '';\\n\\tlet deleting = false;\\n  \\n\\tfunction updateTyping() {\\n\\t  if (deleting) {\\n\\t\\tif (currentLetterIndex >= 0) {\\n\\t\\t  currentWord = words[currentWordIndex].substring(0, currentLetterIndex);\\n\\t\\t  currentLetterIndex--;\\n\\t\\t} else {\\n\\t\\t  deleting = false;\\n\\t\\t  currentLetterIndex = 0;\\n\\t\\t  currentWordIndex = (currentWordIndex + 1) % words.length;\\n\\t\\t}\\n\\t  } else {\\n\\t\\tif (currentLetterIndex <= words[currentWordIndex].length) {\\n\\t\\t  currentWord = words[currentWordIndex].substring(0, currentLetterIndex);\\n\\t\\t  currentLetterIndex++;\\n\\t\\t} else {\\n\\t\\t  deleting = true;\\n\\t\\t}\\n\\t  }\\n\\t}\\n  \\n\\tconst typingInterval = setInterval(updateTyping, 100);\\n  \\n\\t// Clean up interval on component unmount\\n\\tonDestroy(() => {\\n\\t  clearInterval(typingInterval);\\n\\t});\\n  <\/script>\\n  \\n  <svelte:head>\\n\\t<title>Taylor Johnston - Data + Graphics Journalist</title>\\n  </svelte:head>\\n  \\n  <main>\\n\\t<h1>i'm taylor</h1>\\n\\t<div id=\\"typing-div\\">\\n\\t  <span class=\\"typed-text\\">{currentWord}</span>\\n\\t  <span class=\\"cursor\\">|</span>\\n\\t</div>\\n  </main>\\n  \\n  <style>\\n\\tmain {\\n\\t  text-align: center;\\n\\t  padding: 0;\\n\\t  margin: 0 auto;\\n\\t  display: flex;\\n\\t  flex-direction: column;\\n\\t  height: calc(100vh - 80px - 88px);\\n\\t  justify-content: center;\\n\\t  align-items: center;\\n\\t}\\n  \\n\\t.cursor {\\n\\t  animation: blink 1s infinite;\\n\\t}\\n  \\n\\t@keyframes blink {\\n\\t  0% {\\n\\t\\topacity: 1;\\n\\t  }\\n\\t  50% {\\n\\t\\topacity: 0;\\n\\t  }\\n\\t  100% {\\n\\t\\topacity: 1;\\n\\t  }\\n\\t}\\n  \\n\\t@media (min-width: 900px) {\\n\\t  /* Add styles for larger screens here */\\n\\t}\\n  \\n\\t@media (min-width: 600px) {\\n\\t  /* Add styles for medium screens here */\\n\\t}\\n  </style>"],"names":[],"mappings":"AAkDC,kBAAK,CACH,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACjC,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACf,CAEA,qBAAQ,CACN,SAAS,CAAE,mBAAK,CAAC,EAAE,CAAC,QACtB,CAEA,WAAW,mBAAM,CACf,EAAG,CACJ,OAAO,CAAE,CACR,CACA,GAAI,CACL,OAAO,CAAE,CACR,CACA,IAAK,CACN,OAAO,CAAE,CACR,CACF,CAEA,MAAO,YAAY,KAAK,CAAE,CAE1B,CAEA,MAAO,YAAY,KAAK,CAAE,CAE1B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let words = ["journalist", "designer", "developer", "data-driven"];
  let currentWordIndex = 0;
  let currentLetterIndex = 0;
  let currentWord = "";
  let deleting = false;
  function updateTyping() {
    if (deleting) {
      if (currentLetterIndex >= 0) {
        currentWord = words[currentWordIndex].substring(0, currentLetterIndex);
        currentLetterIndex--;
      } else {
        deleting = false;
        currentLetterIndex = 0;
        currentWordIndex = (currentWordIndex + 1) % words.length;
      }
    } else {
      if (currentLetterIndex <= words[currentWordIndex].length) {
        currentWord = words[currentWordIndex].substring(0, currentLetterIndex);
        currentLetterIndex++;
      } else {
        deleting = true;
      }
    }
  }
  const typingInterval = setInterval(updateTyping, 100);
  onDestroy(() => {
    clearInterval(typingInterval);
  });
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-xqiz3g_START -->${$$result.title = `<title>Taylor Johnston - Data + Graphics Journalist</title>`, ""}<!-- HEAD_svelte-xqiz3g_END -->`, ""} <main class="svelte-5c8q73"><h1 data-svelte-h="svelte-1xd8f3e">i&#39;m taylor</h1> <div id="typing-div"><span class="typed-text">${escape(currentWord)}</span> <span class="cursor svelte-5c8q73" data-svelte-h="svelte-47mt0n">|</span></div> </main>`;
});
export {
  Page as default
};

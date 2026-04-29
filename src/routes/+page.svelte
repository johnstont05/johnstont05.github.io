<script>
  import { onMount } from 'svelte';
  import SeoMeta from '$lib/components/SeoMeta.svelte';
  import FeaturedItem from '$lib/components/FeaturedItem.svelte';
  import JobBlock from '$lib/components/JobBlock.svelte';
  import WallGrid from '$lib/components/WallGrid.svelte';
  export let data;

  const full = "hey there, i'm taylor.";
  const tealWord = 'taylor';
  const tealStart = full.indexOf(tealWord);
  const tealEnd = tealStart + tealWord.length;

  let typed = '';
  let done = false;

  $: pre   = typed.slice(0, Math.min(typed.length, tealStart));
  $: teal  = typed.length > tealStart ? typed.slice(tealStart, Math.min(typed.length, tealEnd)) : '';
  $: post  = typed.length > tealEnd   ? typed.slice(tealEnd) : '';

  onMount(() => {
    let i = 0;
    const id = setInterval(() => {
      typed = full.slice(0, ++i);
      if (i >= full.length) { clearInterval(id); setTimeout(() => done = true, 1800); }
    }, 55);
    return () => clearInterval(id);
  });
</script>

<svelte:head>
  <title>taylor johnston</title>
  <SeoMeta description="Data + graphics journalist. I find the story in the spreadsheet — from records requests and data analysis to design and front-end development." />
</svelte:head>

<div class="page-container">
  <div class="hero">
    <h1>{pre}<span style="color: var(--teal);">{teal}</span>{post}<span class="cursor" class:hidden={done}>|</span></h1>
    <p class="bio">I'm a <b>data visualization journalist</b> who turns complex data into clear, human stories — from the records request to the final interactive. Scroll down to see my work or click here to read more about me.</p>
  </div>

<div class="section-head">
  <span class="label">Featured work</span>
  <hr />
</div>

<div class="featured-list">
  {#each data.featured as item, i}
    <FeaturedItem {item} index={i} />
  {/each}
</div>

<div class="section-head jobs-head">
  <span class="label">By organization</span>
  <hr />
</div>

<div class="jobs">
  {#each data.jobs as job}
    <JobBlock {job} />
  {/each}
</div>

<div class="wall-section">
  <div class="section-head" style="padding: 24px clamp(36px,5vw,72px) 20px; margin-top: 0">
    <span class="label">Visual archive</span>
    <hr />
  </div>
  <WallGrid clips={data.archive} />
</div>
</div>

<style>
  .page-container {
    background: var(--light-teal);
    min-height: 100vh;
  }

  /* ── Hero ── */
  .hero {
    padding: 80px clamp(36px, 5vw, 80px) 72px;
    border-bottom: 1px solid var(--color-border);
    animation: slideUp 0.7s cubic-bezier(0.16,1,0.3,1) both;
  }
  h1 {
    font-family: var(--display);
    font-size: clamp(52px, 9vw, 110px);
    font-weight: normal !important;
    color: var(--black);
    margin-bottom: 24px;
  }
  .cursor {
    color: var(--teal);
    animation: blink 0.8s step-end infinite;
  }
  .cursor.hidden { display: none; }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
  .bio {
    font-family: var(--sans);
    font-size: 2rem;
    line-height: 1.2;
    color: var(--black);
    max-width: 1100px;
    animation: slideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both;
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Section heads ── */
  .section-head {
    padding: 0 clamp(36px, 5vw, 80px);
    margin: 56px 0 28px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .label {
    font-family: var(--sans);
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    white-space: nowrap;
    background-color: var(--teal);
    color: var(--light-teal);
    padding: 5px;
  }
  hr {
    flex: 1;
    border: none;
    border-top: 1px solid var(--teal);
  }

  .featured-list { padding: 0 clamp(36px, 5vw, 80px) 72px; display: flex; flex-direction: column; gap: 56px; }

  .jobs-head { border-top: 1px solid var(--color-border); padding-top: 56px; }
  .jobs { padding: 0 clamp(36px, 5vw, 80px) 72px; }

  .wall-section { border-top: 1px solid var(--color-border); }

  @media (max-width: 680px) {
    .bio { font-size: 1.25rem; }
    .featured-list { gap: 40px; }
  }
</style>

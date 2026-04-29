<script>
  // @ts-nocheck
  import SeoMeta from '$lib/components/SeoMeta.svelte';
  import FeaturedItem from '$lib/components/FeaturedItem.svelte';
  import JobBlock from '$lib/components/JobBlock.svelte';
  import WallGrid from '$lib/components/WallGrid.svelte';
  export let data;
</script>

<svelte:head>
  <title>taylor johnston</title>
  <SeoMeta title="taylor johnston" description="Data + graphics journalist. I find the story in the spreadsheet — from records requests and data analysis to design and front-end development." path="/work" />
</svelte:head>

<div class="page-container">
  <div class="hero">
    <h1>hey there, i'm <span style="color: var(--teal);">taylor</span>.</h1>
    <p class="bio">I'm a <b>data + graphics journalist</b> who finds the story in the spreadsheet — from records requests and data analysis to design and front-end development.</p>
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
  }
  h1 {
    font-family: var(--display);
    font-size: clamp(52px, 9vw, 110px);
    font-weight: normal !important;
    color: var(--black);
    margin-bottom: 24px;
  }
  .bio {
    font-family: var(--sans);
    font-size: 2rem;
    line-height: 1.2;
    color: var(--black);
    max-width: 1100px;
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
    color: var(--emerald);
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

</style>

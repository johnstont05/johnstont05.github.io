<!-- src/routes/+page.svelte -->
<script>
  import FeaturedItem from '$lib/components/FeaturedItem.svelte';
  import JobBlock from '$lib/components/JobBlock.svelte';
  import WallGrid from '$lib/components/WallGrid.svelte';
  export let data;
</script>

<svelte:head><title>Taylor Fay Johnston</title></svelte:head>

<div class="hero">
  <p class="eyebrow">Data visualization journalist</p>
  <h1>Making data <em>tell the story</em></h1>
  <p class="bio">I'm a journalist who uses charts, maps, and interactives to make complex topics clear.</p>
</div>

<div class="section-head">
  <span class="label">Featured</span>
  <hr />
</div>

<div class="featured-list">
  {#each data.featured as item, i}
    <FeaturedItem {item} index={i} />
  {/each}
</div>

<div class="section-head">
  <span class="label">All work</span>
  <hr />
</div>

<div class="jobs">
  {#each data.jobs as job}
    <JobBlock {job} />
  {/each}
</div>

<div class="wall-section">
  <div class="section-head" style="padding: 24px 36px 20px">
    <span class="label">Visual archive</span>
    <hr />
  </div>
  <WallGrid clips={data.jobs.flatMap(j => j.clips)} />
</div>

<style>
  .hero { padding: 60px 36px 52px; max-width: 560px; }
  .eyebrow { font-size: 11px; letter-spacing: 0.09em; text-transform: uppercase; color: var(--ink3); margin-bottom: 18px; }
  h1 { font-family: var(--serif); font-size: 44px; line-height: 1.1; font-weight: 400; margin-bottom: 20px; }
  h1 em { font-style: italic; }
  .bio { font-size: 15px; line-height: 1.75; color: var(--ink2); max-width: 440px; }
  .section-head { padding: 0 36px; margin-bottom: 20px; display: flex; align-items: baseline; gap: 12px; }
  .label { font-size: 11px; letter-spacing: 0.09em; text-transform: uppercase; color: var(--ink3); white-space: nowrap; }
  hr { flex: 1; border: none; border-top: 0.5px solid var(--color-border); }
  .featured-list { padding: 0 36px 64px; display: flex; flex-direction: column; gap: 40px; }
  .jobs { padding: 0 36px 64px; border-top: 0.5px solid var(--color-border); padding-top: 52px; }
  .wall-section { border-top: 0.5px solid var(--color-border); }
</style>
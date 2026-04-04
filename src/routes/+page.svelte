<script>
  import FeaturedItem from '$lib/components/FeaturedItem.svelte';
  import JobBlock from '$lib/components/JobBlock.svelte';
  import WallGrid from '$lib/components/WallGrid.svelte';
  export let data;
</script>

<svelte:head><title>Taylor Fay Johnston</title></svelte:head>

<div class="hero">
  <h1>hi, i'm taylor.</h1>
  <p class="bio">I'm a data visualization journalist who turns complex data into clear, human stories — from the records request to the final interactive.</p>
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

<style>
  /* ── Hero ── */
  .hero {
    padding: 80px clamp(36px, 5vw, 80px) 72px;
    border-bottom: 1px solid var(--color-border);
  }
  h1 {
    font-family: var(--display);
    font-style: italic;
    font-size: clamp(52px, 9vw, 110px);
    line-height: 1.05;
    color: var(--ink);
    margin-bottom: 24px;
  }
  .bio {
    font-family: var(--display);
    font-style: italic;
    font-size: clamp(28px, 4.5vw, 52px);
    line-height: 1.2;
    color: var(--ink2);
    max-width: 900px;
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
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ink3);
    white-space: nowrap;
  }
  hr { flex: 1; border: none; border-top: 1px solid var(--color-border); }

  .featured-list { padding: 0 clamp(36px, 5vw, 80px) 72px; display: flex; flex-direction: column; gap: 56px; }

  .jobs-head { border-top: 1px solid var(--color-border); padding-top: 56px; }
  .jobs { padding: 0 clamp(36px, 5vw, 80px) 72px; }

  .wall-section { border-top: 1px solid var(--color-border); }

</style>

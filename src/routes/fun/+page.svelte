<script>
  // @ts-nocheck
  import SeoMeta from '$lib/components/SeoMeta.svelte';
  export let data;

  /** @param {any[]} arr */
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  $: sections = (() => {
    const map = new Map();
    for (const item of data.fun) {
      const key = item.section || 'Other';
      if (!map.has(key)) map.set(key, { label: key, desc: item.section_desc || '', items: [] });
      map.get(key).items.push(item);
    }
    return [...map.values()].map(s => ({ ...s, items: shuffle(s.items) }));
  })();

  const imgColors = ['#071322', '#0D6862', '#9AA0F4', '#BBBE33', '#2F4E67'];
  const lineSets = [
    ['90%', '65%', '80%', '50%', '75%'],
    ['40%', '70%', '55%', '85%', '60%'],
    ['75%', '45%', '90%', '60%', '70%'],
  ];

  // Cycling span pattern — col × row — drives the scattered look
  const spanPatterns = [
    { col: 2, row: 2 },
    { col: 1, row: 1 },
    { col: 1, row: 2 },
    { col: 1, row: 1 },
    { col: 2, row: 1 },
    { col: 1, row: 1 },
    { col: 1, row: 1 },
    { col: 1, row: 2 },
    { col: 2, row: 1 },
    { col: 1, row: 1 },
    { col: 1, row: 1 },
    { col: 1, row: 1 },
  ];

  // Scroll reveal action
  function reveal(node, delay = 0) {
    node.style.setProperty('--reveal-delay', `${delay}ms`);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('revealed');
        observer.unobserve(node);
      }
    }, { threshold: 0.06, rootMargin: '0px 0px -32px 0px' });
    observer.observe(node);
    return { destroy: () => observer.disconnect() };
  }


</script>

<svelte:head>
  <title>fun - taylor johnston</title>
</svelte:head>

<SeoMeta title="fun — taylor johnston" description="Drawing, crocheting, little experiments, half-baked ideas that turned into something." path="/fun" />

<div class="page-container">
  <div class="hero">
    <h1>things i make <span style="color: var(--lime);">for fun</span></h1>
    <p class="bio">Drawing, crocheting, little experiments, half-baked ideas that turned into something.</p>
  </div>

{#if sections.length === 0}
  {@const placeholders = [
    { label: 'sketchbook', type: 'drawing', layout: 'tall' },
    { label: 'a little map', type: 'illustration', layout: '' },
    { label: 'crochet wip', type: 'making', layout: '' },
    { label: 'sticker pack', type: 'design', layout: 'wide' },
    { label: 'data doodle', type: 'experiment', layout: '' },
    { label: 'pin collection', type: 'photo', layout: '' },
    { label: 'type specimen', type: 'design', layout: '' },
    { label: 'color study', type: 'illustration', layout: 'wide' },
    { label: 'something new', type: '???', layout: '' },
  ]}
  <div class="section">
    <div class="section-head">
      <span class="label">Coming soon</span>
      <hr />
    </div>
    <div class="grid">
      {#each placeholders as p, i}
        {@const color = imgColors[i % imgColors.length]}
        {@const lines = lineSets[i % lineSets.length]}
        {@const span = spanPatterns[i % spanPatterns.length]}
        <div
          class="card placeholder"
          style="grid-column: span {span.col}; grid-row: span {span.row};"
          use:reveal={i * 60}
        >
          <div class="card-bg" style="background: {color}">
            <div class="card-lines">
              {#each lines as w, li}
                <div class="card-line" style="width:{w};{li % 2 === 1 ? 'opacity:0.4' : ''}"></div>
              {/each}
            </div>
          </div>
          <div class="overlay placeholder-overlay">
            <p class="card-title">{p.label}</p>
            <p class="card-type">{p.type}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
{:else}
  {#each sections as section, si}
    <div class="section">
      <div class="section-head">
        <span class="label">{section.label}</span>
        <hr />
      </div>
      {#if section.desc}
        <p class="section-desc">{section.desc}</p>
      {/if}
      <div class="grid">
        {#each section.items as item, i}
          {@const color = imgColors[(si * 3 + i) % imgColors.length]}
          {@const lines = lineSets[(si * 3 + i) % lineSets.length]}
          {@const span = spanPatterns[(si * 3 + i) % spanPatterns.length]}
          <a
            href={item.url || '#'}
            target={item.url ? '_blank' : undefined}
            class="card"
            style="grid-column: span {span.col}; grid-row: span {span.row};"
            use:reveal={i % 3 * 120}
          >
            {#if item.image_url}
              <img class="card-img" src={item.image_url} alt={item.title} loading="lazy" />
            {:else}
              <div class="card-bg" style="background: {color}">
                <div class="card-lines">
                  {#each lines as w, li}
                    <div class="card-line" style="width:{w};{li % 2 === 1 ? 'opacity:0.4' : ''}"></div>
                  {/each}
                </div>
              </div>
            {/if}
            {#if item.annotation}
              <div class="annotation">{item.annotation}</div>
            {/if}
            <div class="overlay">
              <p class="card-title">{item.title}</p>
              {#if item.type}<p class="card-type">{item.type}</p>{/if}
            </div>
          </a>
        {/each}
      </div>
    </div>
  {/each}
{/if}
</div>

<style>
  .page-container {
    background: var(--light-lime);
    min-height: 100vh;
  }

  /* ── Hero ── */
  .hero {
    padding: 70px clamp(36px, 5vw, 80px) 72px;
    border-bottom: 1px solid var(--color-border);
  }

  h1 {
    font-family: var(--display);
    font-size: clamp(52px, 9vw, 110px);
    font-weight: normal !important;
    color: var(--black);
    margin-bottom: 0.5rem;
  }
  .bio {
    font-family: var(--sans);
    font-size: 2rem;
    line-height: 1.2;
    color: var(--black);
    max-width: 1100px;
  }
  .wip {
    font-family: var(--sans);
    font-size: 13px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--lime);
    margin-top: 20px;
  }

  /* ── Sections ── */
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
    background-color: var(--lime);
    color: var(--light-lime);
    padding: 5px;
  }
  hr { flex: 1; border: none; border-top: 1px solid var(--lime); }
  .section-desc {
    padding: 0 36px;
    font-size: 16px;
    line-height: 1.75;
    color: var(--ink2);
    max-width: 520px;
    margin-bottom: 28px;
  }

  /* ── Scattered grid + reveal ── */
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
    gap: 6px;
    padding: 0 6px;
  }

  .card {
    overflow: hidden;
    position: relative;
    display: block;
    text-decoration: none;
    opacity: 0;
    transform: translateY(28px);
    transition:
      opacity 0.55s ease var(--reveal-delay, 0ms),
      transform 0.55s ease var(--reveal-delay, 0ms);
  }

  .card:global(.revealed) {
    opacity: 1;
    transform: translateY(0);
  }

  .card-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .card:hover .overlay { opacity: 1; }

  .card-bg { position: absolute; inset: 0; }
  .card-lines { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 16px; gap: 4px; }
  .card-line { height: 2px; border-radius: 1px; background: rgba(255,255,255,0.3); }

  .annotation {
    position: absolute;
    bottom: 52px;
    left: 12px;
    font-family: var(--handwriting);
    font-size: 15px;
    color: #fff;
    background: rgba(0,0,0,0.55);
    padding: 4px 10px;
    pointer-events: none;
    z-index: 2;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.68);
    opacity: 0;
    transition: opacity 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
  }
  .card-title {
    font-family: var(--sans);
    font-weight: bold;
    font-size: 11px;
    color: #fff;
    margin-bottom: 4px;
    line-height: 1.3;
  }
  .card-type {
    font-size: 10px;
    color: rgba(255,255,255,0.55);
    margin-top: 2px;
    letter-spacing: 0.04em;
  }

  .placeholder { cursor: default; }
  .placeholder-overlay { opacity: 1; background: rgba(0,0,0,0.45); }

  @media (max-width: 700px) {
    .hero { padding-top: 48px; padding-bottom: 40px; }
    h1 {
      font-size: 36px;
      line-height: 1.1;
    }
    .bio { font-size: 18px; }
    .grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 160px; }
  }
</style>

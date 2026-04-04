<script>
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

  const defaultLayouts = ['tall', '', '', 'wide', '', '', '', 'wide', ''];

  function getLayout(item, i) {
    if (item.layout === 'tall' || item.layout === 'wide') return item.layout;
    return defaultLayouts[i % defaultLayouts.length];
  }

  const cardBgs = ['#0d0d0d', '#0a7a76', '#111', '#095c59', '#0d0d0d', '#0a7a76', '#111', '#095c59', '#0d0d0d'];

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

  function makeSVG(i) {
    const t = i % 5;
    if (t === 0) return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M8 40 C12 30 18 20 24 16 C30 12 36 14 40 10" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" fill="none"/><circle cx="24" cy="16" r="3" fill="rgba(255,255,255,0.2)"/></svg>`;
    if (t === 1) return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><polyline points="4,32 10,20 16,24 22,12 28,18 36,6" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" fill="none"/><circle cx="22" cy="12" r="3" fill="rgba(255,255,255,0.2)"/></svg>`;
    if (t === 2) return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="22" width="6" height="14" fill="rgba(255,255,255,0.15)"/><rect x="14" y="14" width="6" height="22" fill="rgba(255,255,255,0.2)"/><rect x="24" y="8" width="6" height="28" fill="rgba(255,255,255,0.25)"/></svg>`;
    if (t === 3) return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="12" cy="28" r="7" fill="rgba(255,255,255,0.1)"/><circle cx="24" cy="16" r="9" fill="rgba(255,255,255,0.18)"/><circle cx="34" cy="24" r="6" fill="rgba(255,255,255,0.12)"/></svg>`;
    return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M8 20 Q14 8 20 20 Q26 32 32 20" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" fill="none"/></svg>`;
  }
</script>

<svelte:head><title>Fun — Taylor Fay Johnston</title></svelte:head>

<div class="hero">
  <p class="intro-line">Outside of work</p>
  <h1>Things I make<br><em>for fun.</em></h1>
  <p class="bio">Drawing, crocheting, little experiments, half-baked ideas that turned into something. No brief, no deadline — just making.</p>
</div>

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
        {@const layout = getLayout(item, i)}
        {@const bg = cardBgs[(si * 3 + i) % cardBgs.length]}
        <a
          href={item.url || '#'}
          target={item.url ? '_blank' : undefined}
          class="card"
          class:tall={layout === 'tall'}
          class:wide={layout === 'wide'}
          style="background: {item.image_url ? `url('${item.image_url}') center/cover no-repeat` : bg}"
          use:reveal={i % 3 * 120}
        >
          {#if !item.image_url}
            <div class="thumb-inner">{@html makeSVG(si * 3 + i)}</div>
          {/if}
          {#if item.annotation}
            <div class="annotation">{item.annotation}</div>
          {/if}
          <div class="overlay">
            <p class="card-title">{item.title}</p>
            <p class="card-type">{item.type}</p>
          </div>
        </a>
      {/each}
    </div>
  </div>
{/each}

<style>
  /* ── Hero ── */
  .hero {
    padding: 80px 36px 72px;
    border-bottom: 1px solid var(--color-border);
  }
  .intro-line {
    font-family: var(--sans);
    font-style: italic;
    font-size: 18px;
    font-weight: 300;
    color: var(--ink2);
    margin-bottom: 4px;
  }
  h1 {
    font-family: var(--display);
    font-style: italic;
    font-size: clamp(64px, 12vw, 140px);
    line-height: 1.05;
    color: var(--ink);
    margin-bottom: 28px;
  }
  h1 em { font-style: italic; color: var(--teal); }
  .bio { font-size: 18px; line-height: 1.7; color: var(--ink2); max-width: 480px; }

  /* ── Sections ── */
  .section { padding-top: 52px; margin-bottom: 72px; }
  .section-head {
    padding: 0 36px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 16px;
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
  .section-desc {
    padding: 0 36px;
    font-size: 16px;
    line-height: 1.75;
    color: var(--ink2);
    max-width: 520px;
    margin-bottom: 28px;
  }

  /* ── Grid + reveal ── */
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 260px;
    gap: 3px;
    padding: 0 3px;
  }

  .card {
    overflow: hidden;
    position: relative;
    display: block;
    text-decoration: none;
    /* reveal start state */
    opacity: 0;
    transform: translateY(28px);
    transition:
      opacity 0.55s ease var(--reveal-delay, 0ms),
      transform 0.55s ease var(--reveal-delay, 0ms);
  }
  .card.tall { grid-row: span 2; }
  .card.wide { grid-column: span 2; }

  /* revealed */
  .card.revealed {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .overlay { opacity: 1; }

  .thumb-inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

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
    font-family: var(--display);
    font-size: 18px;
    color: #fff;
    margin-bottom: 4px;
    line-height: 1.2;
  }
  .card-type {
    font-family: var(--sans);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
  }

  @media (max-width: 700px) {
    .grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 180px; }
  }
</style>

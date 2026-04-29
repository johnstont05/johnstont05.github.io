<script>
  /** @type {any[]} */
  export let clips = [];

  /** @param {any[]} arr */
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  $: shuffled = shuffle(clips);

  const colors = [
    '#071322','#0D6862','#2F4E67','#9AA0F4','#BBBE33',
    '#071322','#0D6862','#2F4E67','#9AA0F4','#BBBE33',
    '#071322','#0D6862','#2F4E67','#9AA0F4','#BBBE33',
    '#071322','#0D6862','#2F4E67','#9AA0F4','#BBBE33',
  ];

  function makeSVG(i) {
    const t = i % 4;
    if (t === 0) return `<svg viewBox="0 0 32 32" fill="none"><polyline points="2,26 8,18 13,22 18,10 24,14 30,6" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" fill="none"/></svg>`;
    if (t === 1) return `<svg viewBox="0 0 32 32" fill="none"><rect x="3" y="18" width="4" height="10" fill="rgba(255,255,255,0.35)"/><rect x="10" y="12" width="4" height="16" fill="rgba(255,255,255,0.45)"/><rect x="17" y="8" width="4" height="20" fill="rgba(255,255,255,0.55)"/><rect x="24" y="14" width="4" height="14" fill="rgba(255,255,255,0.4)"/></svg>`;
    if (t === 2) return `<svg viewBox="0 0 32 32" fill="none"><circle cx="10" cy="20" r="4" fill="rgba(255,255,255,0.3)"/><circle cx="20" cy="12" r="6" fill="rgba(255,255,255,0.4)"/><circle cx="26" cy="22" r="3" fill="rgba(255,255,255,0.3)"/></svg>`;
    return `<svg viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="12" height="8" fill="rgba(255,255,255,0.2)"/><rect x="16" y="2" width="14" height="8" fill="rgba(255,255,255,0.35)"/><rect x="2" y="13" width="8" height="8" fill="rgba(255,255,255,0.4)"/><rect x="13" y="13" width="17" height="8" fill="rgba(255,255,255,0.25)"/><rect x="2" y="24" width="28" height="6" fill="rgba(255,255,255,0.15)"/></svg>`;
  }
</script>

<div class="wall">
  {#each shuffled as clip, i}
    <a href={clip.url} target="_blank" class="tile">
      <div class="inner" style="background: {clip.image_url ? 'transparent' : colors[i % colors.length]}">
        {#if clip.image_url}
          <img class="clip-image" src={clip.image_url} alt={clip.title} loading="lazy" />
        {:else}
          {@html makeSVG(i)}
        {/if}
      </div>
      <div class="overlay">
        <p class="overlay-title">{clip.title}</p>
        <p class="overlay-pub">{clip.org}</p>
      </div>
    </a>
  {/each}
</div>

<style>
  .wall {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2px;
    padding: 0 2px 2px;
  }
  .tile {
    aspect-ratio: 4/3;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    display: block;
    text-decoration: none;
  }
  
  .tile:hover .overlay { opacity: 1; }
  .inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    position: relative;
    overflow: hidden;
  }
  .clip-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.55s ease;
  }
  .tile:hover .clip-image { transform: scale(1.06); }
  .inner :global(svg) { opacity: 0.35; width: 32px; height: 32px; }
  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.55);
    opacity: 0;
    transition: opacity 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px;
  }
  .overlay-title { font-family: var(--sans); font-weight: bold; font-size: 11px; line-height: 1.3; color: var(--white); }
  .overlay-pub { font-size: 10px; color: rgba(255,255,255,0.55); margin-top: 2px; letter-spacing: 0.04em;  }
  
  @media (max-width: 700px) {
    .wall { grid-template-columns: repeat(3, 1fr); }
  }
</style>

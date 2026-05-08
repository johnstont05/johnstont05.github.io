<script>
  // @ts-nocheck
  import { onMount } from 'svelte';

  export let clips;

  const fallbackColors = ['#071322', '#0D6862', '#9AA0F4', '#BBBE33', '#2F4E67'];

  function linkify(text) {
    if (!text) return '';
    return text.replace(
      /\[([^\[\]]+)\]\((https?:\/\/[^)]+)\)|(https?:\/\/\S+)/g,
      (match, label, mdUrl, bareUrl) => {
        if (mdUrl) return `<a href="${mdUrl}" target="_blank" rel="noopener noreferrer">${label}</a>`;
        return `<a href="${bareUrl}" target="_blank" rel="noopener noreferrer">${bareUrl}</a>`;
      }
    );
  }

  function parseTags(tagString) {
    return tagString
      ? tagString.split(/\s*(?:,|\band\b|&)\s*/i).map((t) => t.trim()).filter(Boolean)
      : [];
  }

  let numCols = 4;

  function getNumCols() {
    if (window.innerWidth <= 580) return 1;
    if (window.innerWidth <= 960) return 2;
    if (window.innerWidth <= 1200) return 3;
    return 4;
  }

  onMount(() => {
    numCols = getNumCols();
    const handler = () => { numCols = getNumCols(); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  });

  $: columns = clips.reduce((cols, clip, i) => {
    cols[i % numCols].push(clip);
    return cols;
  }, Array.from({ length: numCols }, () => []));

</script>

<div class="masonry">
  {#each columns as col}
    <div class="col">
      {#each col as clip, i}
        {@const globalIndex = columns.indexOf(col) + i * numCols}
        {@const imgSrc = clip.image_url || clip.featured_image_url}
        {@const tags = parseTags(clip.tag)}
        <div class="card">
          <a href={clip.url} target="_blank" rel="noopener noreferrer" class="card-link">

            <div class="top">
              <span class="org">{clip.org}</span>
              <h3 class="title">{clip.title}</h3>
            </div>

            <div
              class="img"
              style={imgSrc
                ? `background: url('${imgSrc}') center/cover no-repeat`
                : `background: ${fallbackColors[globalIndex % fallbackColors.length]}`}
            ></div>

            <div class="bottom">
              <div class="meta">
                <span class="date">{clip.date}</span>
                <div class="tag-row">
                  {#each tags as tag}
                    <span class="tool-tag">{tag}</span>
                  {/each}
                </div>
              </div>
              {#if clip.featured_why}
                <p class="desc">{@html linkify(clip.featured_why)}</p>
              {/if}
              {#if clip.awards}
                <p class="awards">{clip.awards}</p>
              {/if}
            </div>

          </a>
          {#if clip.note}
            <p class="note">{@html linkify(clip.note)}</p>
          {/if}
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .masonry {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 0 clamp(36px, 5vw, 80px) 72px;
  }

  .col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .card {
    background: #ffffff9e;
    border-radius: 5px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: flex;
    flex-direction: column;
  }

  .card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.09);
  }

  .card-link {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-decoration: none;
    color: inherit;
  }

  /* ── Top: org + title ── */
  .top {
    padding: 16px 18px 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .org {
    font-family: var(--sans);
    font-size: var(--12px);
    font-weight: 700;
    text-transform: uppercase;
    color: var(--black);
  }

  .title {
    font-family: var(--sans);
    font-size: var(--20px);
    font-weight: 800;
    line-height: 1.25;
    color: var(--black);
    margin: 0;
  }

  .card:hover .title {
    color: var(--teal);
  }

  /* ── Image: full-bleed ── */
  .img {
    width: 100%;
    aspect-ratio: 4 / 3;
    flex-shrink: 0;
  }

  /* ── Bottom: date, tags, desc ── */
  .bottom {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 14px 18px 18px;
    gap: 10px;
  }

  .meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .date {
    font-family: var(--sans);
    font-size: var(--12px);
    font-weight: 600;
    text-transform: uppercase;
    color: var(--ink2, #555);
  }

  .tag-row {
    display: flex;
    flex-wrap: nowrap;
    gap: 5px;
    justify-content: flex-end;
    overflow: hidden;
  }

  .tool-tag {
    font-family: var(--sans);
    font-size: var(--12px);
    text-transform: uppercase;
    color: #fff;
    background: var(--black);
    padding: 1px 5px;
    white-space: nowrap;
  }

  .desc {
    font-size: var(--14px);
    line-height: 1.3;
    color: var(--black);
    margin: 0;
  }

  .awards {
    font-size: var(--12px);
    line-height: 1.5;
    color: var(--gray, #888);
    margin: 0;
    white-space: pre-line;
  }

  .note {
    font-size: var(--12px);
    line-height: 1.5;
    color: var(--gray, #888);
    margin: 0;
    white-space: pre-line;
    padding: 0 18px 14px;
  }

  .note :global(a),
  .desc :global(a) {
    color: var(--teal);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
</style>

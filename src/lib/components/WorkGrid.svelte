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
              style={imgSrc ? '' : `background: ${fallbackColors[globalIndex % fallbackColors.length]}`}
            >
              {#if imgSrc}
                <img src={imgSrc} alt={clip.title} />
              {/if}
            </div>

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
    gap: 1.25rem;
    padding: 0 clamp(2.25rem, 5vw, 5rem) 4.5rem;
  }

  .col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .card {
    background: #ffffff9e;
    border-radius: 0.3125rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
    display: flex;
    flex-direction: column;
  }

  .card:hover {
    transform: translateY(-0.1875rem);
    box-shadow: 0 0.375rem 1.25rem rgba(0, 0, 0, 0.09);
    background: #ffffff;
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
    padding: 1rem 1.125rem 0.875rem;
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
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
    overflow: hidden;
  }
  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* ── Bottom: date, tags, desc ── */
  .bottom {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0.875rem 1.125rem 1.125rem;
    gap: 0.625rem;
  }

  .meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.625rem;
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
    gap: 0.3125rem;
    justify-content: flex-end;
    overflow: hidden;
  }

  .tool-tag {
    font-family: var(--sans);
    font-size: var(--12px);
    text-transform: uppercase;
    color: #fff;
    background: var(--black);
    padding: 0.0625rem 0.3125rem;
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
    padding: 0 1.125rem 0.875rem;
  }

  .note :global(a),
  .desc :global(a) {
    color: var(--teal);
    text-decoration: underline;
    text-underline-offset: 0.125rem;
  }

  @media (max-width: 580px) {
    .masonry {
      padding-left: 1rem;
      padding-right: 1rem;
      justify-content: center;
    }
    .col {
      width: 100%;
      max-width: 100%;
    }
  }
</style>

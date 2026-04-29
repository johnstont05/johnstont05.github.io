<script>
  // @ts-nocheck
  export let item;
  export let index;

  const imgColors = ['#071322', '#0D6862', '#9AA0F4', '#BBBE33', '#2F4E67'];
  const bgColor = imgColors[index % imgColors.length];
  $: featImg = item.featured_image_url || item.image_url;

  const lineSets = [
    ['90%', '65%', '80%', '50%', '75%'],
    ['40%', '70%', '55%', '85%', '60%'],
    ['75%', '45%', '90%', '60%', '70%'],
  ];
  const lines = lineSets[index % lineSets.length];
  $: tags = item.tag
    ? item.tag.split(/\s*(?:,|\band\b|&)\s*/i).map((tag) => tag.trim()).filter(Boolean)
    : [];

  /** @param {HTMLElement} node */
  function reveal(node) {
    node.style.opacity = '0';
    node.style.transform = 'translateY(36px)';
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        node.style.opacity = '1';
        node.style.transform = 'translateY(0)';
        observer.unobserve(node);
      }
    }, { threshold: 0.08 });
    observer.observe(node);
    return { destroy: () => observer.disconnect() };
  }
</script>

<div class="item" class:even={index % 2 === 1} use:reveal>
  <div class="img-wrap">
    <div class="img" style="background: {featImg ? `url('${featImg}') center/cover no-repeat` : bgColor}">
      {#if !featImg}
        <div class="fi-lines">
          {#each lines as w, li}
            <div class="fi-line" style="width:{w};{li % 2 === 1 ? 'opacity:0.4' : ''}"></div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
  <div class="body">
    <h2><a href={item.url} target="_blank">{item.title}</a></h2>
    <p class="why">{item.featured_why}</p>
    <div class="meta">
      <span class="pub">{item.org} · {item.date}</span>
      <div class="tag-row">
        {#each tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    </div>
    <a href={item.url} target="_blank" class="link">View project ↗</a>
  </div>
</div>

<style>
  .item { display: grid; grid-template-columns: clamp(280px, 42%, 420px) 1fr; gap: 64px; align-items: start; }
  .item.even { grid-template-columns: 1fr clamp(280px, 42%, 420px); }
  .item.even .img-wrap { order: 2; }
  .item.even .body { order: 1; }

  .img-wrap { position: relative; }

  .img {
    width: 100%;
    aspect-ratio: 4/3;
    overflow: hidden;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
  }
  .fi-lines { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 16px; gap: 4px; }
  .fi-line { height: 2px; border-radius: 1px; background: rgba(255,255,255,0.3); }

  .body { display: flex; flex-direction: column; }

  h2 {
    font-family: var(--sans);
    font-size: 28px;
    line-height: 1.2;
    margin-bottom: 16px;
  }
  h2 a { color: var(--ink); text-decoration: none; }
  h2 a:hover { color: var(--teal); }

  .why {
    font-size: 16px;
    line-height: 1.75;
    color: var(--ink2);
    max-width: 100vw;
  }

  .meta {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 20px;
    border-top: 1px solid var(--color-border);
    margin-bottom: 24px;
  }
  .pub {
    font-size: 13px;
    letter-spacing: 0.03em;
    color: var(--gray);
  }
  .tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .tag {
    font-family: var(--sans);
    font-size: 11px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #fff;
    background: var(--black);
    padding: 3px 7px;
    border-radius: 3px;
    white-space: nowrap;
  }

  /* CTA — action item, stands apart */
  .link {
    font-family: var(--sans);
    font-weight: 700;
    font-size: 15px;
    color: var(--teal);
    text-decoration: none;
    border-bottom: 1px solid var(--teal);
    padding-bottom: 2px;
    align-self: flex-start;
    transition: opacity 0.15s;
  }
  .link:hover { opacity: 0.7; }

  @media (max-width: 680px) {
    .item, .item.even { grid-template-columns: 1fr; gap: 20px; }
    .item.even .img { order: 0; }
    .item.even .body { order: 1; }
    h2 { font-size: 20px; }
    .tag { font-size: 12px; }
  }
</style>

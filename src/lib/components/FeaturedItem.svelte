<script>
  export let item;
  export let index;

  const imgColors = ['#0d0d0d', '#0a7a76', '#1a1a1a'];
  const bgColor = imgColors[index % imgColors.length];
  $: featImg = item.featured_image_url || item.image_url;

  const lineSets = [
    ['90%', '65%', '80%', '50%', '75%'],
    ['40%', '70%', '55%', '85%', '60%'],
    ['75%', '45%', '90%', '60%', '70%'],
  ];
  const lines = lineSets[index % lineSets.length];
</script>

<div class="item" class:even={index % 2 === 1}>
  <div class="img" style="background: {featImg ? `url('${featImg}') center/cover no-repeat` : bgColor}">
    {#if !featImg}
      <div class="fi-lines">
        {#each lines as w, li}
          <div class="fi-line" style="width:{w};{li % 2 === 1 ? 'opacity:0.4' : ''}"></div>
        {/each}
      </div>
    {/if}
  </div>
  <div class="body">
    <h2><a href={item.url} target="_blank">{item.title}</a></h2>
    <p class="why">{item.featured_why}</p>
    <div class="meta">
      <span class="pub">{item.org} · {item.date}</span>
      <span class="tag">{item.tag}</span>
    </div>
    <a href={item.url} target="_blank" class="link">View project ↗</a>
  </div>
</div>

<style>
  .item { display: grid; grid-template-columns: clamp(280px, 42%, 420px) 1fr; gap: 40px; align-items: start; }
  .item.even { grid-template-columns: 1fr clamp(280px, 42%, 420px); }
  .item.even .img { order: 2; }
  .item.even .body { order: 1; }

  .img { width: 100%; aspect-ratio: 4/3; overflow: hidden; flex-shrink: 0; position: relative; }
  .fi-lines { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 16px; gap: 4px; }
  .fi-line { height: 2px; border-radius: 1px; background: rgba(255,255,255,0.3); }

  .body { padding-top: 4px; display: flex; flex-direction: column; gap: 0; }

  h2 {
    font-family: var(--display);
    font-size: 26px;
    line-height: 1.2;
    margin-bottom: 14px;
  }
  h2 a { color: var(--ink); text-decoration: none; }
  h2 a:hover { color: var(--teal); }

  .why {
    font-size: 16px;
    line-height: 1.7;
    color: var(--ink2);
    margin-bottom: 20px;
  }

  .meta {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
  .pub { font-size: 16px; color: var(--ink3); }
  .tag {
    font-family: var(--sans);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--ink3);
    border: 1px solid var(--color-border-mid);
    padding: 3px 10px;
  }

  .link {
    font-family: var(--sans);
    font-weight: 700;
    font-size: 16px;
    color: var(--teal);
    text-decoration: none;
    border-bottom: 1px solid var(--teal);
    padding-bottom: 2px;
    align-self: flex-start;
    transition: opacity 0.15s;
  }
  .link:hover { opacity: 0.7; }
</style>

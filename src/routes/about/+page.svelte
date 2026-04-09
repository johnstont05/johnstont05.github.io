<svelte:head>
  <title>about - taylor johnston</title>
</svelte:head>

<div class="page-container">
  <div class="hero">
    <h1>about <span style="color: var(--lavender);">me</span>.</h1>
  </div>

<div class="body">
  <div class="photo-col">
    <img src="/johnston_headshot.jpg" alt="Taylor Johnston" class="headshot" />
  </div>
  <div class="left">
    <p>Data + graphics journalist. I report, I code, I draw. I care about making complex things understandable to people who don't spend their days in spreadsheets.</p>
    <p>I've worked at CBS News as a <a href="https://www.cbsnews.com/team/taylor-johnston/" target="_blank">visual data journalist</a> and as a <a href="https://www.ctinsider.com/author/taylor-johnston/" target="_blank">graphics reporter at Hearst Connecticut Media Group</a>. First-gen grad from Ohio University with degrees in journalism and interactive information design.</p>
    <p>When I'm not in a spreadsheet: stickers for my <a href="https://www.etsy.com/shop/stickersbytayjay" target="_blank">Etsy shop</a>, audiobooks, collecting pins.</p>
  </div>
  <div class="right">
    <div class="block">
      <p class="section-label">Tools &amp; skills</p>
      <div class="tag-row">
        {#each ['D3.js', 'Svelte', 'R', 'Python', 'Mapbox', 'QGIS', 'Observable', 'Illustrator', 'ai2html', 'SQL'] as skill}
          <span class="tag">{skill}</span>
        {/each}
      </div>
    </div>
    <div class="block">
      <p class="section-label">Find me</p>
      <div class="contact">
        <a href="https://x.com/TF_Johnston" target="_blank">Twitter / X ↗</a>
        <a href="https://bsky.app/profile/taylorjohnston.bsky.social" target="_blank">Bluesky ↗</a>
        <a href="https://github.com/johnstont05" target="_blank">GitHub ↗</a>
        <a href="mailto:taylorfjohnston@gmail.com">Email ↗</a>
      </div>
    </div>
  </div>
</div>
</div>

<style>
  .page-container {
    background: var(--light-lavender);
    min-height: 100vh;
  }

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

  .body {
    padding: 52px clamp(36px, 5vw, 80px) 72px;
    display: grid;
    grid-template-columns: 260px 1fr 240px;
    gap: 64px;
    max-width: 1100px;
  }

  .photo-col { padding-top: 4px; }
  .headshot {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    object-position: top;
    display: block;
    border-radius: 62% 38% 46% 54% / 60% 44% 56% 40%;
  }

  .left p {
    font-size: 16px;
    line-height: 1.75;
    color: var(--ink2);
    margin-bottom: 16px;
  }
  .left a { color: var(--ink); text-decoration: underline; text-underline-offset: 3px; }

  .right { padding-top: 4px; display: flex; flex-direction: column; gap: 36px; }
  .section-label {
    font-family: var(--sans);
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ink3);
    margin-bottom: 12px;
  }
  .tag-row { display: flex; flex-wrap: wrap; gap: 6px; }
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

  .contact a {
    display: block;
    font-family: var(--sans);
    font-weight: 700;
    font-size: 16px;
    color: var(--ink2);
    text-decoration: none;
    padding: 12px 0;
    border-top: 1px solid var(--color-border);
    transition: color 0.15s;
  }
  .contact a:last-child { border-bottom: 1px solid var(--color-border); }
  .contact a:hover { color: var(--teal); }

  @media (max-width: 900px) {
    .body { grid-template-columns: 200px 1fr; }
    .right { grid-column: 2; }
  }
  @media (max-width: 600px) {
    .body { grid-template-columns: 1fr; gap: 40px; }
  }
</style>

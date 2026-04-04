<svelte:head>
  <title>About — Taylor Fay Johnston</title>
</svelte:head>

<div class="hero">
  <p class="intro-line">About me</p>
  <h1>Taylor<br>Johnston</h1>
</div>

<div class="body">
  <div class="left">
    <p>Data + graphics journalist. I report, I code, I draw. I care about making complex things understandable to people who don't spend their days in spreadsheets.</p>
    <p>I've worked at CBS News as a <a href="https://www.cbsnews.com/team/taylor-johnston/" target="_blank">visual data journalist</a> and as a <a href="https://www.ctinsider.com/author/taylor-johnston/" target="_blank">graphics reporter at Hearst Connecticut Media Group</a>. First-gen grad from Ohio University with degrees in journalism and interactive information design.</p>
    <p>When I'm not in a spreadsheet: stickers for my <a href="https://www.etsy.com/shop/stickersbytayjay" target="_blank">Etsy shop</a>, audiobooks, collecting pins.</p>
  </div>
  <div class="right">
    <div class="block">
      <p class="section-label">Tools &amp; skills</p>
      <p class="skills">D3.js · Svelte · R · Python<br>Mapbox · QGIS · Observable<br>Illustrator · ai2html · SQL</p>
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

<style>
  .hero {
    padding: 80px 36px 64px;
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
    font-size: clamp(72px, 13vw, 152px);
    line-height: 1.05;
    color: var(--ink);
  }

  .body {
    padding: 52px 36px 72px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    max-width: 900px;
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
  .skills { font-size: 16px; line-height: 2; color: var(--ink2); }

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

  @media (max-width: 700px) {
    .body { grid-template-columns: 1fr; gap: 40px; }
  }
</style>

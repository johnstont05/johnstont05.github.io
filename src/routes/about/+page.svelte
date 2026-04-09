<svelte:head>
  <title>about - taylor johnston</title>
</svelte:head>

<div class="page-container">
  <div class="hero">
    <h1>about <span style="color: var(--lavender);">me</span>.</h1>
    <p class="tagline">data journalist · visual storyteller · maker of things</p>
  </div>

  <div class="body">
    <div class="photo-col">
      <img src="/johnston_headshot.jpg" alt="Taylor Johnston" class="headshot" />
      <p class="photo-caption">📍 based in the u.s.</p>
    </div>

    <div class="left">
      <p class="lead">I'm a journalist with the focus of telling <mark>impactful stories</mark> at the intersection of <mark>data and design</mark>.</p>
      <p>Previously, I worked at <a href="https://www.cbsnews.com/team/taylor-johnston/" target="_blank">CBS News</a> as a visual data journalist on the data team. Before that, I was a <a href="https://www.ctinsider.com/author/taylor-johnston/" target="_blank">graphics reporter at Hearst Connecticut Media Group</a>.</p>
      <p>I'm also a <mark>first-generation college student</mark> who graduated from Ohio University with degrees in journalism and interactive information design.</p>
      <p>When I'm not sifting through a spreadsheet or creating viz, you can find me making stickers for my <a href="https://www.etsy.com/shop/stickersbytayjay" target="_blank">Etsy shop</a>, listening to an audiobook, or traveling to new places to collect pins.</p>

      <div class="skills-block">
        <p class="section-label">Tools &amp; skills</p>
        <div class="tag-row">
          {#each ['D3.js', 'Svelte', 'R', 'Python', 'Mapbox', 'QGIS', 'Observable', 'Illustrator', 'ai2html', 'SQL'] as skill}
            <span class="tag">{skill}</span>
          {/each}
        </div>
      </div>
    </div>

    <div class="right">
      <p class="section-label">Find me</p>
      <div class="contact">
        <a href="https://x.com/TF_Johnston" target="_blank">
          <span class="contact-label">Twitter / X</span>
          <span class="arrow">↗</span>
        </a>
        <a href="https://bsky.app/profile/taylorjohnston.bsky.social" target="_blank">
          <span class="contact-label">Bluesky</span>
          <span class="arrow">↗</span>
        </a>
        <a href="https://github.com/johnstont05" target="_blank">
          <span class="contact-label">GitHub</span>
          <span class="arrow">↗</span>
        </a>
        <a href="mailto:taylorfjohnston@gmail.com">
          <span class="contact-label">Email</span>
          <span class="arrow">↗</span>
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .page-container {
    background: var(--light-lavender);
    min-height: 100vh;
  }

  /* ── Hero ── */
  .hero {
    padding: 80px clamp(36px, 5vw, 80px) 60px;
    border-bottom: 1px solid var(--color-border);
    animation: slideUp 0.7s cubic-bezier(0.16,1,0.3,1) both;
  }
  h1 {
    font-family: var(--display);
    font-size: clamp(52px, 9vw, 110px);
    font-weight: normal !important;
    color: var(--black);
    margin-bottom: 16px;
  }
  h1::after {
    content: '|';
    color: var(--lavender);
    animation: blink 1.1s step-end infinite;
    margin-left: 4px;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
  .tagline {
    font-family: var(--sans);
    font-size: 13px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink3);
    animation: slideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both;
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Body grid ── */
  .body {
    padding: 56px clamp(36px, 5vw, 80px) 80px;
    display: grid;
    grid-template-columns: 220px 1fr 200px;
    gap: 56px;
    max-width: 1100px;
  }

  /* ── Photo ── */
  .photo-col { padding-top: 4px; }
  .headshot {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    object-position: top;
    display: block;
    border-radius: 62% 38% 46% 54% / 60% 44% 56% 40%;
    margin-bottom: 12px;
    transition: transform 0.2s ease;
    cursor: pointer;
  }
  .headshot:hover { animation: wiggle 0.5s ease; }
  @keyframes wiggle {
    0%   { transform: rotate(0deg); }
    20%  { transform: rotate(-4deg) scale(1.03); }
    40%  { transform: rotate(4deg) scale(1.03); }
    60%  { transform: rotate(-2deg); }
    80%  { transform: rotate(2deg); }
    100% { transform: rotate(0deg); }
  }
  .photo-caption {
    font-family: var(--sans);
    font-size: 12px;
    color: var(--ink3);
    text-align: center;
    letter-spacing: 0.04em;
  }

  /* ── Bio ── */
  .left { display: flex; flex-direction: column; gap: 0; }
  .lead {
    font-size: 18px;
    line-height: 1.7;
    color: var(--ink);
    margin-bottom: 20px;
    font-weight: 500;
  }
  .left p {
    font-size: 15px;
    line-height: 1.8;
    color: var(--ink2);
    margin-bottom: 16px;
  }
  .left a { color: var(--ink); text-decoration: underline; text-underline-offset: 3px; }

  mark {
    background: linear-gradient(120deg, var(--lime) 0%, var(--lime) 100%);
    background-repeat: no-repeat;
    background-size: 0% 45%;
    background-position: 0 88%;
    animation: highlight 0.6s ease forwards;
    animation-delay: 0.6s;
    color: inherit;
    padding: 0 2px;
  }
  @keyframes highlight {
    to { background-size: 100% 45%; }
  }

  .skills-block {
    margin-top: 32px;
    padding-top: 28px;
    border-top: 1px solid var(--color-border);
  }

  /* ── Section labels ── */
  .section-label {
    font-family: var(--sans);
    font-weight: 700;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink3);
    margin-bottom: 14px;
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
    display: inline-block;
    transition: transform 0.15s ease, background 0.15s ease;
  }
  .tag:hover { transform: translateY(-2px) scale(1.05); background: var(--lavender); }

  /* ── Contact ── */
  .right { padding-top: 4px; }
  .contact { display: flex; flex-direction: column; }
  .contact a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--sans);
    font-size: 15px;
    color: var(--ink2);
    text-decoration: none;
    padding: 14px 0;
    border-bottom: 1px solid var(--color-border);
    transition: color 0.15s, padding-left 0.15s;
  }
  .contact a:first-child { border-top: 1px solid var(--color-border); }
  .contact a:hover { color: var(--white); padding-left: 10px; background: var(--black); }
  .contact-label { font-weight: 600; }
  .arrow { opacity: 0.4; font-size: 13px; }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .body { grid-template-columns: 180px 1fr; }
    .right { grid-column: 2; grid-row: 2; }
    .skills-block { grid-column: span 2; }
  }
  @media (max-width: 600px) {
    .body { grid-template-columns: 1fr; gap: 36px; }
    .right { grid-column: 1; grid-row: auto; }
  }
</style>

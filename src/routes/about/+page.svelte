<script>
  import SeoMeta from '$lib/components/SeoMeta.svelte';
</script>

<svelte:head>
  <title>about - taylor johnston</title>
  <SeoMeta title="about — taylor johnston" description="Journalist. Data nerd. Sticker maker. First-gen kid from Ohio who found her people in a spreadsheet." path="/about" />
</svelte:head>

<div class="page-container">
  <div class="hero">
    <h1>about <span style="color: var(--lavender);">me</span>.</h1>
    <!-- <p class="bio">Journalist. Data nerd. Sticker maker. First-gen kid from Ohio who found her people in a spreadsheet.</p> -->
  </div>

  <div class="body">
    <div class="photo-col">
      <img src="/johnston_headshot.jpg" alt="Taylor Johnston" class="headshot" />
    </div>

    <div class="left">
      <p>I'm a journalist with the focus of telling impactful stories at the intersection of data and design.</p>
      <p>Previously, I worked at <a href="https://www.cbsnews.com/team/taylor-johnston/" target="_blank">CBS News</a> as a visual data journalist on the data team. Before that, I was a <a href="https://www.ctinsider.com/author/taylor-johnston/" target="_blank">graphics reporter at Hearst Connecticut Media Group</a>.</p>
      <p>I'm also a first-generation college student who graduated from Ohio University with degrees in journalism and interactive information design.</p>
      <p>When I'm not sifting through a spreadsheet or creating viz, you can find me making stickers for my <a href="https://www.etsy.com/shop/stickersbytayjay" target="_blank">Etsy shop</a>, listening to an audiobook, or traveling to new places to collect pins.</p>

      <p class="find-me">Find me <a href="https://x.com/TF_Johnston" target="_blank">@TF_Johnston</a> / <a href="https://bsky.app/profile/taylorjohnston.bsky.social" target="_blank">bsky</a> / <a href="https://github.com/johnstont05" target="_blank">github</a> / <a href="mailto:taylorfjohnston@gmail.com">mail</a></p>
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
  }
  .bio {
    font-family: var(--sans);
    font-size: 2rem;
    line-height: 1.2;
    color: var(--black);
    max-width: 1100px;
  }
  h1 {
    font-family: var(--display);
    font-size: clamp(52px, 9vw, 110px);
    font-weight: normal !important;
    color: var(--black);
    margin-bottom: 16px;
  }

  /* ── Body grid ── */
  .body {
    padding: 56px clamp(36px, 5vw, 80px) 80px;
    display: grid;
    grid-template-columns: 320px 1fr;
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
  }

  /* ── Bio ── */
  .left { display: flex; flex-direction: column; }
  .left p {
    font-size: 15px;
    line-height: 1.8;
    color: var(--ink2);
    margin-bottom: 16px;
  }
  .left a { color: var(--ink); text-decoration: underline; text-underline-offset: 3px; }

  /* ── Find me ── */
  .find-me {
    font-size: 15px;
    color: var(--ink3);
    margin-top: 8px;
  }
  .find-me a { color: var(--ink); text-decoration: none; }
  .find-me a:hover { text-decoration: underline; text-underline-offset: 3px; }

  /* ── Responsive ── */
  @media (max-width: 700px) {
    .body { grid-template-columns: 1fr; gap: 36px; }
  }
</style>

<svelte:head>
  <title>Taylor Johnston — About</title>
</svelte:head>

<div class="container">
  <main>
    <div class="about-image">
      <div id="wrap" class="img-wrap">
        <img src="/johnston_headshot.jpg" alt="Black and white headshot of Taylor Johnston." />
      </div>
    </div>
    <div class="about-text">
      <p>Hello! I'm Taylor Johnston (she/her).</p>
      <p>
        I'm a journalist with the focus of telling impactful stories at the
        intersection of data and design.
      </p>
      <p>
        Currently, I work at CBS News as a <a
          href="https://www.cbsnews.com/team/taylor-johnston/"
          target="_blank">visual data journalist</a
        > on the data team.
      </p>
      <p>
        Previously, I was a <a
          href="https://www.ctinsider.com/author/taylor-johnston/"
          target="_blank">graphics reporter at Hearst Connecticut Media Group</a
        >. I am also a first-generation college student who graduated from Ohio
        University with degrees in journalism and interactive information
        design.
      </p>
      <p>
        When I am not sifting through a spreadsheet or creating viz, you can
        find me making stickers for my <a
          href="https://www.etsy.com/shop/stickersbytayfayjay"
          target="_blank">Etsy shop</a
        >, listening to an audiobook or traveling to new places to collect pins.
      </p>
      <p>
        Find me <a href="https://x.com/TF_Johnston" target="_blank"
          >@TF_Johnston</a
        >
        / <a href="taylorjohnston.bsky.social" target="_blank">bsky</a> /
        <a href="mailto:taylorfjohnston@gmail.com">mail</a>
        / <a href="https://github.com/johnstont05" target="_blank">github</a>
      </p>
    </div>
  </main>
</div>

<style>
  a {
    color: black;
    text-decoration: none; /* Optional: Removes underline */
  }

  .container {
    max-width: 900px;
    display: flex;
    justify-content: center;
    margin-top: 150px;
    /* padding: 20px; */
  }

  main {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin: 0 auto;
    flex-direction: row;
  }

  .about-image {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
  }

  .img-wrap {
    margin-right: 40px;
    position: relative;
    padding: 30px;
  }

  .img-wrap::after {
    content: "";
    border-radius: 999px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: conic-gradient(from 30deg, black, black 46%, transparent 46%);
    -webkit-mask: radial-gradient(
      farthest-side,
      transparent calc(100% - 3px),
      #fff calc(100% - 2px)
    );
    mask: radial-gradient(
      farthest-side,
      transparent calc(100% - 3px),
      #fff calc(100% - 2px)
    );
  }

  img {
    border-radius: 999px;
    display: block;
    width: 100%;
    max-width: 360px;
    height: auto;
  }

  .about-text {
    width: 600px;
    max-width: 100%;
    line-height: 1.5;
    font-family: "Roboto Mono", monospace;
    font-size: 16px;
  }

  p {
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    main {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .about-text {
      width: 90%;
      text-align: left;
      font-size: .9rem;
      margin: auto;
    }
  }
</style>

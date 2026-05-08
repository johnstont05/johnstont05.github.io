<script>
  export let funSections = [];
</script>

<div class="hero">
  <h1>Taylor Johnston</h1>
  <div class="tag">
    data journalist <span class="sep">*</span> information designer
    <span class="sep">*</span> developer
  </div>
  <p class="bio">
    I do the analysis, write the code and build the thing. I've made hundreds
    of charts, built interactive maps and scrollytelling experiences and
    wrangled more datasets than I'd like to admit — all in service of making
    complicated things make sense. I'm happiest when the work actually changes
    how someone understands something. <br /><br />
    When I'm not in a spreadsheet, I'm either drawing on my iPad, listening to
    an audiobook or collecting pins from somewhere I've traveled to.
  </p>
  <p class="jump-sentence">
    Take a look at my <a href="#work" class="jump-inline">work</a>
    {#if funSections.length}
      – or take a detour through <a
        href="#{funSections[0].label.toLowerCase().replace(/\s+/g, '-')}"
        class="jump-inline">a fun thing I made</a
      >{/if}.
  </p>
</div>

<style>
  .hero {
    background: var(--teal);
    padding: 4.25rem clamp(2.25rem, 5vw, 5rem) 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  h1 {
    font-family: var(--display);
    font-size: var(--88px);
    font-weight: 400;
    line-height: 1;
    color: var(--light-teal);
    margin-bottom: 1.25rem;
  }
  .tag {
    font-family: var(--sans);
    color: var(--chartreuse);
    font-size: var(--24px);
    font-weight: 500;
    letter-spacing: 0.02em;
    margin-bottom: 1.5rem;
  }
  .tag .sep {
    vertical-align: -0.2em;
  }
  .bio {
    font-family: var(--sans);
    font-size: var(--18px);
    line-height: 1.4;
    color: var(--light-teal);
    max-width: 46.875rem;
  }
  .bio a {
    color: var(--light-teal);
    font-weight: 400;
    text-decoration: underline;
    text-decoration-color: rgba(222, 234, 233, 0.5);
    text-underline-offset: 0.15em;
  }
  .jump-sentence {
    font-family: var(--sans);
    font-size: var(--18px);
    color: var(--light-teal);
    margin-top: 1.75rem;
    line-height: 1.4;
  }
  .jump-inline {
    color: var(--chartreuse);
    font-weight: 700;
    text-decoration: none;
    transition: opacity 0.15s;
  }
  .jump-inline:hover {
    opacity: 0.75;
  }
  @media (max-width: 680px) {
    .hero {
      padding-top: 3rem;
      padding-bottom: 2.5rem;
    }
    h1 {
      font-size: var(--36px);
      margin-bottom: 0.5rem;
    }
    .tag {
      font-size: var(--20px);
      line-height: 1.1;
      margin-bottom: 1rem;
    }
    .bio {
      font-size: var(--16px);
    }
  }
</style>

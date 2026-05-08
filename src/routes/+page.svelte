<script>
  // @ts-nocheck
  import WorkGrid from "$lib/components/WorkGrid.svelte";
  export let data;

  function dateValue(str) {
    if (!str) return 0;
    const ts = Date.parse(str.replace(/\./g, ''));
    return Number.isNaN(ts) ? 0 : ts;
  }

  $: work = data.allWork;

  $: funSections = (() => {
    const map = new Map();
    for (const item of data.fun) {
      const key = item.section || "Fun";
      if (!map.has(key)) map.set(key, { label: key, items: [] });
      map.get(key).items.push({
        org: item.type || "",
        title: item.title,
        url: item.url || "#",
        image_url: item.image_url || "",
        featured_image_url: "",
        date: item.date || "",
        tag: item.tag || "",
        featured_why: item.featured_why || "",
        awards: item.awards || "",
        note: item.note || "",
      });
    }
    return [...map.values()].map((s) => ({
      ...s,
      items: s.items.sort((a, b) => dateValue(b.date) - dateValue(a.date)),
    }));
  })();
</script>

<svelte:head>
  <title>Taylor Johnston | Data Visualization Designer and Developer</title>
</svelte:head>

<div class="page-container">
  <div class="hero">
    <!-- <div class="intro">Hey, I'm</div> -->
    <h1>Taylor Johnston</h1>
    <div class="tag">
      data journalist &bull; information designer &bull; developer
    </div>
    <p class="bio">
I do the analysis, write the code and build the thing. I've made hundreds of charts, built interactive maps and scrollytelling experiences and wrangled more datasets than I'd like to admit — all in service of making complicated things make sense. I'm happiest when the work actually changes how someone understands something. <br><br>
When I'm not in a spreadsheet, I'm making stickers for my <a href="https://www.etsy.com/shop/stickersbytayfayjay" target="_blank">Etsy shop</a>, listening to an audiobook or collecting pins from somewhere I've traveled to.



    </p>
    <p class="jump-sentence">
      Take a look at my <a href="#work" class="jump-inline">work</a> {#if funSections.length}  – or take a detour through <a href="#{funSections[0].label.toLowerCase().replace(/\s+/g, '-')}" class="jump-inline">a fun thing I made</a>{/if}.
    </p>
  </div>

  {#if work.length}
    <div id="work" class="section-head">
      <span class="label">Work</span>
      <hr />
    </div>
    <WorkGrid clips={work} />
  {/if}

  {#each funSections as section}
    <div id={section.label.toLowerCase().replace(/\s+/g, '-')} class="section-head">
      <span class="label">{section.label}</span>
      <hr />
    </div>
    <WorkGrid clips={section.items} />
  {/each}
</div>

<style>
  .page-container {
    background: var(--light-teal);
    min-height: 100vh;
  }

  /* Hero */
  .hero {
    background: var(--teal);
    padding: 68px clamp(36px, 5vw, 80px) 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  /* .intro {
    font-family: var(--sans);
    font-size: var(--16px);
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--light-teal);
    margin-bottom: 0.5rem;
  } */
  h1 {
    font-family: var(--display);
    font-size: var(--80px);
    font-weight: 400;
    line-height: 1;
    color: var(--light-teal);
    margin-bottom: 20px;
  }
  .tag {
    font-family: var(--sans);
    color: var(--chartreuse);
    font-size: var(--24px);
    font-weight: 500;
    letter-spacing: 0.02em;
    margin-bottom: 24px;
  }
  .bio {
    font-family: var(--sans);
    font-size: var(--18px);
    line-height: 1.4;
    color: var(--light-teal);
    max-width: 700px;
  }
  .bio a {
    color: var(--light-teal);
    font-weight: 700;
    text-decoration-color: rgba(222, 234, 233, 0.4);
  }

  .jump-sentence {
    font-family: var(--sans);
    font-size: var(--18px);
    color: rgba(222, 234, 233, 0.6);
    margin-top: 28px;
    line-height: 1.4;
  }
  .jump-inline {
    color: var(--chartreuse);
    font-weight: 700;
    text-decoration: none;
    transition: opacity 0.15s;
  }
  .jump-inline:hover { opacity: 0.75; }

  /* Work section heads */
  .section-head {
    padding: 0 clamp(36px, 5vw, 80px);
    margin: 56px 0 28px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .label {
    font-family: var(--sans);
    font-size: var(--16px);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-weight: bold;
    white-space: nowrap;
    background-color: var(--teal);
    color: var(--light-teal);
    padding: 5px;
  }
  hr {
    flex: 1;
    border: none;
    border-top: 1px solid var(--teal);
  }
  @media (max-width: 680px) {
    .hero {
      padding-top: 48px;
      padding-bottom: 40px;
    }
    h1 {
      font-size: var(--40px);
    }
    .tag {
      font-size: var(--16px);
    }
    .bio {
      font-size: var(--14px);
    }
  }
</style>

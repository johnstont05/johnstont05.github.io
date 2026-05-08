<script>
  // @ts-nocheck
  import WorkGrid from "$lib/components/WorkGrid.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import SectionHead from "$lib/components/SectionHead.svelte";
  export let data;

  function dateValue(str) {
    if (!str) return 0;
    const ts = Date.parse(str.replace(/\./g, ""));
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
  <Hero {funSections} />

  {#if work.length}
    <SectionHead id="work" label="Work" />
    <WorkGrid clips={work} />
  {/if}

  {#each funSections as section}
    <SectionHead
      id={section.label.toLowerCase().replace(/\s+/g, "-")}
      label={section.label}
    />
    <WorkGrid clips={section.items} />
  {/each}
</div>

<style>
  .page-container {
    background: var(--light-teal);
    min-height: 100vh;
  }

</style>

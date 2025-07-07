<script>
  import { onMount } from "svelte";
  export let sheetName = "website-clips";

  let items = [];
  export let featuredItems = [];

  async function loadData() {
    const url = `https://docs.google.com/spreadsheets/d/1K-HjSLaGx8tCMtXi_H83-JDjLsNGuJ2U2-wJH4fQJnc/gviz/tq?tqx=out:csv&sheet=${sheetName}`;
    const response = await fetch(url);
    const text = await response.text();

    const rows = text.split("\n").map((row) => row.split(","));
    rows.shift(); // remove header

    const parsed = rows.map((row) => ({
      title: row[0]?.replace(/&quot;/g, "").replace(/^"|"$/g, ""),
      description: row[1]?.replace(/&quot;/g, "").replace(/^"|"$/g, ""),
      url: row[2]?.replace(/&quot;/g, "").replace(/^"|"$/g, ""),
      image: row[3]?.replace(/&quot;/g, "").replace(/^"|"$/g, ""),
      type: row[4]?.replace(/&quot;/g, "").replace(/^"|"$/g, ""),
      additional: row[5]
        ?.replace(/^"|"$/g, "") // remove outer quotes
        ?.replace(/""/g, '"'), // restore proper quotes inside <a> tag
      outlet: row[6]?.replace(/&quot;/g, "").replace(/^"|"$/g, ""),
      tools: row[7]?.replace(/&quot;/g, "").replace(/^"|"$/g, ""),
      date: row[8]?.replace(/&quot;/g, "").replace(/^"|"$/g, ""),
    }));

    const cards = parsed.filter(
      (item) => item.type?.trim().toLowerCase() === "card"
    );

    const lists = parsed.filter(
      (item) => item.type?.trim().toLowerCase() === "list"
    );

    featuredItems = cards.slice(0, 9);
    items = lists;
  }

  onMount(loadData);
</script>

<div class="grid">
  {#each featuredItems as item}
    <div class="card">
      <span class="tools-tag">{item.tools}</span>

      <a href={item.url} target="_blank">
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
      </a>
      <p class="description">{item.description}</p>
      <p class="additional">{@html item.additional}</p>
    </div>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 50px;
    margin-bottom: 1rem;
  }

  @media (max-width: 600px) {
    .grid {
      padding: 15px;
      grid-template-columns: 1fr;
    }
  }

  .card {
    position: relative; /* Add this line */

    border: 3px solid #000000;
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.2);
  }

  .tools-tag {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: #222;
    color: #fff;
    font-size: 0.75rem;
    padding: 0.25em 0.7em;
    font-weight: 600;
    z-index: 2;
    pointer-events: none;
    letter-spacing: 0.03em;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .description {
    font-size: 15px;
    color: #000000;
    margin-top: 0rem;
    line-height: 1.3;
  }

  .additional {
    font-size: 13px;
    color: #555;
    margin-top: 0.5rem;
    line-height: 1.3;
    font-style: italic;
  }

  :global(.additional a) {
    color: #555;
    text-decoration: underline;
    /* font-weight: bold; */
  }

  :global(.additional a:hover) {
    text-decoration: underline;
  }
  img {
    width: 100%;
    aspect-ratio: 16 / 9; /* Makes image rectangular */
    object-fit: cover;
    border-radius: 4px;
  }

  .card h3 {
    font-size: 16px;
    line-height: 1.3;
    text-decoration: none;
    color: black;
    position: relative;
    overflow: hidden;
    display: inline-block;
    margin-bottom: 0;
  }

  .card h3::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transform: skewX(-20deg);
  }

  .card:hover h3::after {
    animation: shine 1s forwards;
  }

  @keyframes shine {
    to {
      left: 100%;
    }
  }
</style>

<script>
  import { onMount } from "svelte";
  export let sheetName = "website-clips";
  import List from "$lib/components/List.svelte";

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
      imageUrl: row[3]?.replace(/&quot;/g, "").replace(/^"|"$/g, ""),
      type: row[4]?.replace(/&quot;/g, "").replace(/^"|"$/g, ""),
      contributedBy: row[5]?.replace(/&quot;/g, "").replace(/^"|"$/g, ""),
      toolsUsed: row[6]?.replace(/&quot;/g, "").replace(/^"|"$/g, ""),
      date: row[7]?.replace(/&quot;/g, "").replace(/^"|"$/g, ""),
    }));

    console.log(parsed); // Log the parsed data

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
      <a href={item.url} target="_blank">
        <img src={item.imageUrl} alt={item.title} />
        <h3>{item.title}</h3>
      </a>
      <!-- <p class="description">{item.description}</p> -->
    </div>
  {/each}
</div>

<div class="subhed">More work</div>

<ul class="list">
  {#each items as item}
    <li>
      <a href={item.url} target="_blank">{item.title}</a>
      {#if item.date}
        <span class="date">{item.date}</span>
      {/if}
    </li>
  {/each}
</ul>

<style>
  .subhed {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 50px;
    margin-bottom: 1rem; /* Add this if not already present */
  }

  @media (max-width: 600px) {
    .grid {
      padding: 15px;
      grid-template-columns: 1fr;
    }

    .subhed {
      margin: 20px;
    }

    .list {
      margin: 20px;
      line-height: 1.3;
    }

    span.date {
      font-size: 0.8rem;
    }
  }

  .card {
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

  img {
  width: 100%;
  aspect-ratio: 1 / 1; /* Makes image square */
  object-fit: cover;   /* Ensures the image fills the square */
  border-radius: 4px;
}

  .card h3 {
    font-size: 1rem;
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

  /* .description {
    font-size: 0.75rem;
    color: #555;
    margin-top: 0;
    line-height: 1.3;
  } */

  /* List styles */
  .list {
    padding-left: 0;
    list-style: none;
    margin-top: 0; /* <-- Add this */
  }

  li {
    margin-bottom: 1rem; /* Reduce if needed */
  }

  a {
    font-weight: bold;
    color: #000;
    display: inline-block;
  }

  .date {
    font-size: 0.875rem;
    color: white;
  }
</style>

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
      imageUrl: row[3]?.replace(/&quot;/g, "").replace(/^"|"$/g, ""),
    }));

    featuredItems = parsed.slice(0, 9);
    items = parsed.slice(9);
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
      <p class="description">{item.description}</p>
    </div>
  {/each}
</div>

<!-- Slot in a separate component or display the list below -->
<slot name="list" {items} />

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 50px;
  }

  @media (max-width: 600px) {
    .grid {
      padding: 15px;
      grid-template-columns: 1fr;
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
    height: auto;
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

  .description {
    font-size: 0.75rem;
    color: #555;
  }
</style>

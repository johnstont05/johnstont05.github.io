<svelte:head>
  <title>Taylor Johnston - Work</title>
</svelte:head>


<div class="projectContainer">
	This page is under construction 

</div>

<!-- <script>
	import { onMount } from "svelte";
  
	let items = [];
  
	async function loadData() {
	  const response = await fetch(
		"https://docs.google.com/spreadsheets/d/1K-HjSLaGx8tCMtXi_H83-JDjLsNGuJ2U2-wJH4fQJnc/gviz/tq?tqx=out:csv&sheet=website-clips"
	  );
	  const text = await response.text();
  
	  // Process the CSV text and parse it
	  const rows = text.split("\n").map(row => row.split(","));
	  const headers = rows.shift(); // Remove the header row
  
	  // Clean data by removing any unwanted quotes
	  items = rows.map(row => {
		return {
		  title: row[0].replace(/&quot;/g, "").replace(/^"|"$/g, ""), // Clean title
		  url: row[1].replace(/&quot;/g, "").replace(/^"|"$/g, ""),   // Clean URL
		  imageUrl: row[2].replace(/&quot;/g, "").replace(/^"|"$/g, ""), // Clean Image URL
		  description: row[3].replace(/&quot;/g, "").replace(/^"|"$/g, "") // Clean Description
		};
	  });
	}
  
	onMount(loadData);
  </script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }
  .card {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
</style>

<div class="grid">
  {#each items as item}
    <div class="card">
      <a href={item.url} target="_blank">
        <img src={item.imageUrl} alt={item.title} />
        <h3>{item.title}</h3>
      </a>
      <p>{item.description}</p>
    </div>
  {/each}
</div> -->

<style>
		.projectContainer {
		width: 100%;
		max-width: 900px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		text-align: center;
	}

</style>
<script>
  let items = [];
  export let featuredItems = [];
  export let sheetName = "website-clips"; // Add this line

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
      outlet: row[6]?.replace(/&quot;/g, "").replace(/^"|"$/g, ""),
      date: row[8]?.replace(/&quot;/g, "").replace(/^"|"$/g, ""),
    }));

    const lists = parsed.filter(
      (item) => item.type?.trim().toLowerCase() === "list"
    );

    items = lists;
  }

  import { onMount } from "svelte";
  onMount(loadData);
</script>

<h2><span class="subhed">More work</span></h2>
<ul class="list">
  {#each items as item}
    <li>
      <a href={item.url} target="_blank">{item.title}</a>
      {#if item.date}
        <div class="date">
          {#if item.outlet}{item.outlet}, {/if}{item.date}
        </div>
      {/if}
    </li>
  {/each}
</ul>

<style>
.subhed {
  background-color: black;
  color: white;
  padding: 0.2em 0.5em;
  font-size: 1.75rem;
  font-weight: bold;
}
  .list {
    padding-left: 0;
    list-style: none;
    margin-top: 0; 
    width: 85%
  }

  li {
    margin-bottom: 1rem; 
  }

  a {
    color: #fff;
    display: inline-block;
    font-size: 1.15em;
    line-height: 1.3;
  }


  a:hover {
    background-color: black;
    color: white;
  }
  .date {
    font-size: 0.9rem;
    color: black;
    margin-left: 0;
    margin-top: -0.2em;
  }

  /*  mobile */
  @media (max-width: 600px) {
    .subhed {
      margin-left: 1rem;
    }
    .list {
      width: 90%;
      padding-left: 1rem;
    }
    .subhed {
      padding-left: 1rem;
    }
    a {
      font-size: 1em;
    }


  }
</style>
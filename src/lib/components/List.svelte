<script>
    export let items = [];
  </script>
  
  <ul class="list">
    {#each items as item}
      <li>
        <a href={item.url} target="_blank">{item.title}</a>
      </li>
    {/each}
  </ul>
  
  <style>
    .list {
      margin-top: 2rem;
      padding-left: 0;
      list-style: none;
    }
  
    li {
      margin-bottom: 1.5rem;
    }
  
    a {
      font-weight: bold;
      color: #000;
    }
  
 
  </style>
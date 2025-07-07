<script lang="ts">
  import routes from "$lib/NavRoutes";
  let opened = false;
  export let segment: string;
</script>

<div class="innerContainer">
  <div class="buttons">
    {#each routes as route}
      <a
        class={`button ${segment === route.href ? "selected" : ""}`}
        href={route.href}
      >
        {route.label}
      </a>
    {/each}
  </div>
</div>

<div class="responsiveButtons buttons">
  {#each routes as route}
    <a
      class={`button ${segment === route.href ? "selected" : ""}`}
      href={route.href}
    >
      {route.label}
    </a>
  {/each}
</div>

<style>
  .innerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 900px;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .innerContainer :global(a) {
    height: 30px;
    color: white;
  }

  .NavBar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 900px;
    box-sizing: border-box;
    padding: 20px;
    height: 80px;
    overflow: hidden;
    transition: height 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  .buttons {
    display: flex;
    gap: 6px;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
  }

  .responsiveButtons {
    display: none;
  }

  .responsiveButtons .button {
    max-width: 100px;
    width: 100%;
    text-align: center;
  }

  .buttons .button,
  .responsiveButtons .button {
    display: inline-block;
    max-width: none;
    width: auto;
    text-align: left;
    padding: 0;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    text-decoration: none;
    position: relative;
    margin: 20px;
    color: hsla(0, 0%, 100%, 0.4);
  }

  .button {
    display: inline-block;
  }

  .button.selected {
    color: white;
  }

  .button:hover::after,
  .button.selected::after {
    content: "";
    background: #000;
    display: block;
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 600px) {
    .NavBar {
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 900px;
      margin: 0 auto;
    }

    .buttons {
      display: none !important;
    }

    .responsiveButtons {
      display: flex !important;
      flex-wrap: wrap;
    }
  }
</style>

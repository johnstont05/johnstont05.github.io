<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import '../app.css';
</script>

<NavBar />
<slot />

<footer>
  <ul>
    <li><a href="https://x.com/TF_Johnston" target="_blank">Twitter</a></li>
    <li><a href="https://github.com/johnstont05" target="_blank">GitHub</a></li>
    <li><a href="https://bsky.app/profile/taylorjohnston.bsky.social" target="_blank">Bluesky</a></li>
    <li><a href="mailto:taylorfjohnston@gmail.com">Email</a></li>
  </ul>
  <p class="name">Taylor Fay Johnston</p>
</footer>

<style>
  footer {
    padding: 24px 36px;
    border-top: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul { display: flex; gap: 24px; list-style: none; margin: 0; padding: 0; }
  a {
    font-family: var(--sans);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ink3);
    text-decoration: none;
    transition: color 0.15s;
  }
  a:hover { color: var(--teal); }
  .name {
    font-family: var(--display);
    font-size: 16px;
    color: var(--ink3);
  }
</style>

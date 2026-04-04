<script>
  import { page } from '$app/stores';
</script>

<nav>
  <a href="/" class="name">Taylor Johnston</a>
  <ul>
    <li><a href="/" class:active={$page.url.pathname === '/'}>Work</a></li>
    <li><a href="/fun" class:active={$page.url.pathname === '/fun'}>Fun</a></li>
    <li><a href="/about" class:active={$page.url.pathname === '/about'}>About</a></li>
  </ul>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 36px;
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    background: var(--bg);
    z-index: 10;
  }
  .name {
    font-family: var(--display);
    font-size: 18px;
    text-decoration: none;
    color: var(--ink);
  }
  ul { display: flex; gap: 28px; list-style: none; margin: 0; padding: 0; }
  a {
    font-family: var(--sans);
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ink3);
    text-decoration: none;
    transition: color 0.15s;
  }
  a:hover { color: var(--ink); }
  a.active {
    color: var(--ink);
    border-bottom: 2px solid var(--teal);
    padding-bottom: 1px;
  }
</style>

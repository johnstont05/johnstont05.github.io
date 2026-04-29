<script>
  import { page } from '$app/stores';

  let open = false;

  $: colorScheme = (() => {
    const path = $page.url.pathname;
    if (path === '/fun') return { primary: 'var(--lime)', secondary: 'var(--light-lime)' };
    if (path === '/about') return { primary: 'var(--lavender)', secondary: 'var(--light-lavender)' };
    return { primary: 'var(--teal)', secondary: 'var(--light-teal)' };
  })();

  // Close menu on navigation
  $: $page.url.pathname, (open = false);
</script>

<nav style="--nav-primary: {colorScheme.primary}; --nav-secondary: {colorScheme.secondary}; background: {colorScheme.primary};">
  <a href="/" class="name">taylor johnston</a>

  <ul class="desktop-nav">
    <li><a href="/work" class:active={$page.url.pathname === '/work'}>Work</a></li>
    <li><a href="/fun" class:active={$page.url.pathname === '/fun'}>Fun</a></li>
    <li><a href="/about" class:active={$page.url.pathname === '/about'}>About</a></li>
  </ul>

  <button class="hamburger" aria-label="Toggle menu" aria-expanded={open} on:click={() => open = !open}>
    <span class:open></span>
    <span class:open></span>
    <span class:open></span>
  </button>
</nav>

{#if open}
  <div class="mobile-menu" style="background: {colorScheme.primary};">
    <a href="/work" class:active={$page.url.pathname === '/work'}>Work</a>
    <a href="/fun" class:active={$page.url.pathname === '/fun'}>Fun</a>
    <a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
  </div>
{/if}

<style>
  nav {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    align-items: center;
    padding: 20px 36px;
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .name {
    font-family: var(--display);
    font-size: 18px;
    text-decoration: none;
    color: var(--nav-secondary);
    text-transform: lowercase;
  }

  /* Desktop nav */
  .desktop-nav { display: flex; gap: 28px; list-style: none; margin: 0; padding: 0; }
  a {
    font-family: var(--sans);
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.06em;
    color: var(--nav-secondary);
    text-decoration: none;
    transition: color 0.15s;
  }
  a:hover { color: var(--nav-secondary); }
  a.active {
    font-weight: bold;
    border-bottom: 2px solid var(--nav-secondary);
    padding-bottom: 1px;
  }

  /* Hamburger button */
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
  }
  .hamburger span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--nav-secondary);
    transition: transform 0.2s, opacity 0.2s;
    transform-origin: center;
  }
  .hamburger span:nth-child(1).open { transform: translateY(7px) rotate(45deg); }
  .hamburger span:nth-child(2).open { opacity: 0; }
  .hamburger span:nth-child(3).open { transform: translateY(-7px) rotate(-45deg); }

  /* Mobile dropdown */
  .mobile-menu {
    position: sticky;
    top: 61px;
    z-index: 9;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--color-border);
  }
  .mobile-menu a {
    padding: 16px 36px;
    font-size: 18px;
    border-top: 1px solid var(--color-border);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  @media (max-width: 680px) {
    .desktop-nav { display: none; }
    .hamburger { display: flex; }
  }
</style>

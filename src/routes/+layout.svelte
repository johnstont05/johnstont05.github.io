<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import { page } from '$app/stores';
  import '../app.css';

  $: footerBg = (() => {
    const path = $page.url.pathname;
    if (path === '/fun') return 'var(--light-lime)';
    if (path === '/about') return 'var(--light-lavender)';
    return 'var(--light-teal)';
  })();
</script>

<svelte:body style="background: {footerBg};" />
<NavBar />
<slot />

<footer style="background: {footerBg};">
  <p class="thanks">Thanks for stopping by. Check out my <a href="https://www.etsy.com/shop/stickersbytayjay" target="_blank">art shop</a>, browse my <a href="/work">work</a>, or <a href="mailto:taylorfjohnston@gmail.com">get in touch</a>.</p>
  <ul>
    <li><a href="https://x.com/TF_Johnston" target="_blank">Twitter</a></li>
    <li><a href="https://bsky.app/profile/taylorjohnston.bsky.social" target="_blank">Bluesky</a></li>
    <li><a href="https://github.com/johnstont05" target="_blank">GitHub</a></li>
  </ul>
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
    font-weight: normal;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ink3);
    text-decoration: none;
    transition: color 0.15s;
  }
  a:hover { color: var(--teal); }
  .thanks {
    font-family: var(--sans);
    font-size: 15px;
    color: var(--ink3);
    line-height: 1.6;
  }
  .thanks a {
    color: var(--ink);
    text-decoration: underline;
    text-underline-offset: 3px;
    font-size: 15px;
    text-transform: none;
    letter-spacing: 0;
  }

  @media (max-width: 680px) {
    footer {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      padding: 24px 24px;
    }
    ul { flex-wrap: wrap; gap: 16px; }
    a { font-size: 14px; }
  }
</style>

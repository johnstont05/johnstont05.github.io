<script>
  import '../app.css';

  let { children } = $props();

  let scrollVisible = $state(false);
  let bubbleVisible = $state(false);
  let dismissed = $state(false);

  $effect(() => {
    const onScroll = () => {
      const past = window.scrollY > 300;
      scrollVisible = past;
      bubbleVisible = past && !dismissed;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  function dismiss() {
    dismissed = true;
    bubbleVisible = false;
  }
</script>

<svelte:head>
  <meta property="og:site_name" content="Taylor Johnston" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://johnstont05.github.io" />
  <meta property="og:title" content="Taylor Johnston | Data Visualization Designer and Developer" />
  <meta property="og:description" content="Data journalist, information designer, and developer. I build visual stories at the intersection of data and design." />
  <meta property="og:image" content="https://johnstont05.github.io/img/og.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Taylor Johnston | Data Visualization Designer and Developer" />
  <meta name="twitter:description" content="Data journalist, information designer, and developer. I build visual stories at the intersection of data and design." />
  <meta name="twitter:image" content="https://johnstont05.github.io/img/og.png" />
</svelte:head>

{@render children()}

<footer>
  <a href="mailto:taylorfjohnston@gmail.com" class="icon-link" aria-label="Email">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
    </svg>
  </a>
  <a href="https://github.com/johnstont05" target="_blank" class="icon-link" aria-label="GitHub">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  </a>
  <a href="https://www.linkedin.com/in/taylor-fay-johnston/" target="_blank" class="icon-link" aria-label="LinkedIn">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </a>
</footer>

<div class="made-with" class:visible={bubbleVisible}>
  <button class="close" onclick={dismiss} aria-label="Dismiss">×</button>
  <p class="made-label">How I made this site</p>
  <p class="made-text">Designed using Figma, powered by Google Sheets and built with SvelteKit.</p>
</div>

<button class="scroll-top" class:visible={scrollVisible} onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 13 L8 3 M2 8 L8 2 L14 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <span>Top</span>
</button>

<style>
  .made-with {
    position: fixed;
    bottom: 28px;
    left: 28px;
    width: 240px;
    background: var(--teal);
    border-radius: 8px;
    padding: 16px 18px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
    transform: translateY(20px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 100;
  }
  .made-with.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }
  .made-label {
    font-family: var(--sans);
    font-size: var(--12px);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(222,234,233,0.6);
    margin: 0 0 8px;
  }
  .made-text {
    font-family: var(--sans);
    font-size: var(--14px);
    line-height: 1.55;
    color: var(--light-teal);
    margin: 0;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 12px;
    background: none;
    border: none;
    color: rgba(222,234,233,0.5);
    font-size: 18px;
    line-height: 1;
    cursor: pointer;
    padding: 0;
  }
  .close:hover { color: var(--light-teal); }

  .scroll-top {
    position: fixed;
    bottom: 28px;
    right: 28px;
    background: var(--teal);
    border: none;
    border-radius: 999px;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 18px;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    color: var(--light-teal);
    font-family: var(--sans);
    font-size: var(--14px);
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(20px);
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.2s ease;
    z-index: 100;
  }
  .scroll-top.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }
  .scroll-top:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.22); }
  .scroll-top svg { width: 14px; height: 14px; flex-shrink: 0; }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding: 28px;
    background: var(--light-teal);
    border-top: 1px solid rgba(0,0,0,0.08);
  }
  .icon-link {
    color: var(--teal);
    opacity: 0.5;
    display: flex;
    align-items: center;
    transition: opacity 0.15s;
  }
  .icon-link:hover { opacity: 1; }
  .icon-link svg { width: 20px; height: 20px; }

  @media (max-width: 680px) {
    .scroll-top { bottom: 20px; right: 20px; }
    .made-with { bottom: 20px; left: 20px; }
  }
</style>

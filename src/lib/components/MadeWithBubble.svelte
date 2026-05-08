<script>
  import { onMount } from 'svelte';

  let visible = false;
  let dismissed = false;

  onMount(() => {
    const onScroll = () => {
      const halfway = (document.documentElement.scrollHeight - window.innerHeight) * 0.5;
      const past = window.scrollY > halfway;
      visible = past && !dismissed;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  function dismiss() {
    dismissed = true;
    visible = false;
  }
</script>

<div class="made-with" class:visible>
  <button class="close" onclick={dismiss} aria-label="Dismiss">×</button>
  <p class="made-label">How I made this site</p>
  <p class="made-text">Designed in Figma, powered by Google Sheets, built in SvelteKit and hosted on Netlify.</p>
</div>

<style>
  .made-with {
    position: fixed;
    bottom: 2.5rem;
    left: 1.75rem;
    width: 15rem;
    background: var(--teal);
    border-radius: 0.5rem;
    padding: 1rem 1.125rem;
    box-shadow: 0 0.5rem 2rem rgba(0,0,0,0.18);
    transform: translateY(1.25rem);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 100;
  }
  .made-with::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 1.25rem;
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.5rem solid var(--teal);
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
    color: var(--light-teal);
    margin: 0 0 0.5rem;
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
    top: 0.625rem;
    right: 0.75rem;
    background: none;
    border: none;
    color: rgba(222,234,233,0.5);
    font-size: 1.125rem;
    line-height: 1;
    cursor: pointer;
    padding: 0;
  }
  .close:hover { color: var(--light-teal); }

  @media (max-width: 680px) {
    .made-with { bottom: 2rem; left: 1.25rem; }
  }
</style>

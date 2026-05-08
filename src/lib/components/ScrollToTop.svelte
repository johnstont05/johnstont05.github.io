<script>
  import { onMount } from 'svelte';

  let visible = false;

  onMount(() => {
    const onScroll = () => {
      const halfway = (document.documentElement.scrollHeight - window.innerHeight) * 0.5;
      visible = window.scrollY > halfway;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<button
  class="scroll-top"
  class:visible
  onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  aria-label="Scroll to top"
>
  <span>Back to top</span>
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 13 L8 3 M2 8 L8 2 L14 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>

<style>
  .scroll-top {
    position: fixed;
    bottom: 1.75rem;
    right: 1.75rem;
    background: var(--teal);
    border: none;
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.625rem 1.125rem;
    cursor: pointer;
    box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.15);
    color: var(--light-teal);
    font-family: var(--sans);
    font-size: var(--14px);
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(1.25rem);
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.2s ease;
    z-index: 100;
  }
  .scroll-top.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }
  .scroll-top:hover { box-shadow: 0 0.375rem 1.25rem rgba(0,0,0,0.22); }
  .scroll-top svg { width: 0.875rem; height: 0.875rem; flex-shrink: 0; }

  @media (max-width: 680px) {
    .scroll-top { bottom: 1.25rem; right: 1.25rem; }
  }
</style>

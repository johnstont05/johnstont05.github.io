<script>
  export let job;

  const splitTags = (tagString) =>
    tagString
      ? tagString.split(/\s*(?:,|\band\b|&)\s*/i).map((tag) => tag.trim()).filter(Boolean)
      : [];

  /** @param {HTMLElement} node */
  function reveal(node) {
    node.style.opacity = '0';
    node.style.transform = 'translateY(36px)';
    const clips = /** @type {HTMLElement[]} */ ([...node.querySelectorAll('.clip')]);
    clips.forEach(c => { c.style.opacity = '0'; c.style.transform = 'translateX(-12px)'; });
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        node.style.opacity = '1';
        node.style.transform = 'translateY(0)';
        clips.forEach((c, i) => {
          setTimeout(() => {
            c.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            c.style.opacity = '1';
            c.style.transform = 'translateX(0)';
          }, 300 + i * 60);
        });
        observer.unobserve(node);
      }
    }, { threshold: 0.05 });
    observer.observe(node);
    return { destroy: () => observer.disconnect() };
  }
</script>

<div class="block" use:reveal>
  <div class="left">
    <h2>{job.org}</h2>
    <p class="role">{job.role}</p>
  </div>
  <div class="clips">
    {#each job.clips as clip}
      <div class="clip">
        <a href={clip.url} target="_blank" class="title">{clip.title}</a>
        <span class="right">
          {#each splitTags(clip.tag) as tag}
            <span class="tag">{tag}</span>
          {/each}
          <span class="date">{clip.date}</span>
        </span>
      </div>
    {/each}
  </div>
</div>

<style>
  .block {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 40px;
    margin-bottom: 56px;
    padding-bottom: 56px;
    border-bottom: 1px solid var(--teal);
  }
  .block:last-child {
    border-bottom: none;
  }
  .left {
    padding-top: 14px;
  }
  h2 {
    font-family: var(--sans);
    font-size: 26px;
    line-height: 1.1;
    margin-bottom: 8px;
  }
  .role {
    font-size: 16px;
    color: var(--teal);
    font-weight: normal;
  }
  .clips {
    display: flex;
    flex-direction: column;
  }
  .clip {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 14px 0;
    border-top: 1px solid var(--color-border);
    gap: 20px;
  }
  .clip:last-child {
    border-bottom: 1px solid var(--color-border);
  }
  .title {
    font-size: 16px;
    line-height: 1.5;
    flex: 1;
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
    color: var(--ink);
    transition: color 0.15s;
  }
  .title:hover {
    color: var(--teal);
  }
  .right {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-shrink: 0;
  }
 .tag {
    font-family: var(--sans);
    font-size: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #fff;
    background: var(--black);
    border: none;
    padding: 4px 6px;
    border-radius: 5px;
    white-space: nowrap;
  }
  .date {
    font-size: 16px;
    color: var(--ink3);
    white-space: nowrap;
  }

  @media (max-width: 700px) {
    .block {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .left { padding-top: 0; }
    .clip { flex-direction: column; align-items: flex-start; gap: 6px; }
    .right { flex-wrap: wrap; gap: 4px; }
    .date { flex-basis: 100%; }
    .tag { font-size: 12px; }
    .date { font-size: 14px; }
  }
</style>

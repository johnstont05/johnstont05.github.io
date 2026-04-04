<script>
  export let job;
</script>

<div class="block">
  <div class="left">
    <h2>{job.org}</h2>
    <p class="role">{job.role}</p>
  </div>
  <div class="clips">
    {#each job.clips as clip}
      <a href={clip.url} target="_blank" class="clip">
        <span class="title">{clip.title}</span>
        <span class="right">
          <span class="tag">{clip.tag}</span>
          <span class="date">{clip.date}</span>
        </span>
      </a>
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
    border-bottom: 1px solid var(--color-border);
  }
  .block:last-child { border-bottom: none; }
  .left { padding-top: 14px; }
  h2 { font-family: var(--display); font-size: 26px; line-height: 1.2; margin-bottom: 8px; }
  .role { font-size: 16px; color: var(--teal); font-weight: 700; }
  .clips { display: flex; flex-direction: column; }
  .clip {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 14px 0;
    border-top: 1px solid var(--color-border);
    gap: 20px;
    text-decoration: none;
    color: var(--ink);
    transition: color 0.15s;
  }
  .clip:last-child { border-bottom: 1px solid var(--color-border); }
  .clip:hover .title { color: var(--teal); }
  .title { font-size: 16px; line-height: 1.5; flex: 1; transition: color 0.15s; }
  .right { display: flex; gap: 12px; align-items: center; flex-shrink: 0; }
  .tag {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: var(--ink3);
    border: 1px solid var(--color-border);
    padding: 2px 8px;
    white-space: nowrap;
  }
  .date { font-size: 16px; color: var(--ink3); white-space: nowrap; }

  @media (max-width: 700px) {
    .block { grid-template-columns: 1fr; gap: 16px; }
    .left { padding-top: 0; }
  }
</style>

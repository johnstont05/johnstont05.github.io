<script>
  export let label = '';
  export let id = '';
</script>

<div {id} class="section-head">
  <span class="label">{label}</span>
  <hr />
</div>

<style>
  .section-head {
    padding: 0 clamp(2.25rem, 5vw, 5rem);
    margin: 3.5rem 0 1.75rem;
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
  .label {
    font-family: var(--sans);
    font-size: var(--16px);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-weight: bold;
    white-space: nowrap;
    background-color: var(--teal);
    color: var(--light-teal);
    padding: 0.3125rem;
  }
  hr {
    flex: 1;
    border: none;
    border-top: 1px solid var(--teal);
  }
</style>

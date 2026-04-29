<script>
  const SITE_URL = 'https://taylorfayjohnston.com';
  const DEFAULT_IMAGE = `${SITE_URL}/img/og.png`;

  export let title = 'taylor johnston';
  export let description = "Data + graphics journalist. I find the story in the spreadsheet — from records requests and data analysis to design and front-end development.";
  export let image = DEFAULT_IMAGE;
  export let path = '';

  $: url = `${SITE_URL}${path}`;
</script>

<svelte:head>
  <meta name="description" content={description} />

  <meta property="og:site_name" content="taylor johnston" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@TF_Johnston" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
</svelte:head>

<script>
  import '../app.css';
  import ScrollToTop from '$lib/components/ScrollToTop.svelte';
  import MadeWithBubble from '$lib/components/MadeWithBubble.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <meta name="description" content="Data journalist, information designer, and developer. I build visual stories at the intersection of data and design." />
  <meta property="og:site_name" content="Taylor Johnston" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://taylorfayjohnston.com" />
  <meta property="og:title" content="Taylor Johnston | Data Visualization Designer and Developer" />
  <meta property="og:description" content="Data journalist, information designer, and developer. I build visual stories at the intersection of data and design." />
  <meta property="og:image" content="https://taylorfayjohnston.com/img/og.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Taylor Johnston | Data Visualization Designer and Developer" />
  <meta name="twitter:description" content="Data journalist, information designer, and developer. I build visual stories at the intersection of data and design." />
  <meta name="twitter:image" content="https://taylorfayjohnston.com/img/og.png" />
</svelte:head>

{@render children()}

<MadeWithBubble />
<ScrollToTop />

<script>
	import { onDestroy } from 'svelte';
  
	let words = ["journalist", "designer", "developer", "data-driven"];
	let currentWordIndex = 0;
	let currentLetterIndex = 0;
	let currentWord = '';
	let deleting = false;
  
	function updateTyping() {
	  if (deleting) {
		if (currentLetterIndex >= 0) {
		  currentWord = words[currentWordIndex].substring(0, currentLetterIndex);
		  currentLetterIndex--;
		} else {
		  deleting = false;
		  currentLetterIndex = 0;
		  currentWordIndex = (currentWordIndex + 1) % words.length;
		}
	  } else {
		if (currentLetterIndex <= words[currentWordIndex].length) {
		  currentWord = words[currentWordIndex].substring(0, currentLetterIndex);
		  currentLetterIndex++;
		} else {
		  deleting = true;
		}
	  }
	}
  
	const typingInterval = setInterval(updateTyping, 100);
  
	// Clean up interval on component unmount
	onDestroy(() => {
	  clearInterval(typingInterval);
	});
  </script>
  
  <svelte:head>
	<title>Taylor Johnston - Data + Graphics Journalist</title>
  </svelte:head>
  
  <main>
	<h1>i'm taylor</h1>
	<div id="typing-div">
	  <span class="typed-text">{currentWord}</span>
	  <span class="cursor">|</span>
	</div>
  </main>
  
  <style>
	main {
	  text-align: center;
	  padding: 0;
	  margin: 0 auto;
	  display: flex;
	  flex-direction: column;
	  height: calc(100vh - 80px - 88px);
	  justify-content: center;
	  align-items: center;
	}
  
	.cursor {
	  animation: blink 1s infinite;
	}
  
	@keyframes blink {
	  0% {
		opacity: 1;
	  }
	  50% {
		opacity: 0;
	  }
	  100% {
		opacity: 1;
	  }
	}
  
	@media (min-width: 900px) {
	  /* Add styles for larger screens here */
	}
  
	@media (min-width: 600px) {
	  /* Add styles for medium screens here */
	}
  </style>
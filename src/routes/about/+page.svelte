<svelte:head>
	<title>Taylor Johnston — About</title>
</svelte:head>

<div class="container">
	<main>
		This page is under construction
		<!-- <div class="about-image">
			<div id="wrap" class="img-wrap">
				<img src="src/lib/assets/johnston_headshot.jpg" alt="Taylor Johnston" />
			</div>
		</div>
		<div class="about-text">
			<p>Hello! I'm Taylor Johnston (she/her).</p>
			<p>
				I'm a journalist with the focus of telling impactful stories at the intersection of data and
				design.
			</p>
			<p>Currently, I work at CBS News as a <a href="https://www.cbsnews.com/team/taylor-johnston/" target="_blank">visual data journalist</a> on the data team.</p>
			<p>
				Previously, I was a graphics reporter at Hearst Connecticut Media Group. I am also a
				first-generation college student who graduated from Ohio University with degrees in
				journalism and interactive information design.
			</p>
			<p>
				When I am not sifting through a spreadsheet or creating viz, you can find me making stickers
				for my Etsy shop, listening to an audiobook, or traveling to new places to collect pins.
			</p>
			<p>Find me @TF_Johnston / mail / github / linkedin</p>
		</div> -->
	</main>
</div>

<style>
	.container {
		max-width: 900px;
		display: flex;
		justify-content: center;
	}

	main {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		/* max-width: 100%; */
		margin: 0 auto;
	}

	.about-image {
		flex-shrink: 0;
	}

	:root {
		--border: 3px;
		--color1: black;
		--color2: black;
		--from: 30deg;
		--distance: 46%;
	}

	.img-wrap {
		margin-right: 40px;
		position: relative;
		padding: 30px;
	}
	.img-wrap::after {
		content: '';
		border-radius: 999px;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: conic-gradient(
			from var(--from),
			var(--color1),
			var(--color2) var(--distance),
			transparent var(--distance)
		);
		-webkit-mask: radial-gradient(
			farthest-side,
			transparent calc(100% - var(--border)),
			#fff calc(100% - var(--border) + 1px)
		);
		mask: radial-gradient(
			farthest-side,
			transparent calc(100% - var(--border)),
			#fff calc(100% - var(--border) + 1px)
		);
	}

	img {
		border-radius: 999px;
		display: block;
		width: calc(100vw - 80px);
		max-width: 360px;
		height: auto;
	}

	.about-text {
		width: 550px;
		max-width: 550px;
		line-height: 1.5;
		font-family: 'Roboto Mono', monospace;
		font-size: 16px;
	}

	p {
		margin-bottom: 15px;
	}

	@media (max-width: 450px) {
	.container {
		padding: 10px;
	}

	main {
		flex-direction: column; /* Stack the image and text vertically */
		align-items: center; /* Center the items */
	}

	.about-image {
		width: 100%; /* Make the image container take full width */
		display: flex;
		justify-content: center;
	}

	.img-wrap {
		margin-bottom: 10px; /* Add spacing below the image */
	}

	img {
		width: 200px; /* Make the image take full width */
		}

	.about-text {
		margin-top: 10px; 
		text-align: left; 
		font-size: 16px;
		width: 300px;
	}
}
</style>
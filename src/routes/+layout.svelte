<script lang="ts">
	import { onMount } from "svelte";
	import "../app.css";
	import { stopOverscroll } from "$lib/gsap/helpers";
	let { children } = $props();

	onMount(() => {
		stopOverscroll(document.body); // Prevents the page from over-scrolling especially on mobile browsers.
	});
</script>

{@render children()}

<footer class="w-full flex gap-20 p-20 bg-stone-900 text-white">
	<div class="footer-content">
		<b>Website</b>
		<a href="#home">Home</a>
		<a href="#projects">Projects</a>
		<a href="#awards">Acheivements</a>
		<a href="#support">Support Me</a>
	</div>
	<div class="footer-content">
		<b>Contact</b>
		<a href="https://github.com/sam-the-programmer" target="_blank">Github</a>
	</div>
</footer>

<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import "../app.postcss";
	import Navbar from "../lib/components/Navbar.svelte";
	import { parallaxInit } from "../lib/scripts/parallax";
	import { onMount } from "svelte";

	let nodeFollow: HTMLSpanElement;
	onMount(() => {
		if (window.matchMedia("(hover: none)").matches) return;

		window.addEventListener("mousemove", (e: MouseEvent) => {
			nodeFollow.style.left = `${e.clientX}px`;
			nodeFollow.style.top = `${e.clientY}px`;
		});
	});

	parallaxInit();
</script>

<Navbar />
<slot />
<Footer />

<span
	class="fixed w-8 backdrop-invert pointer-events-none follower backdrop-grayscale
	needs-hover	rounded-full aspect-square -translate-y-1/2 -translate-x-1/2 z-50"
	bind:this={nodeFollow}
/>

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

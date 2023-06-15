<script>
	import "../app.postcss";
	import Nav from "../lib/components/nav.svelte";
	import { parallaxInit } from "../lib/scripts/parallax";

	parallaxInit();
</script>

<Nav />

<slot />

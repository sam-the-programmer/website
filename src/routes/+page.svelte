<script lang="ts">
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { onMount } from "svelte";
	import Lenis from "lenis";
	import * as Card from "$lib/components/ui/card/index.ts";
	import { projectsLeft } from "$lib/data/projects";
	import { horizontalLoop } from "$lib/gsap/helpers";

	function addFadeEffect(
		element: Element,
		start: string = "center center",
		end: string = "top 5%",
		markers: boolean = false
	) {
		const tl = gsap.timeline();

		tl.to(element, {
			scrollTrigger: {
				trigger: element,
				start: start,
				end: end,
				scrub: true,
				markers: markers
			},
			opacity: 0
		});
	}

	let elemTitle: HTMLHeadingElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Initialize Lenis
		const lenis = new Lenis({
			autoRaf: true
		});

		lenis.on("scroll", ScrollTrigger.update);

		// Make the size of the title element grow as you scroll
		addFadeEffect(elemTitle);

		[...document.getElementsByClassName("gsap-fade-title")].forEach((element) => {
			addFadeEffect(element, (markers = true));
		});

		// Infinite scrolling
		let cards = gsap.utils.toArray<string>(".marquee-card");
		gsap.to(cards, {
			scrollTrigger: cards,
			opacity: 1
		});

		let loop = horizontalLoop(cards, { paused: false });
	});
</script>

<section class="centre-children-grid">
	<div bind:this={elemTitle}>
		<h1 class="px-10 text-center text-9xl text-stone-900">Hi, I'm Sam.</h1>
	</div>
</section>

<section class="centre-children-grid">
	<div class="gsap-fade-title">
		<h1 class="px-10 text-center text-6xl text-stone-900">My Projects</h1>
	</div>
	<div class="flex h-40 w-full items-center justify-center gap-3 overflow-hidden bg-black">
		{#each projectsLeft as proj}
			<a href={proj.link} class="marquee-card h-full">
				<Card.Root class="h-full w-[40vw] min-w-80">
					<Card.Header>
						<Card.Title>{proj.name}</Card.Title>
						<Card.Description>{proj.description}</Card.Description>
					</Card.Header>
					<!-- <Card.Content>
						<p>Card Content</p>
					</Card.Content> -->
					<Card.Footer>
						<div class="centre-children-flex">
							<span class="aspect-square w-4 rounded-full" style:background-color={proj.col}></span>
							<p>{proj.name}</p>
						</div>
					</Card.Footer>
				</Card.Root>
			</a>
		{/each}
	</div>
</section>

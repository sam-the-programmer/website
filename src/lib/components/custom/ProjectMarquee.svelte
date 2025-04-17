<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.ts";
	import { horizontalLoop } from "$lib/gsap/helpers";
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { onMount } from "svelte";

	gsap.registerEffect(ScrollTrigger);

	let { projects, direction } = $props();

	function addHorizontalLoopEffect(direction: string) {
		let cards = gsap.utils.toArray<string>(`.marquee-card-${direction}`);

		return horizontalLoop(cards, {
			paused: false,
			reversed: direction === "right",
			speed: 0.3,
			paddingRight: 8,
			repeat: -1
		});
	}

	let marqueeElem: HTMLDivElement;
	let cardElems: HTMLAnchorElement[] = $state([]);

	onMount(() => {
		let loop = addHorizontalLoopEffect(direction);
		marqueeElem.addEventListener("mouseenter", () => {
			loop.pause();
		});
		marqueeElem.addEventListener("mouseleave", () => {
			loop.resume();
		});

		cardElems.forEach((element, i) => {
			const animationIn = gsap.fromTo(
				element,
				{ opacity: 0 },
				{
					opacity: 1,
					delay: i*0.1,
				}
			);

			ScrollTrigger.create({
				trigger: marqueeElem,
				animation: animationIn,
				start: "top 80%",
			});
		});
	});
</script>

<div class="project-marquee" bind:this={marqueeElem}>
	{#each projects as proj, i}
		<a
			href={proj.link}
			class="marquee-card-{direction} mx-1 h-full w-fit"
			target="_blank"
			bind:this={cardElems[i]}
		>
			<Card.Root class="relative h-full w-[33vw] min-w-80">
				<Card.Header>
					<Card.Title>{proj.name}</Card.Title>
					<Card.Description>{proj.description}</Card.Description>
				</Card.Header>
				<!-- <Card.Content>
                    <p>Card Content</p>
                </Card.Content> -->
				<Card.Footer>
					<div class="centre-children-flex absolute bottom-5 gap-2">
						<span class="aspect-square w-4 rounded-full" style:background-color={proj.col}></span>
						<p>{proj.tool}</p>
					</div>
				</Card.Footer>
			</Card.Root>
		</a>
	{/each}
</div>

<style lang="postcss">
	.project-marquee {
		@apply flex h-40 w-full items-center justify-center overflow-x-hidden overflow-y-visible;
	}
</style>

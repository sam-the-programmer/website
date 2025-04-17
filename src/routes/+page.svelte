<script lang="ts">
	import ProjectMarquee from "$lib/components/custom/ProjectMarquee.svelte";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import { projectsLeft, projectsRight } from "$lib/data/projects";
	import { addFadeEffect } from "$lib/gsap/effects";
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import Lenis from "lenis";
	import { onMount } from "svelte";

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
	});
</script>

<section class="centre-children-grid" id="home">
	<div bind:this={elemTitle}>
		<h1 class="px-10 text-center text-9xl">Hi, I'm Sam.</h1>
	</div>
</section>

<section class="centre-children-flex flex-col gap-10" id="projects">
	<div class="centre-children-flex flex-col gap-3 p-6">
		<h1 class="text-center text-6xl">My Projects</h1>
		<p class="max-w-sm text-center text-xl">
			From fullstack web apps to novel deep learning research...
		</p>
	</div>
	<div class="centre-children-grid w-full gap-2 overflow-y-visible">
		<ProjectMarquee projects={projectsLeft} direction="left" />
		<ProjectMarquee projects={projectsRight} direction="right" />
	</div>
</section>

<section class="centre-children-flex flex-col gap-8" id="awards">
	<h1 class="text-6xl">My Acheivements</h1>
	<div class="acheivements flex max-w-3xl flex-col">
		<div>
			<span>June 2024</span>
			<Separator orientation="vertical"></Separator>
			<p>
				Won <a href="https://www.samsung.com/uk/solvefortomorrow/" target="_blank"
					><b>Samsung Solve for Tomorrow UK</b></a
				> alongside a teammate, building an app that improves the efficiency of renewable energy usage
				by scheduling the power consumption of devices and industrial processes.
			</p>
		</div>
		<div>
			<span>May 2022</span>
			<Separator orientation="vertical"></Separator>
			<p>
				Won <a
					href="https://www.paconsulting.com/culture/pa-in-the-community/raspberry-pi-competition-uk"
					target="_blank"><b>PA Pi Awards 2022</b></a
				> leading a team of 6 to create an app that gives you eco-friendly alternatives to your groceries
				to reduce the food miles of your shopping.
			</p>
		</div>
	</div>
</section>

<section class="centre-children-grid" id="support">
	<div class="centre-children-flex flex-col gap-3">
		<h1 class="text-6xl font-bold">Want to support my work?</h1>
		<p class="max-w-xl text-center text-3xl">
			Consider donating to <a href="https://plant.ecosia.org/">Ecosia</a>,
			<a href="https://support.wwf.org.uk/donate-to-wwf">the WWF</a>
			or any other environmental charities to help combat climate change.
		</p>
	</div>
</section>

<style lang="postcss">
	.acheivements > div {
		@apply flex w-full;

		& > span {
			width: clamp()
			@apply font-semibold;
		}

		& > p {
			@apply pl-8;
		}
	}
</style>

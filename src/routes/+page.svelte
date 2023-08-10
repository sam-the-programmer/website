<script lang="ts">
	import IntersectionObserver from "svelte-intersection-observer";
	import { onMount } from "svelte";
	import { cycle } from "$lib/scripts/helpers";
	import { fly, scale } from "svelte/transition";

	let nodeSubtitle: HTMLSpanElement;
	let projectScroll: HTMLDivElement;
	onMount(() => {
		const strs = cycle(" student", "n ML researcher", " web developer", " designer");
		const recurse = async () => {
			const text = strs.next().value;
			for (let i = 0; i < text.length; i++) {
				nodeSubtitle.innerHTML = text.slice(0, i + 1);
				await new Promise((r) => setTimeout(r, 80));
			}

			await new Promise((r) => setTimeout(r, 2400));

			for (let i = text.length; i > 0; i--) {
				nodeSubtitle.innerHTML = text.slice(0, i - 1);
				await new Promise((r) => setTimeout(r, 80));
			}

			recurse();
		};

		recurse();
	});
	$: {
		if (projectScroll) {
			projectScroll.addEventListener("wheel", (e) => {
				e.preventDefault();
				projectScroll.scrollBy((e.deltaY + e.deltaX) / 2, 0);
			});
		}
	}

	interface Project {
		name: string;
		description: string;
		link: string;
		tool: string;
		col: string;
	}

	const projects: Array<Project> = [
		{
			name: "Econsumer",
			description: "A PWA that reduces the carbon footprint of your groceries.",
			link: "https://econsumer.vercel.app/",
			tool: "TypeScript",
			col: "#007acc"
		},
		{
			name: "SandCastle",
			description: "A lightweight, fast and simple CLI build tool.",
			link: "https://github.com/sam-the-programmer/sandcastle",
			tool: "Go",
			col: "#00add8"
		},
		{
			name: "3D View",
			description: "A desktop app that makes your 2D screen 3D with machine learning.",
			link: "https://github.com/sam-the-programmer/3dview",
			tool: "Python",
			col: "#f0db4f"
		},
		{
			name: "TF-GPT",
			description: "My TensorFlow implementation of a GPT language model.",
			link: "https://github.com/sam-the-programmer/tf-gpt",
			tool: "TensorFlow",
			col: "#ff6f00"
		}
	];

	let nodeAbout: HTMLElement;
	let nodeSupport: HTMLElement;
	let nodeContact: HTMLElement;
</script>

<section id="landing" class="flex justify-between items-center py-10 px-24">
	<div data-para-offset="0" data-para-x="-.7">
		<a href="#landing">
			<h1 class="link font-bold text-8xl">Hi, I'm Sam.</h1>
		</a>
		<h2 class="text-6xl" id="subtitle">
			<span>A</span><span class="caret-animation" bind:this={nodeSubtitle} /><span>.</span>
		</h2>
	</div>
	<div>
		<img
			class="rounded-full aspect-square w-[70vw] link z-30
				absolute bottom-auto sm:-bottom-[40vh] -right-[30vw] saturate-150"
			data-para-x=".7"
			data-para-offset="0"
			src="/img/tree.jpg"
			alt="Trees"
		/>
	</div>
</section>

<section id="projects" class="flex flex-col justify-center items-center gap-10 scroll-smooth">
	<IntersectionObserver element={nodeAbout} let:intersecting>
		<div bind:this={nodeAbout} class="grid-center max-w-lg text-center gap-4 h-56">
			{#if intersecting}
				<a in:fly={{ duration: 800, y: -30, delay: 500 }} href="#projects">
					<h1 class="link font-bold text-6xl">My Projects</h1>
				</a>
				<p in:scale={{ duration: 700, delay: 300, start: 0.9 }} class="text-3xl">
					From fullstack web development to novel deep learning research...
				</p>
			{/if}
		</div>
		{#if intersecting}
			<div
				class="flex gap-3 items-center overflow-x-scroll max-w-[100vw] hide-scrollbar p-3"
				bind:this={projectScroll}
			>
				{#each [...projects.entries()] as [i, p]}
					<a href={p.link}>
						<div
							in:fly={{ duration: 400, y: 15, delay: 600 + i * 100 }}
							out:fly={{ duration: 400, y: 15, delay: i * 100 }}
							class="flex items-center p-3 flex-col link
						text-center bg-base h-40 gap-3 w-[30vw] rounded-xl"
						>
							<h1 class="h-1/4 font-bold text-2xl">{p.name}</h1>
							<p class="h-2/4 w-10/12">{p.description}</p>
							<div class="h-1/4 flex-center gap-3">
								<span style:background-color={p.col} class="w-3 block rounded-full aspect-square" />
								<span class="font-semibold italic">{p.tool}</span>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</IntersectionObserver>
</section>

<section
	class="flex flex-col gap-5 items-end text-right justify-center p-10"
	id="support"
	bind:this={nodeSupport}
>
	<IntersectionObserver element={nodeSupport} let:intersecting>
		{#if intersecting}
			<a href="#support">
				<h1 in:fly={{ duration: 800, y: -30, delay: 200 }} class="text-8xl font-bold link z-20">
					Like My Work?
				</h1>
			</a>
			<p in:scale={{ duration: 800, start: 0.9, delay: 300 }} class="text-4xl max-w-3xl z-20">
				Please consider donating to <a class="link special" href="https://plant.ecosia.org/"
					>Ecosia</a
				>,
				<a class="link special" href="https://support.wwf.org.uk/donate-to-wwf">the WWF</a> or other
				environmental charities, in order to help combat man-made climate change.
			</p>
		{/if}
	</IntersectionObserver>
	<img
		data-para-offset="2"
		data-para-both=".3,-0.9"
		src="/img/leaves.jpg"
		alt="Leaves"
		class="absolute -left-[10vw] bottom-auto sm:-bottom-[220vh] h-[90vh] z-10 saturate-150 aspect-square rounded-full"
	/>
</section>

<section class="grid-center" id="contact">
	<div bind:this={nodeContact} class="flex-col flex gap-10">
		<IntersectionObserver element={nodeContact} let:intersecting>
			<div class="text-center font-bold text-8xl">
				{#if intersecting}
					<h1 in:fly={{ duration: 800, y: -20, delay: 200 }}>Contact Me</h1>
				{/if}
			</div>
			<div class="flex justify-center gap-5">
				{#if intersecting}
				<a href="https://github.com/sam-the-programmer" in:fly={{duration: 800, y: 30, delay: 300}}>
					<div class="animate-float-sm p-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="100px"
							height="100px"
							viewBox="0 0 32 32"
							fill="none"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z"
								fill="#24292E"
							/>
						</svg>
						<p class="font-semibold text-3xl">GitHub</p>
					</div>
				</a>
				{/if}
			</div>
		</IntersectionObserver>
	</div>
</section>

<style lang="postcss">
	section:nth-child(2n + 1) {
		@apply bg-green-300 saturate-50;
	}

	#landing:after {
		content: "";
		@apply absolute bottom-0 left-0 w-screen h-14 bg-green-300 saturate-50 -z-10;
	}

	#contact > div > div:nth-child(2) > a > div {
		@apply flex flex-col justify-center items-center gap-3;
	}

	.caret-animation:after {
		content: "|";
		animation: caret 1.5s linear infinite;
	}

	@keyframes caret {
		0% {
			opacity: 0;
		}

		50% {
			opacity: 0.9;
		}

		100% {
			opacity: 0;
		}
	}
</style>

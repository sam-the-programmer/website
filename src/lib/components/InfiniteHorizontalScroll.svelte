<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	interface Project {
		name: string;
		description: string;
		link: string;
		tool: string;
		col: string;
	}

	export let projects: Array<Project>;

	export let rate: number = 3;

	let scrollable: HTMLDivElement;
	onMount(() => {
		if (rate < 0) {
			scrollable.scrollLeft = scrollable.scrollWidth;
		}

		let dist: number = scrollable.scrollLeft;
		const scroll = () => {
			dist += rate;

			if (rate > 0) {
				if (scrollable.firstElementChild) {
					if (scrollable.firstElementChild.getBoundingClientRect().right < 0) {
						dist = 0;

						let node = scrollable.firstElementChild;
						scrollable.removeChild(node);
						scrollable.appendChild(node);
					}
				}
			} else {
				if (scrollable.lastElementChild !== null) {
					if (scrollable.lastElementChild.getBoundingClientRect().left > scrollable.getBoundingClientRect().right) {
						let node = scrollable.lastElementChild;
						scrollable.prepend(node);

						dist = scrollable.scrollWidth - scrollable.getBoundingClientRect().width + rate;
					}
				}
			}

			scrollable.scrollLeft = dist;
			requestAnimationFrame(scroll);
		};
		scroll();
	});
</script>

<div class="flex gap-3 items-center max-w-[100vw] overflow-hidden p-4" bind:this={scrollable}>
	{#each [...projects.entries()] as [i, p]}
		<a href={p.link} in:fly={{duration: 800, y: 10, delay: 500 + i * 100}} out:fly={{duration: 800, y: 10, delay: i * 100}}>
			<div
				class="flex items-center p-3 flex-col link
                    hover:scale-[1.03] transition-transform duration-300 ease-in-out
                    text-center bg-base h-40 gap-2 sm:gap-3 w-[30vmax] rounded-xl"
			>
				<h1 class="h-1/4 font-bold sm:text-2xl">{p.name}</h1>
				<p class="h-2/4 w-11/12 sm:text-[1rem] text-sm">{p.description}</p>
				<div class="h-1/4 flex-center gap-3">
					<span style:background-color={p.col} class="w-3 block rounded-full aspect-square" />
					<span class="font-semibold italic">{p.tool}</span>
				</div>
			</div>
		</a>
	{/each}
</div>

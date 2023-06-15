<script lang="ts">
	import { onMount } from "svelte";

	onMount(() => {
		let prefersReducedMotion = false;
		prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		if (!prefersReducedMotion) {
			let nodesX = document.querySelectorAll("[data-para-x]");
			let nodesY = document.querySelectorAll("[data-para-y]");
			let nodesBoth = document.querySelectorAll("[data-para-both]");

			window.addEventListener("scroll", (_) => {
				nodesX.forEach((node: any) => {
					let offsetValue: any = node.getAttribute("data-para-x");
					let subtractValue: any = node.getAttribute("data-para-offset");
					subtractValue = subtractValue ? subtractValue : 0;
					subtractValue = Number(subtractValue) * window.innerHeight;

					node.style.transform = `translateX(${(window.scrollY - subtractValue) * offsetValue}px)`;
				});

				nodesY.forEach((node: any) => {
					let offsetValue: any = node.getAttribute("data-para-y");
					let subtractValue: any = node.getAttribute("data-para-offset");
					subtractValue = subtractValue ? subtractValue : 0;
					subtractValue = Number(subtractValue) * window.innerHeight;

					node.style.transform = `translateY(${(window.scrollY - subtractValue) * offsetValue}px)`;
				});

				nodesBoth.forEach((node: any) => {
					let offsetValue: any = node.getAttribute("data-para-both").split(",");
					let x = Number(offsetValue[0]);
					let y = Number(offsetValue[1]);
					let subtractValue: any = node.getAttribute("data-para-offset");
					subtractValue = subtractValue ? subtractValue : 0;
					subtractValue = Number(subtractValue) * window.innerHeight;

					node.style.transform = `translate(${(window.scrollY - subtractValue) * x}px, ${
						(window.scrollY - subtractValue) * y
					}px)`;
				});
			});
		}
	});
</script>

<section class="grid-center">
	<h1 class="text-center text-9xl font-extrabold invert-text px-2 xs:px-8" data-para-both=".8,.6">
		Hi, I'm Sam.
	</h1>
</section>
<section class="grid-center">
	<h1 class="text-6xl w-8/12 text-center invert-text" data-para-both="-1,-.6" data-para-offset="1">
		I'm a student, machine learning researcher, and fullstack dev.
	</h1>
</section>
<section class="flex-center flex-col gap-8">
	<div class="invert-text" data-para-both="-2.5,-0.5" data-para-offset="2">
		<h1 class="font-bold text-8xl mb-10">I can use...</h1>
	</div>
	<div class="flex justify-evenly text-5xl invert-text w-full" id="tools">
		<div data-para-both=".5,-.35" data-para-offset="2">
			<a href="https://python.org"
				><span class="selection:bg-blue-600 hover:bg-blue-600 hover:text-black px-4 text-blue-600"
					>Python</span
				></a
			>
			<a href="https://kit.svelte.dev"
				><span class="selection:bg-cyan-500 hover:bg-cyan-500 hover:text-black px-4 text-cyan-500"
					>Svelte</span
				></a
			>
		</div>
		<div data-para-both=".5,-.75" data-para-offset="2">
			<a href="https://www.typescriptlang.org/"
				><span
					class="selection:bg-orange-700 hover:bg-orange-700 hover:text-black px-4 text-orange-700"
					>TypeScript</span
				></a
			>
			<a href="https://dotnet.microsoft.com/en-gb/languages/csharp"
				><span
					class="selection:bg-purple-500 hover:bg-purple-500 hover:text-black px-4 text-purple-500"
					>C#</span
				></a
			>
		</div>
		<div data-para-both=".5,-1.25" data-para-offset="2">
			<a href="https://isocpp.org/"
				><span class="selection:bg-lime-600 hover:bg-lime-600 hover:text-black px-4 text-lime-600"
					>C++</span
				></a
			>
			<a href="https://go.dev/"
				><span class="selection:bg-red-600 hover:bg-red-600 hover:text-black px-4 text-red-600"
					>GoLang</span
				></a
			>
		</div>
	</div>
</section>
<section class="flex-center flex-col invert-text">
	<div class="mb-10" data-para-x="1.5" data-para-offset="3">
		<h1 class="font-bold text-7xl">My Projects Include...</h1>
	</div>
	<div class="text-6xl mb-4" data-para-x="-1.5" data-para-offset="3">
		<a href="https://econsumerapp.web.app">
			<h2 class="inline-flex font-bold text-purple-800">
				<span class="text-fuchsia-500">eco</span>
				<span>nsumer</span>
			</h2>
		</a>
	</div>
	<div class="text-6xl mb-4" data-para-x="-2.2" data-para-offset="3">
		<a href="https://github.com/sam-the-programmer/sandcastle">
			<h3 class="inline-flex font-bold text-cyan-600">
				<span>SandCastle</span>
			</h3>
		</a>
	</div>
	<div class="text-6xl" data-para-x="-2.9" data-para-offset="3">
		<a href="https://marketplace.visualstudio.com/items?itemName=sam-the-programmer.jupyter-theme">
			<h3 class="inline-flex font-bold text-lime-500">
				<span>Jupyter Theme</span>
			</h3>
		</a>
	</div>
</section>
<section class="flex-center flex-col gap-14">
	<div class="invert-text text-8xl font-bold" data-para-y="2" data-para-offset="4">
		<h1 class="title">Find Me On...</h1>
	</div>
	<div class="flex justify-evenly gap-14 items-center font-bold text-3xl" id="contacts">
		<a href="https://github.com/sam-the-programmer">
			<div data-para-both="1,-0.5" data-para-offset="4">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="64"
						height="64"
						viewBox="0 0 1024 1024"
						fill="none"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
							transform="scale(64)"
							fill="#1B1F23"
						/>
					</svg>
				</div>
				<p class="text-black opacity-80">GitHub</p>
			</div>
		</a>
		<a href="https://stackoverflow.com/users/15515166/samtheprogrammer">
			<div data-para-both="-1,-0.5" data-para-offset="4">
				<div>
					<svg
						aria-hidden="true"
						class="svg-icon iconLogoGlyphMd native native"
						width="64"
						height="64"
						viewBox="0 0 32 37"
						><path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB" /><path
							d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
							fill="#F48024"
						/></svg
					>
				</div>
				<p class="text-[#F48024] opacity-95">StackOverflow</p>
			</div>
		</a>
	</div>
</section>

<style lang="postcss">
	section {
		@apply w-full h-screen;
	}

	#tools > div {
		display: flex;
		flex-direction: column;
		height: 2.5lh;
		@apply justify-between text-center w-full;

		span {
			@apply duration-150 w-full;
		}
	}

	#contacts > a > div {
		@apply flex flex-col justify-center items-center gap-3;
	}

	/* * {
		outline: solid #acff2fa4 3px;
	} */
</style>

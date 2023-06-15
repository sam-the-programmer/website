<div
	class="flex justify-between p-5
	fixed w-full z-50 duration-150
	glass"
	id="nav--"
>
	<div>
		<h1>Sam</h1>
	</div>
	<div class="flex gap-8">
		<a class="hover" href="/">Home</a>
		<a class="hover" href="https://github.com/sam-the-programmer/">Contact</a>
	</div>
</div>

<style lang="postcss">
	*:not(div) {
		color: rgb(129, 136, 152);
		opacity: 0.8;
		font-weight: bold;
		transition: opacity 200ms ease, color 200ms ease;
	}

	@media (hover: hover) {
		.hover:hover {
			opacity: 1;
			color: blue;
		}
	}
</style>

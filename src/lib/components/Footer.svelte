<footer>
    <div>
		<h1>Website</h1>
		<a href="/">Home</a>
		<a href="/#projects">Projects</a>
		<a href="/#support">Support</a>
		<a href="/#contact">Contact</a>
	</div>
	<div>
		<h1>Code</h1>
		<a href="https://github.com/sam-the-programmer">GitHub</a>
		<a href="https://codepen.io/sam-the-programmer">CodePen</a>
		<a href="https://stackoverflow.com/users/15515166/samtheprogrammer">StackOverflow</a>
		<a href="https://www.codewars.com/users/sam-the-programmer">CodeWars</a>
	</div>
</footer>

<style lang="postcss">
	footer {
		@apply bg-base-content text-base flex sm:flex-row flex-col justify-around gap-10 p-5 items-center;

		h1 {
			@apply text-3xl font-bold;
		}

		div {
			@apply flex flex-col items-center text-lg gap-1;
		}
	}
</style>

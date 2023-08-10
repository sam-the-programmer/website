<script lang="ts">
	import { page } from "$app/stores";
</script>

<section class="grid-center h-screen">
	<div class="absolute w-screen h-screen grid-center">
		<div class="w-96 blur-3xl animate-float aspect-square rounded-full bg-secondary"></div>
	</div>
	<div class="text-center h-full flex-center flex-col">
		<h1 class="font-bold text-5xl">Oops.</h1>
		<h2 class="text-3xl">
			<span>{$page.status}</span>
			<span>{$page.error?.message}</span>
		</h2>
	</div>
</section>

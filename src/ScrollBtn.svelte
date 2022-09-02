<script lang="ts">
    export let textColour: string = "text-white";
    export let up: boolean = false;
    export let animation: string = "";

    animation = `motion-safe:animate-${animation}`; // For accessibility
</script>

<div
    class="absolute {up ? 'top-0' : 'bottom-0'} w-screen
      grid place-items-center p-5"
>
    <button
        on:click={() =>
            window.scrollBy(0, up ? -window.innerHeight : window.innerHeight)}
        class="font-bold text-6xl {textColour} {animation}"
        ><span style="writing-mode:vertical-rl">{up ? "⟨" : "⟩"}</span></button
    >
</div>

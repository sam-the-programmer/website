<script lang="ts">
  import { Parallax, ParallaxLayer } from "svelte-parallax";
  import ScrollBtn from "./ScrollBtn.svelte";

  let scrollableStuff: any = [];
  for (let index = -3; index < 4; index++) {
    scrollableStuff.push(index * 2.5 + 0.01);
  }

  let i: number = 0;
  scrollableStuff.forEach((element: any) => {
    scrollableStuff[i] = [element, i];
    i++;
  });
</script>

<Parallax class="bg-black text-white" sections={5}>
  <!-- Title Section -->
  {#each scrollableStuff as scrollSet}
    <ParallaxLayer offset={0} rate={scrollSet[0]}>
      <div
        class="h-screen bg-white"
        style="width: {100 / i}vw; margin-left: {(100 * scrollSet[1]) / i}vw;"
      />
    </ParallaxLayer>
  {/each}

  <ParallaxLayer offset={0}>
    <div
      class="grid place-items-center w-screen h-screen
      font-extrabold text-[20vmin] z-50 p-6 text-center text-black"
    >
      <h1 id="title">Hi, I'm Sam</h1>
    </div>
    <ScrollBtn textColour="text-black" animation="animate-bounce" />
  </ParallaxLayer>

  <!-- First Section -->
  <ParallaxLayer offset={1}>
    <div class="content-container">
      <div>
        <h2>My Aspirations</h2>
        <p>
          Currently a student, I hope to become a <span
            class="text-bg bg-gradient-to-r from-sky-400 to-purple-400"
            >machine learning engineer</span
          >
          and researcher in the future, inspired by companies like
          <a href="https://deepmind.com">
            <span class="text-bg bg-gradient-to-r from-sky-500 to-blue-500"
              >DeepMind</span
            >
          </a>
          and
          <a href="https://openai.com">
            <span class="text-bg bg-gradient-to-r from-amber-400 to-rose-500"
              >OpenAI</span
            >
          </a>to develop new deep learning algorithms.
        </p>
      </div>
    </div>
    <ScrollBtn up={true} />
    <ScrollBtn />
  </ParallaxLayer>

  <!-- Second Section -->
  <ParallaxLayer offset={2}>
    <div id="languages-content" class="content-container">
      <div>
        <h2>Languages</h2>
        <p>
          My main expertise is with <span
            class="text-bg bg-gradient-to-r from-amber-400 to-amber-600"
            >Python</span
          >
          and
          <span class="text-bg bg-gradient-to-r from-cyan-400 to-sky-600"
            >Go</span
          >, however I am proficient in
          <span class="text-bg bg-gradient-to-r from-rose-400 to-red-600"
            >C++</span
          >
          and
          <span class="text-bg bg-gradient-to-r from-indigo-300 to-indigo-400"
            >Typescript</span
          > too.
        </p>
        <div class="flex justify-around w-10/12">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
            alt="C++"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="Python"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original-wordmark.svg"
            alt="Go"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="Typescript"
          />
        </div>
      </div>
    </div>

    <ScrollBtn />
    <ScrollBtn up={true} />
  </ParallaxLayer>

  <!-- Third Section -->
  <ParallaxLayer offset={3}>
    <div id="frameworks-content" class="content-container">
      <div>
        <h2 class="text-4xl w-full">Frameworks</h2>
        <p>
          I have experience with a variety of frameworks in various languages,
          including
          <span class="font-bold"
            >Svelte, PyTorch, TensorFlow, Firebase, TailwindCSS and NumPy</span
          >.
        </p>
        <div class="flex justify-around w-10/12">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg"
            alt="Svelte"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg"
            alt="PyTorch"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg"
            alt="TensorFlow"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg"
            alt="Firebase"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
            alt="TailwindCSS"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg"
            alt="NumPy"
          />
        </div>
      </div>
    </div>

    <ScrollBtn />
    <ScrollBtn up={true} />
  </ParallaxLayer>

  <!-- Fourth Section -->
  <ParallaxLayer offset={4}>
    <ScrollBtn up={true} />

    <div class="content-container">
      <div>
        <h2>Projects</h2>
        <p>
          Projects I've worked on include the <a
            href="https://econsumerapp.web.app"
          >
            <span
              ><span class="text-lime-400 font-bold">eco</span><span
                class="text-green-500 font-bold">nsumer</span
              ></span
            >
          </a>
          project, a fullstack PWA that helps you reduce the greenhouse gases of
          your shopping. <br />
          Other projects include
          <span class="text-bg bg-gradient-to-r from-sky-400 to-purple-400"
            >machine learning</span
          > libraries, <span class="text-bg bg-gradient-to-r from-rose-500 to-amber-300"
            >data forecasting</span
          > dashboards and many more...
        </p>
      </div>
    </div>
  </ParallaxLayer>
</Parallax>

<style lang="postcss">
  .content-container div div img {
    width: 50px;
    height: 50px;
  }

  .content-container {
    @apply grid place-items-center w-screen h-screen;
  }

  .content-container > div {
    @apply w-10/12 max-w-xl text-center flex flex-col items-center gap-10 px-10;
  }

  .content-container h2 {
    @apply text-4xl w-full;
  }

  .text-bg {
    @apply bg-clip-text font-bold text-transparent;
  }

  h1,
  h2,
  p {
    z-index: 49;
  }
</style>

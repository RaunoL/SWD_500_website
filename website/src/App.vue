<template>
  <div id="app">
    <hero/>
    <div class="container">
      <intro/>
      <about/>
      <skills/>
      <portfolio/>
      <contact/>
    </div>
  </div>
</template>

<script>
  import hero from './components/hero'
  import Portfolio from "./components/portfolio";
  import Contact from "./components/contact";
  import Intro from "./components/intro";
  import About from "./components/about";
  import Skills from "./components/skills";


  export default {
    name: 'App',
    components: {
      Skills,
      About,
      Intro,
      Contact,
      Portfolio,
      hero
    }
  }
</script>



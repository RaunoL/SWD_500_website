<template>
  <div id="app">
    <!--<navbar/>-->
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
  import Navbar from "./components/navbar";


  export default {
    name: 'App',
    components: {
      Navbar,
      Skills,
      About,
      Intro,
      Contact,
      Portfolio,
      hero
    }
  }
</script>



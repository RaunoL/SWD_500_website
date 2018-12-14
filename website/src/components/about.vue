<template>
  <section id="about">
    <div class="row">
      <div class="col-12">
        <div class="section-heading">
          <h2>About</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6"><img :src="image.src" :alt=image.alt></div>
      <div class="col-6">
        <p>I am a programmer at heart- always like solving problems my own way. I got into web design in high school and have liked it ever since. I came to UK to study web development and I feel like it was the right choice. In the past I have made multiple websites as a hobby or as a freelance project. I am always trying to improve and learn new things.</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "about",
    data() {
      return{
        image:{
          src:require('../assets/about-image.jpg'),
          alt:'My picture'
        }
      }
    }
  }
</script>

<style scoped>

</style>

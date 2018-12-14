<template>
  <div id="intro">
    <div class="row">

      <div class="col-12">
        <h3>{{introText.text}}</h3>
        <h4>{{introText.author}}</h4>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "intro",
    data() {
      return {
        introText: {
          text: '“A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.”',
          author: '—antoine de \n' +
            'saint exupéry'
        }
      }
    }
  }
</script>

<style scoped>

</style>

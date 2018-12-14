<template>
  <section id="skills">
    <div class="row">
      <div class="col-12">
        <div class="section-heading">
          <h2>My skillset</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-for="item in skills" class="col-4">
        <div class="item">
          <div class="border">
            <img v-bind:src="item.icon"/>
          </div>
          <h4>{{item.name}}</h4>
          <p>{{item.description}}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-for="item in skills2" class="col-4">
        <div class="item">
          <div class="border">
            <img v-bind:src="item.icon"/>
          </div>
          <h4>{{item.name}}</h4>
          <p>{{item.description}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "skills",
    data() {
      return {
        skills: {
          css: {
            icon: require('../assets/icons/css.svg'),
            name: 'CSS',
            description: 'I use CSS for the best looking websites.'
          },
          js: {
            icon: require('../assets/icons/javascript.png'),
            name: 'JavaScript',
            description: 'Javascript runs in the back so you can enjoy its features.'
          },
          html: {
            icon: require('../assets/icons/html.png'),
            name: 'HTML',
            description: 'HTML is responsibe for all that you see on the screen.'
          }
        },
        skills2: {
          react: {
            icon: require('../assets/icons/react.png'),
            name: 'React',
            description: 'I use react framework to power my websites.'
          },
          github: {
            icon: require('../assets/icons/github.png'),
            name: 'GitHub',
            description: 'GitHub lets me roll back any changes in case I mess up.'
          },
          webpack: {
            icon: require('../assets/icons/webpack.png'),
            name: 'Webpack',
            description: 'Webpack compiles my websites into one whole package.'
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>

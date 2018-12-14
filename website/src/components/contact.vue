<template>
  <section id="contact">
    <div class="row">
      <div class="col-12">
        <div class="section-heading">
          <h2>Let's talk</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <h3>Email:</h3>
        <h4>{{contactInfo.Email}}</h4>
        <h3>Phone:</h3>
        <h4>{{contactInfo.Phone}}</h4>
        <div v-for="item in socialMedia" class="SM-icon">
          <a v-bind:href="item.link" target="_blank"><img v-bind:src="item.icon" v-bind:alt="item.alt"></a>
        </div>
      </div>
      <div class="col-6">
        <img src="../assets/contact.jpg" alt="">
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "contact",
    data() {
      return {
        contactInfo: {
          Email: 'raunolillemets@gmail.com',
          Phone: '+44 7914526359'
        },
        socialMedia: {
          facebook: {
            link: 'https://www.facebook.com/rauno.lillemets.5',
            icon: require('../assets/icons/fb.png'),
            alt:'facebook'
          },
          linkedIn: {
            link: 'https://www.linkedin.com/in/rauno-lillemets-948575164/',
            icon: require('../assets/icons/linkedIn.png'),
            alt: 'LinkedIn'
          },
          twitter: {
            link: 'https://twitter.com/WebsterRauno',
            icon: require('../assets/icons/twitter.png'),
            alt: 'Twitter'
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>

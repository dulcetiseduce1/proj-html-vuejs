<template>
  <div id="app">
    <TheHeader
      :headerSocial="mySocials"
      :headerLinks="myLinks"
      />
    <TheJumbotron/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheJumbotron from './components/TheJumbotron.vue'


export default {
  name: 'App',
  components: {
    TheHeader,
    TheJumbotron
  },

data(){
    return{
      mySocials: [
        {
          social: "fa-brands fa-facebook-f"
        },
        {
          social: "fa-brands fa-twitter"
        },
        {
          social: "fa-brands fa-instagram"
        },
        {
          social: "fa-brands fa-youtube"
        }
      ],

      myLinks: [
        {
          link: "Home",
          active: true
        },
        {
          link: "Rates",
          active: false
        },
        {
          link: "Testimonials",
          active: false
        },
        {
          link: "FAQ",
          active: false
        },
        {
          link: "Blog",
          active: false
        },
        {
          link: "Contact",
          active: false
        },
      ],
    }
}
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

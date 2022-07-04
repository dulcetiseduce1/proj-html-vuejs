<template>
  <div id="app">
    <TheHeader
      :headerSocial="mySocials"
      :headerLinks="myLinks"
      />

  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'


export default {
  name: 'App',
  components: {
    TheHeader,

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

<template>
  <div id="app">
    <TheHeader
      :headerSocial="TheSocials"
      :headerLinks="TheLinks"
      />
    <TheJumbotron/>
    <TheInfoSection/>
    <TheJumbotron2/>
    <TheFooter
      :footerLinks="TheFooterLinks"
      :footerPosts="TheFooterPosts"
      :footerSocial="TheSocials"/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheJumbotron from './components/TheJumbotron.vue'
import TheInfoSection from './components/TheInfoSection.vue'
import TheJumbotron2 from './components/TheJumbotron2.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheJumbotron,
    TheInfoSection,
    TheJumbotron2,
    TheFooter
  },

data(){
    return{
      TheSocials: [
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

      TheLinks: [
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

      TheFooterLinks: [
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
          link: "Blog",
          active: false
        },
        {
          link: "Free Quote",
          active: false
        },
      ],

      TheFooterPosts: [
        {
          link: "Heading Out To College?",
        },
        {
          link: "Moving Your Business?",
        },
        {
          link: "Outstanding Quality",
        },
        {
          link: "Cost Of Moving",
        },
        {
          link: "Best Moving Tips",
        },
      ]
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

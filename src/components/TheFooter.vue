<template>
  <div class="footer-wrapper">
    <div class="footer-top">
        <div class="footer-top-wrapper">
            <div class="footer-about">

                <h3>ABOUT</h3>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quia vel iusto fuga ratione error ullam iure cumque a vitae libero delectus laboriosam, nisi assumenda. A libero eligendi exercitationem neque?</p>
                <img src="../assets/img/avada-movers-logo.png" alt="avada movers">
            </div>

            <div class="footer-movers">

                <h3>AVADA MOVERS</h3>

                <ul>

                    <li 
                    v-for="(item, i) in footerLinks" 
                    :key="i"
                    @click="activeHere(item)"
                    >
                        <a :class="item.active === true ? 'here' : '' " href="#"><font-awesome-icon icon="fa-solid fa-angle-right" /> {{item.link}}</a>
                    </li>
                </ul>

            </div>

            <div class="footer-posts">

                <h3>RECENT POSTS</h3>

                <ul>

                    <li 
                    v-for="(item, k) in footerPosts" 
                    :key="k"
                    >
                        <a href="#"><font-awesome-icon icon="fa-solid fa-angle-right" /> {{item.link}}</a>
                    </li>
                </ul>

            </div>
        </div>
    </div>

    <div class="footer-bottom">

        <div class="footer-copyright">

            <p>
                &copy; Copyright 2012 - 2022 &vert; Avada Theme by ThemeFusion &vert; All Rights Reserved &vert; Powered by WordPress
            </p>
        </div>

        <ul class="footer-socials">

            <li v-for="(item, j) in footerSocial" :key="j">
                <a href="#">
                <font-awesome-icon :icon="item.social" />
                </a>
            </li>
        </ul>

    </div>
  </div>
</template>

<script>


export default {
    name: 'TheFooter',

    props: {
        footerLinks: Array,
        footerPosts: Array,
        footerSocial: Array
    },

    methods: {
    // function that changes "here" class
    activeHere(myItem){
      this.footerLinks.forEach(element => {
        element.active = false
        if (element.active === false) {
          myItem.active = true
        } 
          console.log(1, element.active);
      });
    }
  }

}
</script>

<style lang="scss">
    .footer-wrapper{
        width: 100%;
        background-color: #6abf17;
        height: 620px;
        padding-top: 20px;
    
        .footer-top{
            width: 100%;
            height: 480px;
            background-color: white;
    
            .footer-top-wrapper{
                width: 70%;
                min-width: 950px;
                height: 100%;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-around;
    
                li{
                    list-style: none;
                    margin: 40px 0;

                    @import '../assets/TheCss.scss';
    
                    a{
    
                        text-decoration: none;
                        color: black;
    
                        &:hover{
                            color: blue;
                        }
                    }
                }

                .footer-about{
                    width: 300px;
                    margin: 0 10px;
                    min-width: 300px;
    
                    p{
                        margin: 40px 0;
                        line-height: 30px;
                    }
                }
    
                .footer-movers{
                    width: 300px;
                    margin: 0 10px; 
                    min-width: 300px;
    
                }
    
                .footer-posts{
                    width: 300px;
                    margin: 0 10px;
                    min-width: 300px;
    
                }
            }
        }
    
        .footer-bottom{
            width: 100%;
            height: calc(100% - 480px);
    
            .footer-copyright{
                height: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
            }
    
            .footer-socials{
                height: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                list-style: none;
                padding-bottom: 10px;
    
                li{
                    margin: 0 15px;
    
                    a{
                        color: white;
                    }
                }
    
            }
        }
    }
    
</style>
    
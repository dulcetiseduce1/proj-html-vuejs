<template>
<div>
  <div class="jumbotron">
    <div class="jumbotron-wrapper">
      <P>MOVING WITHOUT THE HASSLE</P>
      <h1>WE MAKE IT SIMPLE</h1>
      <P>PROFESSIONAL SERVICE WITH QUALITY AND COSTUMER SATISFACTION</P>
    </div>
  </div>
  <div class="jumbo-quote">
    <a href="#">
      <font-awesome-icon icon="fa-regular fa-paper-plane" />
      <p>GET A FREE QUOTE ONLINE NOW!</p>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: "TheJumbotron",
};
</script>

<style lang="scss">
.jumbotron {
  width: 100%;
  background-image: url("../assets/img/avada-movers-homeherobackground-final.jpg");
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .jumbotron-wrapper {
    text-align: center;

    h1 {
      font-size: 50px;
      margin: 15px 0;
    }

    p {
      font-size: 13px;
      color: rgb(80, 80, 80);
      font-weight: 600;
    }
  }
}
.jumbo-quote {
  width: 100%;
  height: 110px;
  background-color: #1775bf;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    .fa-paper-plane {
      color: white;
      margin-right: 10px;
    }

    p {
      color: white;
    }
  }
}
</style>

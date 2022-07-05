<template>
  <div class="request">
    <div class="request-wrapper">
      <div class="request-text">
        <h2>Request A Free Quote</h2>
        <P
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</P
        >
        <a class="button" href="#">CLICK HERE</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTestimonialsQuote",
};
</script>

<style lang="scss">
.request {
  width: 100%;
  height: 510px;
  background-image: url("../assets/img/avada-movers-request-quote-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .request-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .request-text {
    text-align: center;

    span {
      font-size: 13px;
      color: rgb(80, 80, 80);
      font-weight: 600;
    }

    h2 {
      color: #6abf17;
      font-size: 30px;
      margin: 15px 0;
    }

    p {
      width: 60%;
      margin: 0 auto;
      font-size: 14px;
      line-height: 25px;
      margin-bottom: 45px;
    }
    // button
    @import "../assets/TheCss.scss";
  }
}
</style>

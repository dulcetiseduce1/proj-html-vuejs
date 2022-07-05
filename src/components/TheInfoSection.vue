<template>
  <div class="info">
    <div class="award-wrapper">
      <div class="award-text">
        <span>HEADACHE FREE</span>
        <h2>
          Award Winning <br />
          Moving Company
        </h2>
        <P
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          incidunt officiis magnam qui. Cumque quibusdam error ullam. Maiores
          eius vitae deserunt voluptatum maxime sit laudantium itaque vero
          quisquam, a rem!</P
        >
        <a class="button" href="#">READ OUR TESTIMONIALS</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheInfoSection",
};
</script>

<style lang="scss">
.info {
  width: 100%;
  height: 510px;
  background-color: #f8f9fd;

  .award-wrapper {
    width: 100%;
    height: calc(100% - 110px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .award-text {
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
      width: 40%;
      margin: 0 auto;
      font-size: 14px;
      line-height: 25px;
      margin-bottom: 25px;
    }
    // button
    @import "../assets/TheCss.scss";
  }
}
</style>

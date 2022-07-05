<template>
  <div>
    <div class="testimonials">
      <div class="testimonials-wrapper">
        <div class="testimonials-text">
          <span>HAPPY CUSTUMERS</span>
          <h1>Testimonials</h1>
        </div>

        <div class="cards-wrapper">
          <div class="testimonials-card">
            <img
              src="../assets/img/avada-movers-johndoe-final-400x400.jpg"
              alt="john doe"
            />
            <div class="texts">
              <h3>John Doe</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>
            </div>
          </div>
          <div class="testimonials-card">
            <img
              src="../assets/img/avada-movers-janedoe-final-400x400.jpg"
              alt="jane doe"
            />
            <div class="texts">
              <h3>Jane Doe</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>
            </div>
          </div>
          <div class="testimonials-card">
            <img
              src="../assets/img/avada-movers-johnsmith-final-400x400.jpg"
              alt="john smith"
            />
            <div class="texts">
              <h3>John Smith</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>
            </div>
          </div>
        </div>

        <div class="button-wrapper">
          <a class="button" href="#">READ MORE TESTIMONIALS</a>
        </div>
      </div>
    </div>

    <div class="request">
      <div class="request-wrapper">
        <div class="request-text">
          <h2>Request A Free Quote</h2>
          <P
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</P
          >
          <a class="button" href="#">CLICK HERE</a>
        </div>
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
//testimonials
.testimonials {
  width: 100%;
  height: 800px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  background-image: url("../assets/img/avada-movers-testimonial-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 100px;

  .testimonials-wrapper {
    width: 80%;
    height: 80%;
    margin: 0 auto;
    padding-top: 30px;

    .testimonials-text {
      text-align: center;
      margin-bottom: 10px;

      span {
        font-size: 13px;
        color: rgb(80, 80, 80);
        font-weight: 600;
      }

      h1 {
        color: #6abf17;
        margin-top: 10px;
      }

      p {
        width: 40%;
        margin: 0 auto;
        font-size: 14px;
        line-height: 25px;
        margin-bottom: 25px;
      }
    }

    .cards-wrapper {
      width: 70%;
      min-width: 950px;
      height: calc(100% - 100px);
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto;

      .testimonials-card {
        width: 350px;
        height: 490px;
        padding: 15px;
        text-align: center;

        img {
          width: 50%;
          margin-bottom: 10px;
          border-radius: 50%;
        }

        .texts {
          padding: 20px 20px 25px 20px;

          h3 {
            color: #1775bf;
            margin-bottom: 30px;
          }

          p {
            font-size: 14px;
            line-height: 25px;
            margin-bottom: 20px;
            font-style: italic;
          }
        }
      }
    }

    .button-wrapper {
      width: 300px;
      margin: 0 auto;
      text-align: center;

      // button
      @import "../assets/TheCss.scss";
    }
  }
}

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

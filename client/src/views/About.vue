<template>
  <div class="about">
    <v-nav :navbarproduct="false" />

    <section class="breadcumb-section">
      <b-container>
        <b-row>
          <b-col>
            <div class="breadcrumb_iner">
              <h2>About</h2>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="how_we_started">
      <b-container fluid>
        <b-row no-gutters>
          <b-col md="6">
            <b-img src="../assets/images/blog_1.jpg" fluid alt="Story image"></b-img>
            <a
              class="about_video_icon popup-youtube"
              href="https://www.youtube.com/watch?v=DWHB6nTyKDI"
            ></a>
          </b-col>
          <b-col md="1"></b-col>
          <b-col md="5" class="started-text" pt-3 mb-4>
            <h2 class="mb-4">
              E-online
              <span>Shop</span>
            </h2>
            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
            <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="mission_section">
      <b-container fluid>
        <b-row no-gutters>
          <b-col md="6" data-aos="fade-right">
            <h2 class="mb-4 mt-5">Our Mission</h2>
            <h3>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.</h3>
          </b-col>
          <b-col md="1"></b-col>
          <b-col md="5" class="started-text" pt-3 mb-4 data-aos="fade-left" data-aos-delay="300">
            <b-img src="../assets/images/login.jpg" fluid alt="Our mission"></b-img>
            <a
              class="about_video_icon popup-youtube"
              href="https://www.youtube.com/watch?v=DWHB6nTyKDI"
            ></a>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="team_section" data-aos="fade" data-aos-delay="200">
      <b-container fluid>
        <b-row class="justify-content-center mb-5">
          <b-col md="7" class="text-center">
            <h2>Our Team</h2>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="6" lg="3">
            <div class="team_block">
              <div class="block-38-img">
                <div class="block-38-header">
                  <b-img
                    v-bind="mainProps"
                    src="../assets/images/profile.jpg"
                    alt="Image placeholder"
                    rounded="circle"
                  ></b-img>
                  <h3 class="block-38-heading h4">Rabby Hossain</h3>
                  <p class="block-38-subheading">CEO/Founder</p>
                </div>
                <div class="block-38-body">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.</p>
                </div>
              </div>
            </div>
          </b-col>
          <b-col md="6" lg="3">
            <div class="team_block">
              <div class="block-38-img">
                <div class="block-38-header">
                  <b-img
                    v-bind="mainProps"
                    src="../assets/images/person_2.jpg"
                    alt="Image placeholder"
                    rounded="circle"
                  ></b-img>
                  <h3 class="block-38-heading h4">Jennifer Greive</h3>
                  <p class="block-38-subheading">Co-Founder</p>
                </div>
                <div class="block-38-body">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.</p>
                </div>
              </div>
            </div>
          </b-col>
          <b-col md="6" lg="3">
            <div class="team_block">
              <div class="block-38-img">
                <div class="block-38-header">
                  <b-img
                    v-bind="mainProps"
                    src="../assets/images/person_3.jpg"
                    alt="Image placeholder"
                    rounded="circle"
                  ></b-img>
                  <h3 class="block-38-heading h4">Patrick Marx</h3>
                  <p class="block-38-subheading">Marketing</p>
                </div>
                <div class="block-38-body">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.</p>
                </div>
              </div>
            </div>
          </b-col>
          <b-col md="6" lg="3">
            <div class="team_block">
              <div class="block-38-img">
                <div class="block-38-header">
                  <b-img
                    v-bind="mainProps"
                    src="../assets/images/person_4.jpg"
                    alt="Image placeholder"
                    rounded="circle"
                  ></b-img>
                  <h3 class="block-38-heading h4">Mike Coolbert</h3>
                  <p class="block-38-subheading">Sales Manager</p>
                </div>
                <div class="block-38-body">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.</p>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="features_section" data-aos="fade">
      <b-row no-gutters>
        <b-col md="6" lg="4" data-aos="fade-up" data-aos-delay class="d-lg-flex mb-4 mb-lg-0 pl-4">
          <div class="icon mr-4 align-self-start">
            <font-awesome-icon size="3x" class="feature_icon" icon="truck"></font-awesome-icon>
            <span class="icon-truck"></span>
          </div>
          <div class="text">
            <h2 class="text-uppercase">Free Shipping</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
          </div>
        </b-col>
        <b-col
          md="6"
          lg="4"
          data-aos="fade-up"
          data-aos-delay="200"
          class="d-lg-flex mb-4 mb-lg-0 pl-4"
        >
          <div class="icon mr-4 align-self-start">
            <font-awesome-icon size="3x" class="feature_icon" icon="redo-alt"></font-awesome-icon>
            <span class="icon-truck"></span>
          </div>
          <div class="text">
            <h2 class="text-uppercase">Free Returns</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
          </div>
        </b-col>
        <b-col
          md="6"
          lg="4"
          data-aos="fade-up"
          data-aos-delay="400"
          class="d-lg-flex mb-4 mb-lg-0 pl-4"
        >
          <div class="icon mr-4 align-self-start">
            <font-awesome-icon size="3x" class="feature_icon" icon="question-circle"></font-awesome-icon>
            <span class="icon-truck"></span>
          </div>
          <div class="text">
            <h2 class="text-uppercase">Customer Support</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
          </div>
        </b-col>
      </b-row>
    </section>

    <section class="client_review">
      <b-container>
        <b-row>
          <b-col class="row justify-content-center mb-3 pb-3">
            <div class="col-md-12 heading-section text-center">
              <h1 class="big">E-SHOP</h1>
            </div>
          </b-col>
        </b-row>
        <b-row class="justify-content-center">
          <b-col md="8">
            <b-row>
              <b-col md="12">
                <b-carousel
                  id="carousel-1"
                  :interval="4000"
                  controls
                  indicators
                  style="height:320px"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                  tabindex="1"
                >
                  <b-carousel-slide>
                    <template v-slot:img>
                      <img
                        style="border-radius: 50%"
                        width="100"
                        height="100"
                        src="../assets/images/client.png"
                        alt="image slot"
                      />
                      <div class="text text-center">
                        <p
                          class="mb-4"
                        >A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p class="name">Roger Scott</p>
                        <span class="position">Customer</span>
                      </div>
                    </template>
                  </b-carousel-slide>
                  <b-carousel-slide>
                    <template v-slot:img>
                      <img
                        style="border-radius: 50%"
                        width="100"
                        height="100"
                        src="../assets/images/client_1.png"
                        alt="image slot"
                      />
                      <div class="text text-center">
                        <p
                          class="mb-4"
                        >A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p class="name">Mike Colins</p>
                        <span class="position">Customer</span>
                      </div>
                    </template>
                  </b-carousel-slide>
                  <b-carousel-slide>
                    <template v-slot:img>
                      <img
                        style="border-radius: 50%"
                        width="100"
                        height="100"
                        src="../assets/images/client_2.png"
                        alt="image slot"
                      />
                      <div class="text text-center">
                        <p
                          class="mb-4"
                        >A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p class="name">Micky Mouse</p>
                        <span class="position">Customer</span>
                      </div>
                    </template>
                  </b-carousel-slide>
                </b-carousel>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="subscribe_part section_padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="subscribe_part_content">
              <h2>Get promotions & updates!</h2>
              <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources credibly innovate granular internal .</p>
              <div class="subscribe_form">
                <input type="email" v-model.trim="$v.email.$model" placeholder="Enter your mail" />
                <button
                  class="btn_1"
                  :disabled="email == '' ? true : false "
                  v-on:click.prevent="makeToast"
                >Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <v-footer />
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  import Navbar from "@/components/Navbar.vue";
  import newslatter from "../mixins/newslatter";

  export default {
    components: {
      "v-nav": Navbar,
      "v-footer": Footer
    },
    mixins: [newslatter],
    data() {
      return {
        sliding: null,
        mainProps: { width: 120, height: 120, class: "mb-4" }
      };
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true;
      },
      onSlideEnd(slide) {
        this.sliding = false;
      }
    }
  };
</script>

<style scoped>
  p {
    line-height: 1.7;
    color: #8c92a0;
    font-weight: 300;
    font-size: 16px;
  }
  .about {
    margin: 0 15px 0 15px;
  }
  section {
    margin-bottom: 5%;
  }
  .breadcumb-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    background-color: #b08ead;
  }
  .breadcrumb_iner {
    text-align: center;
  }
  .how_we_started {
    margin-top: 20px;
    display: flex;
  }
  .container-fluid {
    padding: 0;
  }
  .about_video_icon {
    width: 100px;
    height: 100px;
    line-height: 100px;
    border-radius: 50%;

    animation: pulse 2s infinite;
    background-color: #f1b8c4;
    position: absolute;
    display: flex;
    top: 41%;
    left: 0;
    right: 0;
    margin: 0 auto;

    -webkit-animation: pulse 2s infinite;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
  }
  @media (max-width: 576px) {
    .about_video_icon {
      height: 50px;
      width: 50px;
      line-height: 50px;
    }
  }
  .about_video_icon:after {
    position: absolute;
    content: "";
    width: 25px;
    height: 25px;
    background-color: #fff;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 41%;
    clip-path: polygon(100% 50%, 0 0, 0 100%);
  }
  @media (max-width: 576px) {
    .about_video_icon:after {
      top: 32%;
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(241, 184, 196, 0.4);
      -webkit-box-shadow: 0 0 0 0 rgba(241, 184, 196, 0.4);
      box-shadow: 0 0 0 0 rgba(241, 184, 196, 0.4);
    }
    70% {
      -moz-box-shadow: 0 0 0 30px rgba(241, 184, 196, 0);
      -webkit-box-shadow: 0 0 0 30px rgba(241, 184, 196, 0);
      box-shadow: 0 0 0 30px rgba(241, 184, 196, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(241, 184, 196, 0);
      -webkit-box-shadow: 0 0 0 0 rgba(241, 184, 196, 0);
      box-shadow: 0 0 0 0 rgba(241, 184, 196, 0);
    }
  }

  .started-text::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0%;
    width: 40px;
    height: 2px;
    background: #b08ead;
  }
  .started-text {
    animation: fadeIn 1s ease-in;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      visibility: hidden;
      /*-webkit-transform: translate3d(0, 100%, 0);
                                                  transform: translate3d(0, 100%, 0);*/
      -webkit-transform: translate3d(0, 40px, 0);
      transform: translate3d(0, 40px, 0);
    }

    to {
      visibility: visible;
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .started-text h2 {
    font-size: 50px;
    font-weight: 400;
    padding-top: 10px;
    text-transform: uppercase;
    line-height: 1;
    font-family: "Roboto Condensed", Arial, sans-serif;
    color: black;
  }
  .started-text p {
    font-size: 16px;
    font-weight: 300;
    color: gray;
    line-height: 1.7;
    margin-bottom: 1rem;
  }
  .mission_section h2 {
    color: #b08ead;
    font-weight: 400;
  }
  @media (max-width: 576px) {
    .mission_section h2 {
      font-size: 18px;
    }
  }
  .mission_section h3 {
    color: #4b3049;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    margin: 5px 0 60px;
  }
  .team_section .text-center:before {
    content: "";
    left: 50%;
    top: 0;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    position: absolute;
    width: 60px;
    height: 2px;
    background: #7971ea;
  }
  .team_block {
    text-align: center;
  }
  .block-38-header .block-38-heading {
    color: #000;
    margin: 0;
    font-weight: 300;
  }
  .block-38-header .block-38-subheading {
    color: #b3b3b3;
    margin: 0 0 20px 0;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 0.1em;
  }
  .features_section {
    height: 70vh;
    margin-top: 125px;
    margin-bottom: 0px;
  }
  .feature_icon {
    background: white;
    color: blue;
  }
  .client_review {
    background-color: #f8f9fa !important;
    height: 65vh;
    margin-bottom: 0%;
    margin-top: 0%;
  }
  .heading-section .big {
    font-family: "Lato", Arial, sans-serif;
    position: absolute;
    top: -110px;
    left: 0;
    right: 0;
    font-size: 150px;
    color: rgba(0, 0, 0, 0.04);
    font-weight: 900;
    letter-spacing: 1px;
  }
  .carousel-item {
    height: 280px;
  }
  .carousel-item img {
    margin-left: 44%;
    margin-top: 3%;
  }

  .subscribe_part {
    background-color: #4b3049;
    margin: 0;
    height: 350px;
  }
  .subscribe_part .subscribe_part_content {
    text-align: center;
  }
  .subscribe_part .subscribe_part_content h2 {
    color: #fff;
  }
  @media (max-width: 991px) {
    .subscribe_part .subscribe_part_content h2 {
      font-size: 25px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    .subscribe_part .subscribe_part_content h2 {
      font-size: 30px;
    }
  }
  .subscribe_part .subscribe_part_content p {
    color: #fff;
  }

  .subscribe_part .subscribe_form {
    margin: 0 auto;
    margin-top: 45px;
    position: relative;
    max-width: 558px;
  }
  .subscribe_part .subscribe_form input {
    background-color: transparent;
    color: #fff;
    border-radius: 50px;
    border: 1px solid white;
    width: 100%;
    line-height: 20px;
    padding: 19px 30px;
  }
  .subscribe_part .subscribe_form .btn_1 {
    background-color: #b08ead;
    color: #fff;
    border: 2px solid #b08ead;
    font-size: 15px;
    font-weight: 500;
    display: inline-block;
    text-decoration: none;
    padding: 15px 30px;
    line-height: 16px;
    border-radius: 50px;
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .subscribe_part .subscribe_form .btn_1:focus {
    outline: none;
  }
  @media (max-width: 991px) {
    /* line 32, /Applications/MAMP/htdocs/old/palash/cl/shop_html/sass/_subscribe_part.scss */
    .subscribe_part .subscribe_form .btn_1 {
      padding: 15px 15px;
    }
  }
  .subscribe_part .subscribe_form ::placeholder {
    color: #e4d3df;
  }
  .subscribe_part .subscribe_form input:focus {
    outline: 0;
  }
</style>
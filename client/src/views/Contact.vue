<template>
  <div class="container-fluid">
    <Navbar :navbarproduct="false" />
    <section class="contact-section">
      <b-container>
        <b-row>
          <b-col class="contact-info">
            <h3>GET IN TOUCH</h3>
            <p>Uttara,Dhaka.</p>
            <p>+880 1757047 579</p>
            <p>hosting@contact.com</p>
            <div class="contact-social">
              <a href="#">
                <font-awesome-icon :icon="['fab', 'pinterest']" />
              </a>
              <a href="#">
                <font-awesome-icon :icon="['fab', 'facebook']" />
              </a>
              <a href="#">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
            </div>

            <div>
              <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group id="input-group-1" label-for="input-1">
                  <b-form-input
                    variant="light"
                    id="input-1"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Your Name"
                    tabindex="1"
                  ></b-form-input>
                </b-form-group>
                <!-- tabindex for showing this element in debugging console.It's value should be more than 0.                               -->
                <b-form-group
                  id="input-group-2"
                  label-for="input-2"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Your Email"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label-for="input-2">
                  <b-form-input id="input-3" v-model="form.subject" required placeholder="Subject"></b-form-input>
                </b-form-group>

                <b-form-textarea id="textarea" v-model="form.text" placeholder="Message" rows="8"></b-form-textarea>

                <b-button type="submit" variant="danger">Send Now</b-button>
              </b-form>
            </div>
          </b-col>
          <b-col>
            <div class="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.8603420433087!2d90.80798331430321!3d23.92999898450114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU1JzQ4LjAiTiA5MMKwNDgnMzYuNiJF!5e0!3m2!1sen!2sbd!4v1578812422073!5m2!1sen!2sbd"
                style="border:0"
                allowfullscreen
              ></iframe>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <Footer />
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";

  import newslatter from "../mixins/newslatter";

  export default {
    name: "Contact",
    mixins: [newslatter],
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        form: {
          name: "",
          email: "",
          subject: "",
          text: ""
        }
      };
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        this.defaultToast();
        this.onReset(evt);
      },
      onReset(evt) {
        console.log("onReset");
        this.form.email = "";
        this.form.name = "";
        this.form.subject = "";
        this.form.text = "";
        // Trick to reset/clear native browser form validation state
        this.show = false;
        this.$nextTick(() => {
          this.show = true;
        });
      }
    }
  };
</script>

<style scoped>
  p {
    color: #585858;
    font-size: 14px;
    line-height: 1.1rem;
  }
  section {
    margin-bottom: 50px;
  }
  .contact-section {
    padding-top: 80px;
    padding-bottom: 0;
    position: relative;
    display: block;
    margin-left: 3vw;
  }
  .contact-info {
    display: flex;
    flex-direction: column;
  }
  .contact-info h3 {
    margin-bottom: 50px;
    font-family: inherit;
    font-weight: 600px;
  }
  .contact-social {
    display: -ms-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 85px;
    padding-top: 20px;
  }
  .contact-social a {
    display: inline-flex;
    width: 32px;
    height: 32px;
    background: #f0f0f0;
    color: black;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-right: 25px;
    font-size: 14px;
    transition: all 0.4s;
  }
  .contact-social a:hover {
    background: #f51167;
    color: white;
  }
  input,
  textarea,
  .form-control,
  .form-control:focus,
  .form-control:active {
    background: #f0f0f0;
    border-radius: 40px;
    width: 100%;
    height: 45px;
    border: none;
    margin-bottom: 17px;
    padding: 0 18px;
    font-size: 14px;
    outline: none;
    transition: none;
    box-shadow: none;
  }
  #textarea {
    padding-top: 16px;
    border-radius: 18px;
    height: 175px;
    margin-bottom: 32px;
  }
  .form-group {
    outline: none;
  }
  .btn-danger {
    display: inline-block;
    border: none;
    font-size: 14px;
    font-weight: 600;
    min-width: 167px;
    padding: 18px 47px 14px;
    border-radius: 50px;
    text-transform: uppercase;
    background: #f51167;
    color: #fff;
    line-height: normal;
    cursor: pointer;
    text-align: center;
  }

  .map {
    position: absolute;
    width: calc(100% - 25px);
    height: 80%;
    right: 0;
    top: 10%;
    background: #ddd;
  }

  .map iframe {
    width: 100%;
    height: 100%;
  }
</style>
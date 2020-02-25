<template>
  <div class="container-fluid">
    <Navbar :navbarproduct="false" />
    <section class="login_area p_100">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="login_title">
            <h2>log in your account</h2>
            <p>Log in to your account to discovery all great features in this Shop.</p>
          </div>
          <form class="login_form row" @submit.prevent="onSubmit">
            <div class="col-lg-12 form-group">
              <input
                class="form-control"
                type="text"
                v-model.trim="$v.email.$model"
                placeholder="User Email"
              />
              <span class="error" v-for="n in emailErrors" v-bind:key="n">{{ n }}</span>
            </div>
            <div class="col-lg-12 form-group">
              <input
                class="form-control"
                type="password"
                v-model.trim="$v.password.$model"
                placeholder="Password"
              />
              <span
                class="error"
                v-if="!$v.password.required  && $v.password.$dirty "
              >Password is required.</span>
              <span
                class="error"
                v-if="!$v.password.minLength"
              >Password must have at least {{ $v.password.$params.minLength.min }} letters.</span>
            </div>
            <div class="col-lg-12 form-group">
              <h4>Don't have an account ?</h4>
              <router-link class="rlink" to="/register">Create Account</router-link>
            </div>
            <div class="col-lg-12 form-group">
              <div class="creat_account">
                <input type="checkbox" id="f-option" name="selector" />
                <label for="f-option">Keep me logged in</label>
                <div class="check"></div>
              </div>
            </div>
            <div class="col-lg-12 form-group">
              <button
                type="submit"
                value="submit"
                class="btn update_btn form-control"
                :disabled="$v.$invalid"
              >Log in</button>
            </div>
          </form>
        </div>
        <div class="col-md-4"></div>
      </div>
      <Footer />
    </section>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";
  import { required, minLength, email, helpers } from "vuelidate/lib/validators";
  import { mapActions } from "vuex";

  export default {
    data() {
      return {
        email: "",
        password: ""
      };
    },
    components: {
      Navbar,
      Footer
    },
    validations: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    },
    methods: {
      ...mapActions(["login"]),
      onSubmit() {
        if (!this.$v.$invalid) {
          let logUser = {
            email: this.email,
            password: this.password
          };
          this.login(logUser)
            .then(response => {
              if (response.data.success) {
                this.$bvToast.toast("Welcome to our shop !!", {
                  title: `Successfully Log In`,
                  variant: "success",
                  solid: true
                });
                this.$router.push("/");
              }
            })
            .catch(e => {
              this.$bvToast.toast("Provide valid Email and Password", {
                title: `Log In Failed`,
                variant: "danger",
                solid: true
              });
            });
        }

        (this.email = ""), (this.password = "");
      }
    },
    computed: {
      emailErrors() {
        const errors = [];
        if (!this.$v.email.$dirty) return errors;
        !this.$v.email.email && errors.push("Must be valid e-mail");
        !this.$v.email.required && errors.push("E-mail is required");
        return errors;
      }
    }
  };
</script>

<style scoped>
  .p_100 {
    padding: 50px 0px;
  }

  .login_title h2 {
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    letter-spacing: 0.45px;
    color: #000;
    padding-bottom: 5px;
  }
  .login_title p {
    color: #999999;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.35px;
    line-height: 26px;
  }
  .login_form .form-group {
    margin-bottom: 30px;
  }
  .login_form .form-group:last-child {
    margin-bottom: 0px;
  }
  .login_form .form-group input {
    border: 1px solid #cccccc;
    border-radius: 0px;
    box-shadow: none;
    outline: none;
    padding: 0px 22px;
    line-height: 50px;
    height: 50px;
  }
  .login_form .form-group input.placeholder {
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    color: #666666;
  }
  .creat_account {
    width: 100%;
    margin: 0px auto;
    position: relative;
    overflow: hidden;
    margin-top: 5px;
  }

  .creat_account label {
    display: block;
    position: relative;
    font-weight: 300;
    font-size: 1.35em;
    padding: 0px 0px 0px 35px;
    height: 15px;
    margin: 0px;
    top: -25px;
    z-index: 9;
    cursor: pointer;
    color: #666666;
    font-size: 13px;
    letter-spacing: 0.25px;
    font-weight: 500;
  }
  .login_form .form-group .creat_account {
    /* display: inline-block; */
    float: left;
    width: auto;
    margin-top: 0px;
    margin-bottom: -10px;
  }
  .login_form .form-group .creat_account input {
    height: auto;
    border: none;
  }
  .login_form .form-group .creat_account .check {
    background: #fff;
  }
  .login_form .update_btn {
    line-height: 27px;
    margin-bottom: 100px;
  }
  .login_form .form-group h4 {
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    color: #d91522;
    font-weight: normal;
    letter-spacing: 0.3px;
    /* display: inline-block; */
    float: left;
    padding-top: 8px;
  }
  .login_form .form-group .rlink {
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    float: right;
    padding-top: 8px;
    color: #000;
  }
  .update_btn {
    background: transparent;
    border: 1px solid #cccccc;
    border-radius: 0px;
    color: #000;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0px 20px;
    line-height: 54px;
    outline: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    -webkit-transition: all 400ms linear 0s;
    -o-transition: all 400ms linear 0s;
    transition: all 400ms linear 0s;
    cursor: pointer;
    font-size: 14px;
    display: inline-block;
  }
  .update_btn:hover {
    background: #333333;
    border-color: #333333;
    color: #fff;
  }
</style>

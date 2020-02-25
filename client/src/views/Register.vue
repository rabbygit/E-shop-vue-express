<template>
  <div class="container-fluid">
    <Navbar :navbarproduct="false" />
    <section class="login_area p_100">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="login_title">
            <h2>Create Account</h2>
            <p>Follow the steps below to create an account.</p>
            <b-alert :show="alert" variant="danger">Please Fill Up the Form carefully!</b-alert>
          </div>
          <form class="login_form row" @submit.prevent="onSubmit">
            <div class="col-lg-6 form-group">
              <input
                class="form-control"
                v-model.trim="$v.name.$model"
                type="text"
                placeholder="Name"
                required
              />
              <span class="error" v-for="n in nameErrors" v-bind:key="n">{{ n }}</span>
            </div>
            <div class="col-lg-6 form-group">
              <input
                class="form-control"
                v-model.trim="$v.username.$model"
                type="text"
                placeholder="User name"
              />
              <span class="error" v-for="n in userNameErrors" v-bind:key="n">{{ n }}</span>
            </div>
            <div class="col-lg-6 form-group">
              <input
                class="form-control"
                v-model.trim="$v.email.$model"
                type="email"
                placeholder="Email"
              />
              <span class="error" v-for="n in emailErrors" v-bind:key="n">{{ n }}</span>
            </div>
            <div class="col-lg-6 form-group">
              <input
                class="form-control"
                v-model.lazy="$v.phonenumber.$model"
                type="text"
                placeholder="Phone"
              />
              <span class="error" v-if="!$v.phonenumber.alpha">Provide a valid phone numebr.</span>
              <span class="error" v-for="n in phoneNumberErrors" v-bind:key="n">{{ n }}</span>
            </div>
            <div class="col-lg-6 form-group">
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
            <div class="col-lg-6 form-group">
              <input
                class="form-control"
                v-model.trim="$v.confirm_password.$model"
                type="password"
                placeholder="Confirm Password"
              />
              <span v-if="$v.confirm_password.$dirty ">
                <span class="error" v-if="!$v.confirm_password.required">Password is required.</span>
                <span
                  class="error"
                  v-if="!$v.confirm_password.sameAsPassword"
                >Passwords must be identical.</span>
              </span>
            </div>
            <div class="col-lg-6 form-group">
              <h4>Have an account ?</h4>
              <router-link class="rlink" to="/login">Log in</router-link>
            </div>
            <div class="col-lg-12 form-group">
              <button
                type="submit"
                value="submit"
                class="btn update_btn form-control"
                :disabled="$v.$invalid"
              >Register</button>
            </div>
          </form>
        </div>
        <div class="col-md-3"></div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";
  import { mapActions } from "vuex";
  import {
    required,
    minLength,
    maxLength,
    sameAs,
    email,
    helpers
  } from "vuelidate/lib/validators";
  const alpha = helpers.regex(
    "alpha",
    /(^(\+88|0088)?(01){1}[56789]{1}(\d){8})$/
  );

  export default {
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        name: "",
        username: "",
        email: "",
        phonenumber: "",
        password: "",
        confirm_password: "",
        alert: false
      };
    },
    validations: {
      name: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email
      },
      username: {
        required,
        minLength: minLength(4)
      },
      phonenumber: {
        required,
        alpha
      },
      password: {
        required,
        minLength: minLength(6)
      },
      confirm_password: {
        required,
        minLength: minLength(6),
        sameAsPassword: sameAs("password")
      }
    },
    computed: {
      nameErrors() {
        const errors = [];
        if (!this.$v.name.$dirty) return errors;
        !this.$v.name.minLength && errors.push("Name must be 4 characters long");
        !this.$v.name.required && errors.push("Name is required.");
        return errors;
      },
      userNameErrors() {
        const errors = [];
        if (!this.$v.username.$dirty) return errors;
        !this.$v.username.minLength &&
          errors.push("User Name must be 4 characters long");
        !this.$v.username.required && errors.push("User Name is required.");
        return errors;
      },
      emailErrors() {
        const errors = [];
        if (!this.$v.email.$dirty) return errors;
        !this.$v.email.email && errors.push("Must be valid e-mail");
        !this.$v.email.required && errors.push("E-mail is required");
        return errors;
      },
      phoneNumberErrors() {
        const errors = [];
        if (!this.$v.phonenumber.$dirty) return errors;
        !this.$v.phonenumber.required && errors.push("Phone number is required");
        return errors;
      }
    },
    methods: {
      ...mapActions(["register"]),
      onSubmit() {
        if (!this.$v.$invalid) {
          let user = {
            name: this.name,
            username: this.username,
            email: this.email,
            phonenumber: this.phonenumber,
            password: this.password
          };

          this.register(user)
            .then(response => {
              if (response.data.success) {
                this.$router.push("login");
              }
            })
            .catch(e => {
              this.alert = true;
            });
        }
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
    font-weight: bold;
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
  .error {
    color: red;
  }
</style>

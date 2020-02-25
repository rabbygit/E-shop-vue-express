<template>
  <div>
    <v-navbar></v-navbar>
    <b-container fluid>
      <b-row>
        <b-col>
          <div>
            <b-tabs
              justified
              lazy
              content-class="mt-5"
              nav-class="bg-dark text-white border-0"
              active-nav-item-class="font-weight-bold border-0 text-uppercase text-danger"
            >
              <b-tab title="Order Details">
                <div></div>
              </b-tab>
              <b-tab title="Profile">
                <div>
                  <h4 class="text-black-50 text-monospace">Personal Information</h4>
                  <div class="row">
                    <div class="col pl-md-0">
                      <div class="p-3 font-weight-bold">First Name</div>
                    </div>
                    <div class="col pl-md-0">
                      <div class="p-3">
                        <span class="mr-2">:</span>
                        {{localUser.name}}
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col pl-md-0">
                      <div class="p-3 font-weight-bold">User Name</div>
                    </div>
                    <div class="col pl-md-0">
                      <div class="p-3">
                        <span class="mr-2">:</span>
                        {{localUser.username}}
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col pl-md-0">
                      <div class="p-3 font-weight-bold">Email</div>
                    </div>
                    <div class="col pl-md-0">
                      <div class="p-3">
                        <span class="mr-2">:</span>
                        {{localUser.email}}
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col pl-md-0">
                      <div class="p-3 font-weight-bold">Phone Number</div>
                    </div>
                    <div class="col pl-md-0">
                      <div class="p-3">
                        <span class="mr-2">:</span>
                        {{localUser.phonenumber}}
                      </div>
                    </div>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    components: {
      "v-navbar": Navbar,
      "v-footer": Footer
    },
    data() {
      return {
        localUser: Object
      };
    },
    created() {
      this.localUser = JSON.parse(localStorage.getItem("user"));
    }
  };
</script>

<style scoped>
</style>
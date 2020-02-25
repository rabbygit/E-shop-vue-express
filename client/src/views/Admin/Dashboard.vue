<template>
  <div id="dashboard">
    <Sidebar :open="sidebarOpen" />
    <div :class=" !sidebarOpen ? 'container-fluid' : 'marginclass' ">
      <b-container fluid>
        <Header @sidebarOpen="forsidebar" />
        <b-breadcrumb :items="crumbs" />
        <b-row>
          <b-col cols="12">
            <router-view />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  import Sidebar from "@/components/Admin/Sidebar.vue";
  import Header from "@/components/Admin/Header.vue";

  export default {
    name: "Dashboard",
    components: {
      Sidebar,
      Header
    },
    data() {
      return {
        sidebarOpen: true
      };
    },
    methods: {
      forsidebar(variable) {
        this.sidebarOpen = variable;
      }
    },
    computed: {
      crumbs: function() {
        let pathArray = this.$route.path.split("/");
        pathArray.shift();
        let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
          breadcrumbArray.push({
            path: path,
            to: breadcrumbArray[idx - 1]
              ? "/" + breadcrumbArray[idx - 1].path + "/" + path
              : "/" + path,
            text: this.$route.matched[idx].meta.breadCrumb || path
          });
          return breadcrumbArray;
        }, []);
        return breadcrumbs;
      }
    }
  };
</script>

<style>
  .col {
    display: contents;
  }
  .marginclass {
    margin-left: 300px;
  }
  .container-fluid {
    padding-left: 15px;
  }
  a.router-link-active {
    color: #6c757d;
  }
  .breadcrumb-item.active {
    color: black;
  }
  .content {
    float: left;
    width: 100%;
    padding: 0 20px;
  }
</style>

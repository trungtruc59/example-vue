<script >
import Nav from "./components/Nav.vue";
import Welcome from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld: Welcome,
    BaseNav: Nav,
  },
  data(){
    return{
      user: [],
    }
  },
  created(){
    fetch("http://localhost:3000/user").then((response) => response.json()).then((data) => (this.user = data));
  },
  mounted(){},
};

</script>

<template>
  <base-nav></base-nav>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


  header {
    display: flex;
    place-items: center;
    margin-bottom: 50px;
    text-align: center;
    width: 100%;
    justify-content: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: block;
    padding: 40px;
    text-align: center;
  }
  nav{display: flex;}
</style>

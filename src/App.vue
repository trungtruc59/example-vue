<script >
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import News from './components/News.vue';

export default {
  name: "App",
  components:{
    HelloWorld,
    TheWelcome,
    News
  },
 
};

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <section>
      <TheWelcome />
    </section>
    <section>
      <News />
    </section>
  </main>
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

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

</style>

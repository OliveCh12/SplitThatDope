<template>
  <div id="app">
    {{/* Header Web Content */}}
    <header>
      <div class="container">
        <h1>Split/<strong>Crush</strong></h1>
      </div>
    </header>
    {{/* Wrapper Web Content */}}
    <div class="wrapper">
      <div class="container">
        <b-tabs>
          <b-tab title="Split" active>
            <Mixing></Mixing>
          </b-tab>
          <b-tab title="Charts">
            <HelloWorld msg="Welcome to Weed Split" />
          </b-tab>
        </b-tabs>
      </div>
    </div>
    {{/* Footer Web Component */}}
    <Footer company="Corporate" author="Olivier Chemla" />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Mixing from './components/Mixing.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld,
      Footer,
      Mixing,
    }
  }
</script>

<style>
  @import 'assets/css/main.css';
</style>
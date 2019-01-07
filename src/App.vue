<template>
  <div id="app">
    {{/* Header Web Content */}}
    <header>
      <div class="container">
        <font-awesome-icon icon="cannabis" size="3x" />
        <h1>Split. That. <strong>Dope</strong></h1>
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
            <Charts></Charts>
          </b-tab>
        </b-tabs>
      </div>
    </div>
    {{/* Footer Web Component */}}
    <Footer company="Split Crush" author="Olivier Chemla" />
  </div>
</template>

<script>
  import Mixing from './components/Mixing.vue'
  import Charts from './components/Charts.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'app',
    components: {
      Charts,
      Footer,
      Mixing,
    }
  }
</script>

<style>
  @import 'assets/css/main.css';
</style>
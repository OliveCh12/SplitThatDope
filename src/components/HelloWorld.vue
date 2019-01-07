<template>
  <div class="container">
    <h3>{{ msg }}</h3>
    <p>So, you need to split your weed. Okay. Here we go !</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>

</style> -->

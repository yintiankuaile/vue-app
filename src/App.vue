<template>
  <div id="app">
    <router-view/>
    <footer-bar class="footer"></footer-bar>
  </div>
</template>

<script>
  import footerBar from './components/footerBar.vue'
  export default {
    name: 'App',
    data(){
        return {

        }
    },
    components: {
      footerBar
    },
    created(){

    }
  }
</script>

<style>

</style>

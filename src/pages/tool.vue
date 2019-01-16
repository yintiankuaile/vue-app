<template>
  <div id="Tool" class="home_container">
    <item-container father-component="tool"></item-container>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import itemContainer from '../components/itemcontainer.vue'
  export default {
    name: 'Tool',
    components: {
      itemContainer
    },
    data (){
      return {

      }
    },
    created(){
      this.selectTab('tool');
    },
    methods:{
      ...mapActions([
        'selectTab'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .home_container{
    color: red;
  }
</style>

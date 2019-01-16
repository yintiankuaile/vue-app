<template>
  <div>
    <item-container father-component = 'item'></item-container>
  </div>
</template>

<script>
  import itemContainer from '../components/itemcontainer.vue'
  export default {
    name: 'Item',
    components: {
      itemContainer
    },
    created() {

    }
  }
</script>

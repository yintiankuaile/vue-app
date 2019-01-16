<template>
  <div v-if="fatherComponent == '测试'">
    这是子组件传递的值（包括prop传递值）
  </div>
</template>

<script>
  export default {
    name: 'componentsProp',
    props: ['fatherComponent'],
    created() {
      if (this.fatherComponent == '测试'){
          console.log("测试成功")
      }
    }
  }
</script>

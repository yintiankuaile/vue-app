<template>
  <div class="page-tabbar">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="main">
        <img slot="icon" :src="img1">
        首页
      </mt-tab-item>
      <mt-tab-item id="tool">
        <img slot="icon" :src="img2">
        应用中心
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" :src="img3">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import img1 from '../assets/main/home.png';
  import img1_selected from '../assets/main/home_selected.png';
  import img2 from '../assets/main/tool.png';
  import img2_selected from '../assets/main/tool_selected.png';
  import img3 from '../assets/main/user.png';
  import img3_selected from '../assets/main/user_selected.png';
  export default {
    name: 'Footer',
    data() {
      return {
        selected: this.$store.state.selectedTab,
        img1: img1,
        img2: img2,
        img3: img3
      };
    },
    watch: {
      'selected': {
        handler(){
          if (this.selected === "main") {
            this.$router.push('/main');
            this.img1 = img1_selected;
            console.log("访问了")
          } else {
            this.img1 = img1;
          }
          if (this.selected === "tool") {
            this.$router.push('/tool');
            this.img2 = img2_selected;
          } else {
            this.img2 = img2;
          }
          if (this.selected === "mine") {
            this.$router.push('/mine');
            this.img3 = img3_selected;
          } else {
            this.img3 = img3;
          }
        }
      }
    },
    created(){

    }
  };
</script>

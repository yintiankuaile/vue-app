<template>
  <div id="Mine" class="bottom">
    <div>***********轮播图***************</div>
    <div>
      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="item in items" :key="item.id">
          <a :href="item.href" rel="external nofollow">
           <img :src="item.url" class="img"/>
           <span class="desc"></span>
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div>**************data初始化显示******************</div>
    <h1>{{massage}}</h1>
    <div>*****涉及到怎么简单使用vuex中的store、action、mutation及其中的mapState, mapActions******</div>
    <h2>{{itemNum}}</h2>
    <button @click="addFun">增加</button>
    <button @click="decrementFun">减少</button>
    <div>mutations与actions关系图</div>
    <img :src="action">
    <div>***************组件及prop传值给子组件***********</div>
    <components-prop father-component="测试"></components-prop>
    <div>***********两种跳转页面的方式***********</div>
    <router-link to="/main">跳转到main</router-link>
    <button @click="go('/tool')">跳转到tool</button>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';
  import componentsProp from '../components/componentsProp.vue'
  import swipe1 from '../assets/mine/swipe1.jpg';
  import swipe2 from '../assets/mine/swipe2.jpg';
  import swipe3 from '../assets/mine/swipe3.jpg';
  import action from '../assets/mine/action.png';
  export default {
    name: 'Mine',
    components: {
      componentsProp
    },
    data(){
      return {
        items: [{
          title: '第一张图片',
          href: 'http://baidu.com',
          url: swipe1
        }, {
          title: '第二张图片',
          href: 'http://baidu.com',
          url: swipe2
        }, {
          title: '第三张图片',
          href: 'http://baidu.com',
          url: swipe3
        }],
        action: action,
        massage: '这是我的'
      }
    },
    computed:mapState([
      'itemNum' //数字第几
    ]),
    created(){
      this.selectTab('mine');
    },
    methods:{
      ...mapActions([
          'selectTab','addNum','decrementNum'
      ]),
      //数字增加
      addFun(){
          //可以传参
        this.addNum();
      },
      //数字减少
      decrementFun(){
        //可以传参
        this.decrementNum();
      },
      //跳转方法
      go(index){
          this.$router.push(index);
      }

    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }
  .mint-swipe {
    height: 218px;
  }
  .desc {
    font-weight: 600;
    opacity: .9;
    padding: 5px;
    height: 20px;
    line-height: 20px;
    width: 100%;
    color: #fff;
    background-color: gray;
    position: absolute;
    bottom: 0;
  }
  .bottom {
    margin-bottom: 55px;
  }
</style>

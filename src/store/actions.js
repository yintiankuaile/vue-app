/**
 * Created by AdminWeb on 2018-8-15.
 */
import {SELECT_TAB} from './mutation-types'
import {ADD_NUM} from './mutation-types'
import {DECREMENT_NUM} from './mutation-types'
import {ADD_ITEMNUMS} from './mutation-types'
import {REMBER_ANSWER} from './mutation-types'

export default {
  //footer赋值
  async selectTab({commit, state}, id){
    commit('SELECT_TAB', id);
  },
  //数字增加
  async addNum({commit, state}){
    commit('ADD_NUM', 1);
  },
  //数字减少
  async decrementNum({commit, state}){
    if (state.itemNum > 1){
      commit('DECREMENT_NUM',1);
    }else {
      alert("已经减少到最小");
    }
  },
  //选择题下一题（同时保存选择的选项id）
  async addChoosedNum({commit, state}, id){
    //记录选择的选项id
    commit('REMBER_ANSWER', id);
    if (state.itemNums < state.itemDetail.length){
      //增加索引，获取下一题的题目选项
      commit('ADD_ITEMNUMS',1);
    }
  },
  //初始化
  async initializeData({commit, state}){
    commit('INITIALIZE_DATA');
  }
}

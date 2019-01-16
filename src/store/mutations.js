/**
 * Created by AdminWeb on 2018-8-15.
 */
import {SELECT_TAB} from './mutation-types'
import {ADD_NUM} from './mutation-types'
import {DECREMENT_NUM} from './mutation-types'
import {ADD_ITEMNUMS} from './mutation-types'
import {REMBER_ANSWER} from './mutation-types'
import {INITIALIZE_DATA} from './mutation-types'

export default {
  //footer选择按钮赋值
  [SELECT_TAB] (state, val) {
    state.selectedTab = val;
  },
  //增加数字
  [ADD_NUM] (state, val) {
    state.itemNum += val;
  },
  //减小数字
  [DECREMENT_NUM] (state, val) {
      state.itemNum -= val;
  },
  //此改变state的mutation方法是为了递增题目索引，获取下一题的题目选项，进而进入下一题
  [ADD_ITEMNUMS] (state, val) {
    state.itemNums += val;
  },
  //记录选择的选项id
  [REMBER_ANSWER] (state, val) {
    state.answerid.push(val);
  },
  //初始化信息
  [INITIALIZE_DATA] (state, val) {
    state.itemNums = 1;
    state.answerid = [];
  }
}

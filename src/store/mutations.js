import {ADD} from './types';
import {DEL} from './types';
import {SHOWLOADING} from './types';
import {HIDELOADING} from './types';
import getters from './getters'

//1定义数据
var state = {
    count:10,
    isOdd:'',
    loading:false
};

//3执行方法
const mutations = {
    [ADD](state){
        state.count++;
    },
    [DEL](state){
        state.count--;
    },
    [SHOWLOADING](state){
        state.loading = true;
    },
    [HIDELOADING](state){
        state.loading = false;
    }
}
export default{
    state,
    mutations,
    getters
}
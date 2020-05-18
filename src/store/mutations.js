import {ADD} from './types';
import {DEL} from './types';
import {SHOWLOADING} from './types';
import {HIDELOADING} from './types';
import {ADDUSERKEY} from './types';
import {ADDUSER} from './types';
import getters from './getters'

//1定义数据
var state = {
    count:10,
    isOdd:'',
    loading:false,
    user:null,
    userKey:null
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
    },
    [ADDUSERKEY](state,data){
        state.userKey = data;
    },
    [ADDUSER](state,data){
        state.user = data;
    },
}
export default{
    state,
    mutations,
    getters
}
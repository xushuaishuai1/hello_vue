import * as types from './types.js'
//2.定义方法,由组件引用
export default{
    add:({
        commit
    }) => {
        commit(types.ADD)
    },
    del:({
        commit
    }) => {
        commit(types.DEL)
    },
    clickOdd:({commit,state}) => {
        if(state.mutations.count%2 == 0){
            commit(types.ADD)
        }
    },
    clickAsync:({commit}) => {
        new Promise((resolve) => {
            setTimeout(function(){
                commit(types.ADD)
            },5000)
        });
    },
    showLoading:({
        commit
    }) => {
        commit(types.SHOWLOADING)
    },
    hideLoading:({
        commit
    }) => {
        commit(types.HIDELOADING)
    },
    addUserKey:({
        commit
    },data) => {
        commit(types.ADDUSERKEY,data)
    },
    addUser:({
        commit
    },data) => {
        commit(types.ADDUSER,data)
    },
}
//4.获取数据，由组件使用
export default{
    getCount(state){
        return state.count;
    },
    judgeOdd(state){
        state.isOdd="奇数";
        if(state.count%2 == 0){
            state.isOdd="偶数";
        }
        return state.isOdd;
    },
    loading(state){
        return state.loading;
    },
    getUserKey(state){
        return state.userKey;
    },
    getUser(state){
        return state.user;
    }
}

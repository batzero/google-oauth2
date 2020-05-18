import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export const store = new Vuex.Store({
// counter 라는 state 속성을 추가
state: {
    counter: 0,
    isInit: false,
    isSignIn: false
},
getters: {
    getCounter(state){
    return state.counter;
    },
    getInit(state){
        return state.isInit;
    },
    getSignIn(state){
        return state.isSignIn;
    },
},
mutations: {
    addCounter(state){
    return state.counter++;
},
    subCounter(state){
    return state.counter--;
},
    setSignIn(state){
        state.isSignIn = true; 
        return state.isSignIn;
},





},
actions : {
    addCounter(context) {
    return context.commit('addCounter');
    },
    setSignIn(context) {
        return context.commit('setSignIn');
        }
}
});


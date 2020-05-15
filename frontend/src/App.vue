<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <a href="https://github.com/guruahn/vue-google-oauth2-front-sample">

    </a>
    <!-- vuex store 예제  --> 
    Parent counter : {{ parentCounter }} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props 로 전달한다. -->
    <!--<child v-bind:passedCounter="counter"></child> -->
    <child></child>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Child from './components/Child.vue'

import { mapGetters, mapMutations , mapActions } from 'vuex'


export default {
  name: "app",
  components: {
    HelloWorld,
    Child

  },
  methods: {
...mapMutations({
//addCounter:'addCounter' ,
  subCounter:'subCounter'
  }),
  ...mapActions({
  addCounter:'addCounter'
  })
  },
  computed: {
  ...mapGetters({
  parentCounter : 'getCounter'
  })
  },


};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.forkme {
  position: fixed;
  right: 0;
  top: 0;
}
</style>

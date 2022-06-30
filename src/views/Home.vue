<template>
<b-container fluid>
  <div id="app">
    
      <img alt="Logo du projet" src="@/assets/logotvm.png">
      <div>
        <input v-on:keyup="search" type="text" v-model="query"> 
      </div>
      
      <b-row class="justify"> 
        <Result 
          v-for="result, index in results" 
          v-bind:key="index" 
          v-bind:searchresult="result"
        />
      </b-row>
      
  </div>
</b-container>
</template>

<script>
import axios from 'axios'
import Result from '@/components/Result.vue'

export default {
  name: 'Home',
  components: {
    Result,
  },
  data: function() {
    return {
      query: "",
      results: null,
      singleshow: null,
    }
  },
  methods: {
    search: function(){
      axios
        .get('https://api.tvmaze.com/search/shows?q='+this.query)
        .then( response => (this.results = response.data) )
    },
  }
}
</script>

<style>
body {
  background-color: rgba(187, 181, 184, 0.37);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow:hidden;
}
img {
  margin-bottom: 20px;
}
.justify {
  justify-content: space-around;
}
</style>
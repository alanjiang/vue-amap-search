<template>
  <div id="app">
   
    <div>
      <search  
      :searchCount="2"
      :autoConfirm="true"
      :useClick="true"
      :width="800"
      :height="340"
      @userInput="handleUserInput"
      @pickedLocation="handlePickedLocation">
    </search>
    </div>
  </div>
</template>

<script>
import search from './components/amapsearch/search.vue'
export default {
  
  methods: {
     handleUserInput(input){
     
     },
     handlePickedLocation(picker){
     
     }
     
  },
  components:
  {
    search
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>

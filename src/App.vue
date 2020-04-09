<template>
  <div id="app">
   
    <div class="map">
     <div class="map-search-box">
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
    
    <div class="map-address">
    
     
     <p><code>用户输入 </code> {{userInput}}</p>
     <p v-show="pickedLocation.location && pickedLocation.location.lat">用户点击确定后的经纬度 {{pickedLocation.location.lat}},{{pickedLocation.location.lng}}</p>
     <p v-show="pickedLocation.location"> {{pickedLocation.name}}</p>
     <p v-show="pickedLocation.address"> {{pickedLocation.address}}</p>
     <p v-show="pickedLocation.district"> {{pickedLocation.district}}</p>
    </div>
    
    
    </div>
  </div>
</template>

<script>
import search from './components/amapsearch/search.vue'
export default {
  name: 'map',
  data() {
    return {
      userInput: '', 
      pickedLocation: {
        location: { lat:0,lng:0 },
        address: '',
        name: '',
        district: ''
      
      }
     }
    
  
  },
  methods: {
  
  
     handleUserInput(input){
        this.userInput = input
     },
     handlePickedLocation(picker){
         this.pickedLocation.location = {'lat':picker.location.lat,'lng':picker.location.lng}
         this.pickedLocation.name = picker.name;
         this.pickedLocation.address = picker.address;
         this.pickedLocation.district = picker.district;
         console.log('picker:'+JSON.stringify(picker))
     }
     
  },
  components:
  {
    search
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-family: Helvetica, sans-serif;
  text-align: center;
  .map
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    .map-search-box
      border-radius: 15px
    .map-address
      font-color: #000
      font-size: 13px
      line-height: 20px
      padding: 10px 15px
    

</style>

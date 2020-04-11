<template>
  <div id="app">
   
    <div class="map">
     <div class="map-search-box">
      <search  
      :searchCount="2"
      :autoConfirm="true"
      :useClick="true"
      :width="width"
      :height="340"
      @userInput="handleUserInput"
      @pickedLocation="handlePickedLocation">
    </search>
    </div>
    
    <div class="map-address">
    
     <p v-show="pLocation.location && pLocation.location.lat">经纬度: ({{pLocation.location.lat}},{{pLocation.location.lng}})</p>
     <p v-show="pLocation.location">地名: {{pLocation.name}}</p>
     <p v-show="pLocation.address">地址： {{pLocation.address}}</p>
     <p v-show="pLocation.province">省级行政区：{{pLocation.province}}</p>
     <p v-show="pLocation.city">市级行政区：{{pLocation.city}}</p>
     <p v-show="pLocation.district">区级行政区：{{pLocation.district}}</p>
      <p v-show="pLocation.citycode">citycode：{{pLocation.citycode}}</p>
      <p v-show="pLocation.adcode">adcode：{{pLocation.adcode}}</p>
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
      width: document.body.clientWidth,
      userInput: '', 
      pLocation: {
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
         this.pLocation.location = {'lat':picker.location.lat,'lng':picker.location.lng}
         this.pLocation.name = picker.name;
         this.userInput = this.pLocation.name
         this.pLocation.address = picker.address;
         if(picker.province){
           this.pLocation.province = picker.province;
         }
         if(picker.city){
           this.pLocation.city = picker.city;
         }
         if(picker.district){
           this.pLocation.district = picker.district;
         }
         if(picker.citycode){
            this.pLocation.citycode = picker.citycode;
         }
         if(picker.adcode){
             this.pLocation.adcode = picker.adcode;
         }
        
        
         
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
    .map-search-box
      border-radius: 15px
    .map-address
      flex: row
      p
        text-align: left
        font-color: #000
        font-size: 13px
        line-height: 20px
        padding: 10px 15px
    

</style>

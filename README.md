# 高德地图组件vue二次开发

> A Vue.js amap 高德地图搜索功能组件,自动完成、提示输入、地图锚点功能。

> 去掉typescript, 便于灵活开发应用


>先安装

npm install

> serve with hot reload at localhost:3030
npm run dev

``` 直接打包到mapmobile下面，以src/index.html作为模板，通过html-webpack-plugin将index.html 写入build.js 后拷贝至mapmobile
  将mapmobile直接上传到服务器的根路径下，访问/mapmobile/index.html即可以发布服务 
```
npm run build


![alt 效果图](https://github.com/alanjiang/vue-amap-search/blob/master/snapshot.png)

> 新增关键词搜索地址列表时，获取行政区
![alt 效果图](https://github.com/alanjiang/vue-amap-search/blob/master/address.png)
> 手机效果
![alt 效果图](https://github.com/alanjiang/vue-amap-search/blob/master/mobile.jpeg)

>地图示例代码App.vue

```
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
    
     
     <p>搜索关键词{{userInput}}</p>
     <p v-show="pickedLocation.location && pickedLocation.location.lat">经纬度 ({{pickedLocation.location.lat}},{{pickedLocation.location.lng}})</p>
     <p v-show="pickedLocation.location">地名: {{pickedLocation.name}}</p>
     <p v-show="pickedLocation.address">地址： {{pickedLocation.address}}</p>
     <p v-show="pickedLocation.district">行政区： {{pickedLocation.district}}</p>
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





```

> 如果对您有用, Buy me a cup of coffee

![alt 鹏哥](https://github.com/alanjiang/vue-amap-search/blob/master/wechat.jpeg)


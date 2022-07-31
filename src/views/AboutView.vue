<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="fun">直接使用未封装axios请求</button>
    <button @click="fun2">直接使用未封装axios请求2</button>
    <button @click="requestfun">封装后</button>
    <button @click="agentRequest">代理请求</button>
  </div>
</template>

<script>

export default {
  data(){
    return{

    }
  },
  methods:{
    fun(){
      //高德接口已经把跨域的问题解决好了，允许跨域
      this.$axios({
        url:`https://restapi.amap.com/v3/weather/weatherInfo?key=5737f6640c7a33f8fb22a952b298946b&city=340104`,
      }).then((res) => {
        console.log(res)
      }).catch((error)=>{
        console.log(error);
      });
    },
    fun2(){
      //自己写的一个接口，不允许跨域，用代理
      this.$axios({
        url:`localhost/allPHPcode/starbuckBackend/menu.php`
      }).then((res) => {
        console.log(res);
      }).catch((error) => {
        console.log(error);
      })
    },
    requestfun(){
      //自己封装的axios，这个接口同样直接允许跨域
      this.$request({
        url:`http://wthrcdn.etouch.cn/weather_mini?city=%E5%BC%8B%E6%B1%9F`,
      }).then((res) => {
        console.log(res);
      }).catch((error)=>{
        console.log(error);
      })
    },
    agentRequest(){
      //也可以用代理
      this.$axios({
        url:`api2/weather_mini?city=%E5%BC%8B%E6%B1%9F`
      }).then((res) => {
        console.log(res);
      }).catch((error) => {
        console.log(error);
      })
    }
  }
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="fun">直接使用未封装axios请求</button>
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
      this.$axios({
        url:`https://restapi.amap.com/v3/weather/weatherInfo?key=5737f6640c7a33f8fb22a952b298946b&city=340104`,
      }).then((res) => {
        console.log(res)
      }).catch((error)=>{
        console.log(error);
      });
    },
    requestfun(){
      this.$request({
        url:`http://wthrcdn.etouch.cn/weather_mini?city=%E5%BC%8B%E6%B1%9F`,
      }).then((res) => {
        console.log(res);
      }).catch((error)=>{
        console.log(error);
      })
    },
    agentRequest(){
      this.$axios({
        url:`/weather_mini?city=%E5%BC%8B%E6%B1%9F`
      }).then((res) => {
        console.log(res);
      }).catch((error) => {
        console.log(error);
      })
    }
  }
}
</script>

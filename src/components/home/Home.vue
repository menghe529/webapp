<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icon :iconsList="iconsList"></home-icon>
        <home-location></home-location>

    </div>
</template>
<script>
import HomeHeader from './pages/header'
import HomeSwiper from './pages/swiper'
import HomeIcon from './pages/icon'
import HomeLocation from './pages/location'

export default {
    data () {
        return {
            swiperList: [],
            iconsList: []
        }
    },
   components: {
       HomeHeader,
       HomeSwiper,
       HomeIcon,
       HomeLocation
   } ,
   mounted(){
       this.$http.get("http://localhost:8080/static/mock/dataHome.json")
       .then((res)=>{
        //    console.log(res.data.data)
        const data = res.data.data[0]
           this.swiperList = data.swiperList
           this.iconsList = data.iconsList

       })
   }
}
</script>
<style scoped>

</style>
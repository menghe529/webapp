<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icon></home-icon>

    </div>
</template>
<script>
import HomeHeader from './pages/header'
import HomeSwiper from './pages/swiper'
import HomeIcon from './pages/icon'

export default {
   components: {
       HomeHeader,
       HomeSwiper,
       HomeIcon
   } 
}
</script>
<style scoped>

</style>
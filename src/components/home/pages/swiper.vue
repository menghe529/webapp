<template>
    <div class='header-swiper'>
        <swiper :options="swiperOptions" >
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>
                        
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    props:['swiperList'],
    data () {
        return {
            
            swiperOptions: {
                loop: true,      
                autoplay: true,
                speed: 1000,          
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }               
            }
        }
    }
}

</script>

<style scoped lang="stylus">

.header-swiper{
    background: #ccc;
    padding-bottom: 45.12%;
    height: 0;
}
.header-swiper img{
    width: 100%;
    height: 3.5rem;

}
.header-swiper >>> .swiper-pagination-bullet-active{
    background: #fff;
}
</style>
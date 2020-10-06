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
    data () {
        return {
            swiperList:[{
                id : "01",
                imgUrl: require("@/assets/img/swiper1.jpg")
            }, {
                id : "02",
                imgUrl: require("@/assets/img/swiper2.jpg")
            }, {
                id : "03",
                imgUrl: require("@/assets/img/swiper3.jpg")
            }],
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
    padding-bottom: 33.3333%;
    height: 0;
}
.header-swiper img{
    width: 100%;
    height: 2.5rem;

}
.header-swiper >>> .swiper-pagination-bullet-active{
    background: #fff;
}
</style>
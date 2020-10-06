<template>
    <div>
        <swiper :options="swiperOptions" >
            <swiper-slide v-for="(item, index) in page" :key="index">
                <div class="icons-item" v-for="icon in item" :key="icon.id">
                    <img :src="icon.iconsUrl" alt="">
                    <p>{{icon.title}}</p>
                </div>
            </swiper-slide>
                        
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

        <!-- <div class="icons-item" v-for="icon in iconsList" :key="icon.id">
                    <img :src="icon.iconsUrl" alt="">
                    <p>{{icon.title}}</p>
                </div> -->
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            swiperOptions: {},
            iconsList: [{
                id: "01",
                iconsUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png",
                title: "景点"
            }, {
                id: "02",
                iconsUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png",
                title: "景点"
            }, {
                id: "03",
                iconsUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png",
                title: "景点"
            }, {
                id: "04",
                iconsUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png",
                title: "景点"
            }, {
                id: "05",
                iconsUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png",
                title: "景点"
            }, {
                id: "06",
                iconsUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png",
                title: "景点"
            }, {
                id: "07",
                iconsUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png",
                title: "景点"
            }, {
                id: "08",
                iconsUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png",
                title: "景点"
            }, {
                id: "09",
                iconsUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png",
                title: "景点"
            }, {
                id: "10",
                iconsUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png",
                title: "景点"
            }]
        }
    },

    computed: {
        page (){
            let pages = []
            console.log(pages)
            this.iconsList.forEach((item, index)=>{
                let idx = Math.floor(index/8)
                if (!pages[idx]) pages[idx] = []
                
                pages[idx].push(item)
               
            })
             return pages
        }
    }

}
</script>

<style scoped>
.icons-item{
    width: 25%;
    height: 0;
    /* background: #ccc; */
    padding-bottom: 25%;
    float: left;

}

.icons-item img{
    width: 1.1rem;
    height: 1.1rem;
    display: block;
    margin: 0 auto;
    padding-top: .2rem;
}
.icons-item p{ 
    font-size: .28rem;
    text-align: center;
    color: #212121;
    padding-top: .1rem;
}
</style>
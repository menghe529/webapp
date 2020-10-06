<template>
    <div class="header">
        <router-link to="/">
            <div class="header-left">
                <span class="iconfont">&#xe658;</span>
            </div>
        </router-link>
        <div class="header-title">
            城市选择
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang='stylus' rel="stylesheet/stylus" scoped>
@import '~css/var.styl'   

.header{
    background: $bgColor
    color: $textColor
    width: 100%;
    line-height: .88rem;
    font-size: .36rem;
    position: relative;
}
.header-left{
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold;
    position: absolute;
}
.header-left span{
    color: #fff;
}
.header-title{
    text-align: center;
    font-size: .3rem;
}
</style>
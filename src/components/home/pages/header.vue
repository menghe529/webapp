<template>
    <div class='header'>
        <div class="header-left">
            <span class="iconfont">&#xe658;</span>
        </div>
        <div class="header-search">
            <span class="iconfont">&#xe63c;</span>                
            输入城市
        </div>
        <div class="header-right">
            北京
            <span class="iconfont">&#xe65c;</span>

        </div>
    </div>
    
</template>
<script>
// @import '../../../assets/css/var.styl'

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
    display: flex;
}
.header-left{
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold;
}
.header-search{
    flex: 1 ;
    background: #fff;
    height: .6rem;
    margin: .15rem 0;
    border-radius: .07rem;
    color: #e4e7ea;
    line-height: .6rem;
    padding-left: .1rem;
    font-size: .28rem;
}
.header-right{
    font-size: .28rem;
    padding: 0 .2rem;
}
</style>
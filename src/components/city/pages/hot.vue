<template>
    <div>
        <div class="hot-title">热门城市</div>
        <ul class='hot-list'>
            <li class='hot-item'>
                北京
            </li>
            <li class='hot-item'>
                北京
            </li>
            <li class='hot-item'>
                北京
            </li>
            <li class='hot-item'>
                北京
            </li>
            <li class='hot-item'>
                北京
            </li>
            <li class='hot-item'>
                北京
            </li>
            <li class='hot-item'>
                北京
            </li>
            <li class='hot-item'>
                北京
            </li>
            <li class='hot-item'>
                北京
            </li>
    </ul>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
.hot-title{
    font-size: .25rem;
    color: #212121;
    padding: .3rem;
}
.hot-list{
    position: relative;
    background: #fff;
    font-size: .28rem;
    overflow:hidden;

}
.hot-list::before{
    content:" ";
    position: absolute;
    height: 100%;
    width: 33.3333%;
    left: 33.3333%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}
.hot-item{
    width: 33.3333%;
    text-align: center;
    height: .9rem;
    line-height: .9rem;
    float: left;
    border-bottom: .02rem solid #ddd;
}
</style>
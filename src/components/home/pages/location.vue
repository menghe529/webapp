<template>
    <div class="location border-top">
        <div class="location-item">
            <span class="iconfont">&#xe641;</span>
            <p>北京大兴</p>
        </div>

        <div class="location-item">
            <span class="iconfont">&#xe64f;</span>
            <p>玩</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.location{
    display:flex;
    padding-top: .3rem;
}
.location .location-item{
    flex: 1;
    font-size: .20rem;
    text-align: center;
    padding-top: .2rem;
}
.border-top::before{
    content:" ";
    position: absolute;
    width: 100%;
    height: 1px;
    border-top:1px solid #ccc;
}
</style>
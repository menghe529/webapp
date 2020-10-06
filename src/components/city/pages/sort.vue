<template>
    <div>
        <div class="sort-title">字母排序</div>
        <ul class='sort-list'>
            <li class='sort-item'>
                a
            </li><li class='sort-item'>
                a
            </li><li class='sort-item'>
                a
            </li><li class='sort-item'>
                a
            </li><li class='sort-item'>
                a
            </li><li class='sort-item'>
                a
            </li><li class='sort-item'>
                a
            </li><li class='sort-item'>
                a
            </li><li class='sort-item'>
                a
            </li><li class='sort-item'>
                a
            </li><li class='sort-item'>
                a
            </li><li class='sort-item'>
                a
            </li><li class='sort-item'>
                a
            </li><li class='sort-item'>
                a
            </li><li class='sort-item'>
                a
            </li>
            
        </ul>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
.sort-title{
    font-size: .25rem;
    color: #212121;
    padding: .3rem;
}
.sort-list{
    position: relative;
    background: #fff;
    font-size: .28rem;
    overflow:hidden;

}
/* .sort-list::before{
    content:" ";
    position: absolute;
    height: 100%;
    width: 33.3333%;
    left: 33.3333%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
} */
.sort-item{
    width: 16.3333%;
    text-align: center;
    height: .9rem;
    line-height: .9rem;
    float: left;
    /* border-bottom: .02rem solid #ddd; */
}
</style>
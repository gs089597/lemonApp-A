<template>
    <div class="navTop">
        <div class="t1" >
            <image class="titleImg" :src="tetle.imgA"></image>
        </div>
        <text  class="t2">{{tetle.text1}}</text>
        <text  class="t3">{{tetle.text2}}</text>

    </div>
</template>

<script>
    export default {
        props:['tetle']
    }
</script>

<style scoped>
    .navTop{
        border-top-width: 45px;
        border-top-style: solid;
        border-top-color: #ffd72d;
        height: 140px;
        background-color: #ffd72d;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
         align-items: center;
        justify-content: space-between;
        font-size: 30px;
    }
    .t1{
        /*margin-left: 20px;*/
        flex: 1;
        text-align:center;
        /*background-color: #333333;*/
        height: 60px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }
    .t2{
        /*width: 320px;*/
        height: 60px;
        background-color: #fff;
        border-radius: 10px;
        flex: 3;
        text-align: center;
        line-height: 60px;
        font-size: 30px;
    }
    .t3{
        flex: 1;
        text-align: center;
        font-size: 30px;
    }
    .titleImg{
        width: 60px;
        height: 60px;
        margin-right:auto ;
        margin-left:auto ;
    }
</style>



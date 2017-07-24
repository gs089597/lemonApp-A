<template>
    <div>
        <div >
            <text class="lemonBtn">sdsdsds</text>

            <!--按钮-->
            <switch class="btn1" checked="true"></switch>
            <textarea class="textarea" placeholder="sdsdsds" @input="oninput" @change="onchange" @focus="onfocus" @blur="onblur" rows="1"></textarea>
        </div>
    </div>
</template>
<script>
    var modal = weex.requireModule('modal')
    export default{
        methods:{
            oninput:function(){
                modal.toast({ message: '开始输入', duration: 1 })
            },
//            输入完成
            onchange:function () {
                modal.toast({ message: '输入完成', duration: 1 })
            },
//            获取焦点
            onfocus: function () {
                modal.toast({ message: '获取焦点', duration: 1 })
            },
            onblur:function () {
                modal.toast({ message: '失去焦点', duration: 1 })
            }
        },
        data(){
            return{
                btn1:true,
            }
        }
    }
</script>
<style scoped>
    .lemonBtn{
        width: 200px;
        height: 60px;
        background-color: #ffd72d;
        border-radius: 10px;
        line-height: 60px;
        text-align: center;
        color: #04091f;
    }
    .btn1{
        color: #ffd72d;
        /*background-color: #ffd72d;*/
        margin-top: 20px;
        margin-bottom: 20px;

    }
    .textarea{
        margin-top: 20px;
        margin-bottom: 20px;
        height: 50px;
        margin-left: 20px;
        border-color: #ffd72d;
        border-style: solid;
        border-width:1px ;
        border-radius: 5px;
    }
</style>
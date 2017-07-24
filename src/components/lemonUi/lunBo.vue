<template>
    <div>
        <slider class="slider" interval="4500" @change="onchange">
            <div class="frame" v-for="img in imageList">
                <image class="image" resize="cover" :src="img.src"></image>
                <!--<text class="title">{{img.title}}</text>-->
            </div>
            <indicator class="indicator"></indicator>
        </slider>
    </div>
</template>

<style>
    .image {
        height: 400px;
    }
    .slider {
        height: 400px;
    }
    .title {
        position: absolute;
        top: 20px;
        left: 20px;
        padding-left: 20px;
        width: 200px;
        color: #FFFFFF;
        font-size: 36px;
        line-height: 60px;
        background-color: rgba(0, 0, 0, 0.3);
    }
    .frame {
        height: 400px;
        position: relative;
    }
    .indicator {
        /*width: 700px;*/
        height: 400px;
        item-color: green;
        item-selected-color: red;
        item-size: 50px;
        position: absolute;
        top: 200px;
        left: 30px;
    }
</style>

<script>
    export default {
        data () {
            return {
                imageList: [
                    { title: 'item A', src: 'http://img.hb.aicdn.com/630778fba7eeaf9d4e05d1eb7336f82b8612f4536e0a2-oIPVWD_fw658'},
                    { title: 'item B', src: 'http://img.hb.aicdn.com/e4f6c171ad1f23b542007c4581463c148ca6299771f37-2ZOYkD_fw658'},
                    { title: 'item C', src: 'http://img.hb.aicdn.com/69e3f6e6c7909f4d018312922f4765a530939316a136b-zk5GRZ_fw658'}
                ]
            }
        },
        methods: {
            onchange (event) {
                console.log('changed:', event.index)
            }
        }
    }
</script>
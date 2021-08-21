<template>
    <div>
        <h1 class="title">我是{{msg}}</h1>
    </div>
</template>

<script>
// 一个vue文件本质上时定义组件的配置对象
export default {
    name:'',
    data(){
        return{
            msg:'单文件组件'
        }
    }
}
</script>

<style>
    h1{
        color: aqua;
        background-color: antiquewhite;
    }
</style>
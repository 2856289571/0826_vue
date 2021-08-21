// import Vue from 'vue/dist/vue.esm.js';   // 用第一种渲染方式需要导入这个，这个文件才配有解析器
import Vue from 'vue';      // 默认导入的vue不配有解析器
import App from './App.vue';

// 第一种渲染方式 
// new Vue({
//     el:'#app',
//     components:{
//         // 注册组件
//         App
//     },
//     template:'<App/>'
// })

// 第二种渲染方式 --- 常用这种方式
new Vue({
    el:"#app",
    // render函数会自动寻找解析器，所以使用该方式可以直接默认导入vue即可，而且该方式的文件更小
    render:h => h(App)  
})
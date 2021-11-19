<template>
       <div class="pm-image"  :style='{width,height:_height}'>
           <img :src="src" alt=''  :style="{ objectFit: fit }"  v-if="loadingState" >
           <div class="pm-image__error" v-else>{{_stateText}}</div>
       </div>
</template>
<script>
import {isString} from '~@/utils/types'
export default {
    name: "PmImage",
    props: {
        src: {
            type:String,
            default:''
        },
        fit: String,
        width:{
            type:String | Number,
            default: '200px'
        },
        height:{
            type:String | Number,
            default: '200px'
        },
        lazy:{
            type:Boolean,
            default:false
        },
        // 是否含有加载状态 默认 打开
        stateLoading:{
            type:Boolean,
            default:true
        },
        icon: {
            type: String,
            default: ""
        },
    },
    data(){
        return{
            loadingState:false,
            stateText:'加载中...'
        }
    },
    watch:{
       src:{
           handler(){
               this.stateLoading &&  this.loadImage()
           },
           immediate:true
       }
    },
    computed: {
        _height() {
            if (isString(this.height)) {
                return this.height
            } else {
                return this.height + 'px';
            }
        },
        _width() {
            if (isString(this.width)) {
                return this.width
            } else {
                return this.width + 'px';
            }
        },
        _stateText(){
            if(this.stateLoading){
                return this.stateText
            }else{
                return  '加载失败'
            }
        }
    },
    methods:{
        // 加载状态
        loadImage(){
            const img = new Image();
            img.onload = ()=>{
                this.loadingState = true;
                this.stateText = '加载成功'
            }
            img.onerror = ()=>{
                this.stateText = '加载失败'
            }
            img.src=this.src;
        }
    }

}
</script>

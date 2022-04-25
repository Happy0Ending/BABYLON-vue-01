<template>
    <div id = 'halou'>
        <div @click="changeChild"> 点击切换</div>
        <keep-alive >
            <component :is="comp"></component>
        </keep-alive>
    </div>
</template>
<script lang="ts">
import { Server } from "socket.io";
import { defineComponent } from "vue";
import mittEmit, { mittDataSend } from "../../ts/mitt/mitt";
import { echo } from "../../ts/mitt/mittCallBack";
import info from './info.vue';
import info2 from './info2.vue';
const mitt = mittEmit;
    export default defineComponent({
        data(){
            let  text:string = 'halou';
            return{
                comp:"info"
            }
        },
        methods:{
            changeChild(){
               this.comp = this.comp=='info2'?'info':'info2';
            },
        },
        components:{
            info,
            info2
        }
    })
    // mittMegRec(mitt,'helloWorld',echo)
</script>
<style>
    #halou{
        position: absolute;
        background-color: aqua;
        top: 30%;
    }
</style>
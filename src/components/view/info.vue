<template>
    <div>
        <p @click="changeClick">{{ obj }}</p>
        <p>{{ x }}</p>
        <p>{{ y }}</p>
        <p>{{ z }}</p>
    </div>
</template>
<script lang = 'ts'>import { defineComponent, onMounted, onUnmounted, reactive, toRefs } from "vue"
import mittEmit, { mittDataSend, mittMegRecUI } from "../../ts/mitt/mitt";
import { changePositionCallback } from "./callBack";
const mitt = mittEmit;

    let obj = reactive({
        obj: 'box',
        x: 1,
        y: 2,
        z: 3
    })
export default defineComponent({
    
    setup() {
        onMounted(() => {

        })

        onUnmounted(() => {
            location.reload();
        })

        // const callBack = (data: string) => {
        //     console.log('VueMitt')
        //     if (data) {
        //         let string = data.split(',');
        //         obj.obj = string[0] as string;
        //         obj.x = parseInt(string[1]);
        //         obj.y = parseInt(string[2]);
        //         obj.z = parseInt(string[3]);
        //     }
        // }

        mittMegRecUI(mitt, 'showMeshInfo', changePositionCallback,obj);

        return {
            ...toRefs(obj)
        }
    },
    methods:{
        changeClick(){
            mittDataSend(mitt,'changePosition',obj.obj+',4,5,6')
        }
    },
})


</script>
<style>
</style>
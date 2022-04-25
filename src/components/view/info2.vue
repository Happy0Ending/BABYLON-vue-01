<template>
    <p>{{ obj }}</p>
    <p>x：<input type="text" id="X" v-bind:value="x"  @change="changeX(XInput)" ref="X"></p>
    <p>y：<input type="text" id="Y" v-bind:value="y" @change="changeX(YInput)" ref="Y"></p>
    <p>z：<input type="text" id="Z" v-bind:value="z" @change="changeX(ZInput)" ref="Z"></p>
</template>
<script lang="ts">

import { defineComponent, onMounted, reactive, ref, Ref, toRefs } from "vue";
import mittEmit, { mittDataSend, mittMegRecUI } from "../../ts/mitt/mitt";
import { changePositionCallback } from "./callBack";
const mitt = mittEmit;
let mesh = reactive({
    obj: 'box',
    x: 4,
    y: 5,
    z: 6
});
const domList: any[] = [];
export default defineComponent({
    setup() {
        // const X = 0;
        // const Y = 0;
        // const Z = 0;
        const XInput = ref(null);
        const YInput = ref(null);
        const ZInput = ref(null);
        onMounted(() => {
            // domList.push(X);
            // domList.push(Y);
            // domList.push(Z);
        })
        return {
            ...toRefs(mesh),
            // X,
            // Y,
            // Z,
            XInput,
            YInput,
            ZInput
        }
    },

    methods: {
        changetext() {

        },
        changeX(X: null) {
            let el = X as unknown as HTMLInputElement;
            console.log(el)
            if (el.id === 'X') {
                this.x = Number(el.value);
            } else if (el.id === 'Y') {
                this.y = Number(el.value);
            } else if (el.id === 'Z') {
                this.z = Number(el.value);
            }
            mittDataSend(mitt, 'changePosition', 'box,' + this.x + ',' + this.y + ',' + this.z)
        },

    }
})
mittMegRecUI(mitt, 'showMeshInfo', changePositionCallback, mesh,domList)
</script>
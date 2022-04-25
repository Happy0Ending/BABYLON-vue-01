<template>
</template>
<script lang="ts">
import Vue, { defineComponent, onMounted, onUnmounted, Ref, ref } from 'vue'
import { SceneManager } from '../ts/scene';
export default defineComponent({
    setup(){
        let sceneManager:SceneManager;
        onMounted(()=>{
            sceneManager = new SceneManager();
        })
        onUnmounted(()=>{
            sceneManager.dispose()
        })
    }
})
</script>
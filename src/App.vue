<template>
    <div id="app">
        <span>{{msg}}</span>
        <p class="test">test text</p>
    </div>
</template>
<script>
import Vue from 'vue'
    export default {
        name:'app',
        data(){
            return {
                msg:"hello vue !!"
            }
        },
    }
</script>
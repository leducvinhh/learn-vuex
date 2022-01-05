<template>
    <p class="progress-bar">
        <span class="progressTxt">Progress: {{ totalTodo }}%</span>
        <span :style="{width: totalTodo + '%'}" class="progress-after"></span>
    </p>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Progressbar',
    computed: mapGetters(['totalTodo']),
}
</script>

<style>
.progress-bar {
    padding: 5px;
    text-align: center;
    background: rgb(106, 248, 118);
    color: black;
    position: relative;
    height: 20px;
}

.progress-after {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background: coral;
}

.progressTxt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
}
</style>
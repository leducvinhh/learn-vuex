<template>
    <div class="todo-list">
        <ul v-if="auth.isAuthenticated">
            <li v-for="todo in todos" :key="todo.id">
                {{ todo.title }}
                <ion-icon name="checkmark-done-outline"></ion-icon>
            </li>
        </ul>
        <p v-else style="text-align: center;">Not authorised</p>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'Todos',
    computed: mapState(['todos', 'auth'])
}
</script>

<style>
    .todo-list ul {
        list-style-type: none;
        padding: 0 10px 10px 10px;
    }
    .todo-list li {
        padding: 10px;
        cursor: pointer;
        margin: 10px 0;
        border-radius: 4px;
        background: rgb(240, 240, 240);
        color: black;
    }
</style>
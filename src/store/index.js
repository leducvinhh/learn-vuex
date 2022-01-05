import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeData = {
    state: {
        todos: [
            {id: 1, title: 'Viec 1', completed: true},
            {id: 2, title: 'Viec 2', completed: true},
            {id: 3, title: 'Viec 3', completed: false},
        ],
        auth: {
            isAuthenticated: false,
        }
    },
    getters: {
        doneTodos: state => state.todos.filter(x => x.completed),
        totalTodo: (state, getters) => {
            const doneTodos = getters.doneTodos
            return Math.round(doneTodos.length / state.todos.length * 100)
        }
    },
    mutations: {
        TOGGLE_AUTH(state) {
            state.auth.isAuthenticated = !state.auth.isAuthenticated
        }
    }
}

const store = new Vuex.Store(storeData)

export default store
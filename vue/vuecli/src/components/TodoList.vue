<template>
    <div class="todo-list">
        <h2>{{ category }}</h2>
        <input type="text" v-model="newTodo">
        <button @click="addTodo">입력</button>
        <br>
        <li v-for="todo in todos" :key="todo.id">
        {{ todo.content }}
        <button @click="removeTodo(todo.id)">삭제</button>
        </li>
    </div>
</template>

<script>
export default {
    props: {
        category: {
          type: String,
          required: true
        }
    }, // 하위컴포넌트로 데이터 전송
    data(){
        return {
            todos: [],
            newTodo: '',
        }
    },
    methods: {
        addTodo: function() {
            this.todos.push({
                id: Date.now(),
                content: this.newTodo
            })
            this.newTodo=''
        },
        removeTodo: function(todo_id) {
            this.todos = this.todos.filter(todo => {
                return todo.id !== todo_id
            })
        },
    }
}
</script>

<style lang="">
    /* li {
        color: blue;
    } */
</style>
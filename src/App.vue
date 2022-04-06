<template>
    <div class="app">
      <todo-input></todo-input>
      <todo-list :todo-list=todoStore.todoList></todo-list>
    </div>
</template>

<script setup lang="ts">
  import TodoInput from '@/components/todo-input'
  import TodoList from '@/components/todo-list'
  import {useToDoStore} from '@/store/todo'
  const todoStore = useToDoStore()
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

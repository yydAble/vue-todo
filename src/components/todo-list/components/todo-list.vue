<template>
    <div class="todo-list">
      <todo-item v-for="item in todoList" :key="item.id" :todoItem="item" @finish="toFinish" @remove="toRemove" ></todo-item>
    </div>
</template>

<script lang="ts" setup>
  import TodoItem from './todo-item.vue'
  import TodoListHooks from '../hooks';
  import {defineProps} from 'vue'
  const hooks = TodoListHooks()
  const props = defineProps(['todoList'])
  const todoList = props.todoList
  const toFinish = (id:number)=>{
    hooks.finished(id)
  }
  const toRemove = (id:number)=>{
    hooks.deleteItem(id)
  }
</script>

<style scoped>
  .todo-list{
    width: 600px;
    margin:20px auto;
    background-color:lightgray;
  }
</style>

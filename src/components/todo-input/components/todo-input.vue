<template>
  <div class="todo-input">
    <input class="todo-input-input" type="text" v-model="inputValue">
    <button class="todo-input-btn" @click="handleAdd">add</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TodoInputHooks from './../hooks'
  let inputValue = ref('')
  const todoHook = TodoInputHooks()
  const handleAdd = ()=>{
    // 1.获取输入框的值
    let inputBoxValue = inputValue.value
    // 2.处理值添加到list中
    todoHook.add(inputBoxValue)
    // 3.清空input输入框
    inputValue.value = ''
  }
</script>

<style scoped>
  .todo-input-input{
    width:200px;
    height: 34px;
  }
  .todo-input-btn{
    width:60px;
    height:40px;
    background-color:lightgreen;
    border:none;
    color: #fff;
    border-radius:5px;
    margin-left: 6px;
  }
  
</style>

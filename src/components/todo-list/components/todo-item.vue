<template>
  <div class="todo-item">
        <div class="todo-item-title">{{todoItem.title}}</div>
        <div class="todo-item-action status" @click="handleFinish(todoItem.id)">{{todoItem.isCompleted ? "完成" : "待完成"}}</div>
        <div class="todo-item-action delete" @click="handleRemove(todoItem.id)">删除</div>
  </div>
</template>

<script lang="ts" setup>
// 注释
import {defineProps,defineEmits} from 'vue'
const props = defineProps(['todoItem'])
const todoItem = props.todoItem
const emits = defineEmits(['finish','remove'])
const handleFinish = (id:number):void =>{
  emits('finish',id)
}
const handleRemove = (id:number):void =>{
  emits('remove',id)
}
</script>

<style scoped>
  .todo-item{
    display: flex;
    justify-content:space-between;
    width: 600px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
  }
  .todo-item-title{
    color: #333;
    width:400px;
  }
  .todo-item-action{
    width:50px;
    height:30px;
    margin: 5px auto;
    line-height: 30px;
    background-color: aqua;
    border-radius:5px;
    color: #fff;
  }
  .status{
    background:lightseagreen;
  }
  .delete{
    background:red;
  }
</style>

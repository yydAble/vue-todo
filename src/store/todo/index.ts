import { stat } from "fs";
import { defineStore } from "pinia";
import type { ITodoItem } from "./types";

const findeIndex = (arr:ITodoItem[],value:number)=>{
  return arr.findIndex(item=>item.id===value)
}

export const useToDoStore = defineStore('todo',{
  state:()=>{
    return {
      todoList:[] as ITodoItem[]
    }
  },
  actions:{
    add(todoItem:ITodoItem){
      this.todoList.push(todoItem);
    },
    delete(id:number){
      let index = findeIndex(this.todoList,id)
      this.todoList.splice(index,1)
    },
    finished(id:number){
      let index = findeIndex(this.todoList,id)
      this.todoList[index].isCompleted = true;
    }
  }
})

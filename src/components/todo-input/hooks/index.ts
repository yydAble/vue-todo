import { ITodoItem } from '@/store/todo/types'
import {ITodoInputHooks} from './../types'
import {useToDoStore} from '@/store/todo'

function TodoInputHooks ():ITodoInputHooks{
  function add(title:string){
    const todo:ITodoItem = {
      id:new Date().getTime(),
      title:title,
      isCompleted:false
    }
    const useToDo = useToDoStore()
    useToDo.add(todo)
  }
  return {
    add
  }
}

export default TodoInputHooks

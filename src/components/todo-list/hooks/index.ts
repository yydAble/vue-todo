import {useToDoStore} from '@/store/todo'
function TodoListHooks(){
  const store = useToDoStore()
  function finished(id:number){
    store.finished(id)
  }
  function deleteItem(id: number){
    store.delete(id)
  }
  return {
    finished,
    deleteItem
  }
}

export default TodoListHooks

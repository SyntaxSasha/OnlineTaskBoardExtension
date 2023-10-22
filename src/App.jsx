import { InputForm } from "./InputForm"
import "./styles.css"
import { useEffect, useState } from "react"
import { TodoList } from "./TodoList"



export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    
    return JSON.parse(localValue)
  }) 

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos)) //Storing todos in local storage
  }, [todos])


  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos, { id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id) 
    })
  }


  return (
  <>
  <InputForm onSubmit = {addTodo}/>
  <h1 className = "header">Todo List (1.0.0)</h1>
  <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}
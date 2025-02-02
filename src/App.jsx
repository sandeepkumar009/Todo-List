import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";



function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinised, setShowFinised] = useState(true)

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])


  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinised = () => {
    setShowFinised(!showFinised)
  }

  const handelEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    })
    setTodos(newTodos);
    saveToLS();
  }

  const handelDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    })
    setTodos(newTodos);
    saveToLS();
  }

  const handelSave = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS();
  }

  const handelChange = (e) => {
    setTodo(e.target.value)
  }

  const handelCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  }


  return (
    <>
      <Navbar />
      <div className="container mx-auto lg:w-1/2">
        <div className="red bg-[#ECDFCC] rounded-3xl p-5 m-3 min-h-[90vh]">

          <h1 className='font-bold text-center text-4xl'>iTask - Manage your todos at one place</h1>

          {/* Add a todo */}
          <div className="addTodo my-5 flex flex-col gap-1">
            <h2 className='text-2xl font-bold'>Add a Todo</h2>
            <div className="flex gap-3">
              <input onChange={handelChange} value={todo} type="text" className='w-full px-3 py-1 rounded-lg' />
              <button onClick={handelSave} disabled={todo.length < 3} className='bg-[#697565] text-white hover:bg-[#3C3D37] px-3 py-1 rounded-lg cursor-pointer'>Save</button>
            </div>
          </div>
          <div className="flex gap-2 mb-2 border-b-2 border-b-[#181C14]">
            <input type="checkbox" onChange={toggleFinised} checked={showFinised} name="" id="" />
            <div>Show Finised</div>
          </div>

          {/* Your Todos */}
          <h2 className='text-2xl font-bold'>Your Todos</h2>
          <div className="todos">
            {todos.length === 0 && <div>No Todos to display...</div>}
            {todos.map(item => {
              return (showFinised || !item.isCompleted) && <div key={item.id} className="todo flex justify-between items-center mt-2">
                <div className="flex gap-5">
                  <input name={item.id} onChange={handelCheckbox} type="checkbox" checked={item.isCompleted} id="" />
                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                </div>
                <div className="buttons flex">
                  <button onClick={(e) => { handelEdit(e, item.id) }} className='bg-[#697565] text-white hover:bg-[#3C3D37] px-3 py-1 rounded-lg ml-2'><FaEdit />
                  </button>
                  <button onClick={(e) => { handelDelete(e, item.id) }} className='bg-[#697565] text-white hover:bg-[#3C3D37] px-3 py-1 rounded-lg ml-4'><MdDeleteForever />
                  </button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App

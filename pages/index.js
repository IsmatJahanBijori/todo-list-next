import { useState } from "react";

import Swal from "sweetalert2";


export default function Home() {
  const [todo, setToDo] = useState({ title: "", description: "" });
  const addToDo = () => {
    // Check if either title or description is blank
    if (!todo.title.trim() || !todo.description.trim()) {
      Swal.fire({
        text: 'Title and Description cannot be blank',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }
    //if any item gets in local storage
    let toDoS = localStorage.getItem("todoAdd")

    if (toDoS) {

      //takes input as string and covert it into object
      let toDosJson = JSON.parse(toDoS)

      //if there any duplicate item, give error
      if (toDosJson.filter(v => v.title == todo.title).length > 0) {
        Swal.fire({
          text: 'Already Added',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
      
      //else there is no duplicate item, set the item in local storage

      else {
        toDosJson.push(todo)
        //takes input as object and covert it into string
        localStorage.setItem("todoAdd", JSON.stringify(toDosJson))
        Swal.fire({
          text: 'Added Successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        setToDo({ title: "", description: "" })
      }

    }
    else {
      //takes input as object and covert it into string
      localStorage.setItem("todoAdd", JSON.stringify([todo]))
    }
  }

  const onChange = (e) => {
    // e.preventDefault()
    setToDo({ ...todo, [e.target.name]: e.target.value })
  }
  return (

    <div className="container md:px-5 md:py-24 mx-auto flex font-serif">
      <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0 shadow-md">
        <h2 className="text-gray-900 text-lg mb-1 font-bold title-font ">Add To Do</h2>
        <p className="leading-relaxed mb-5 text-gray-600">Stay organized and add a new task to your to-do list!</p>
        <div className="relative mb-4">
          <label for="title" className="leading-7 text-lg ">Title</label>
          <input onChange={onChange} value={todo.title} type="text" id="title" name="title" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label for="description" className="leading-7 text-lg ">Description</label>
          <input onChange={onChange} value={todo.description} type="text" id="description" name="description" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
        </div>
        <button onClick={addToDo} className="text-white w-1/3 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Task</button>
      </div>
    </div>


  )
}

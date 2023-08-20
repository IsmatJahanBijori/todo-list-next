import { useEffect, useState } from "react";
import Calendar from "react-calendar";

import Swal from "sweetalert2";


export default function Home() {
  const [todo, setTodo] = useState({ title: '', description: '', date: '' });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Retrieve todos from local storage
    const storedTodos = localStorage.getItem('TODO');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedData = date.toString()
    setTodo({ ...todo, date: formattedData });
  };

  const addToDo = () => {
    // Check for blank input
    if (!todo.title.trim() || !todo.description.trim()) {
      Swal.fire({
        text: 'Title, description, and date cannot be blank',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    // Check for duplicate todo
    if (todos.some((t) => t.title === todo.title)) {
      Swal.fire({
        text: 'Todo with the same title already exists',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    // Add todo to the list
    setTodos([...todos, todo]);
    Swal.fire({
      text: 'Added Successfully',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    setTodo({ title: '', description: '', date: '' });

    // Store todos in local storage
    localStorage.setItem('TODO', JSON.stringify([...todos, todo]));

  };
  return (

    <div className="container md:px-5 md:py-24 mx-auto flex font-serif">
      <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0 shadow-md">
        <h2 className="text-gray-900 text-lg mb-1 font-bold title-font ">Add To Do</h2>
        <p className="leading-relaxed mb-5 text-gray-600">Stay organized and add a new task to your to-do list!</p>
        <div className="relative mb-4">
          <label htmlFor="title" className="leading-7 text-lg">
            Title
          </label>
          <input
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            value={todo.title}
            type="text"
            id="title"
            name="title"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="description" className="leading-7 text-lg">
            Description
          </label>
          <input
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            value={todo.description}
            type="text"
            id="description"
            name="description"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <input
            onChange={handleDateChange}
            type="text"
            value={new Date(selectedDate).toLocaleDateString()}
            readOnly
            placeholder="Select a date"
            className="p-5 mb-5 border-2"
            name="date"
          />
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
        <button onClick={addToDo} className="text-white w-1/3 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Task</button>
      </div>
    </div>


  )
}

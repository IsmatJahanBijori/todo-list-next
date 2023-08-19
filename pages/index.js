// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import Head from 'next/head'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
      <div className= "container md:px-5 md:py-24 mx-auto flex font-serif">
        <div className= "lg:w-1/2 md:w-1/2 bg-white rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0 shadow-md">
          <h2 className= "text-gray-900 text-lg mb-1 font-bold title-font ">Add To Do</h2>
          <p className= "leading-relaxed mb-5 text-gray-600">Stay organized and add a new task to your to-do list!</p>
          <div className= "relative mb-4">
            <label for="title" className= "leading-7 text-lg ">Title</label>
            <input type="title" id="title" name="title" className= "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className= "relative mb-4">
            <label for="description" className= "leading-7 text-lg ">Description</label>
            <textarea id="description" name="description" className= "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button className= "text-white w-1/3 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Task</button>
        </div>
      </div>

    
  )
}

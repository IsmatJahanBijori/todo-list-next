import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header className="text-gray-600 ">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center font-bold">
                <nav className="flex lg:w-2/5 flex-wrap items-center justify-evenly text-lg">
                    <Link href="/"  className="mr-5 hover:text-gray-900">Home</Link>
                    <Link href="/myTodo"  className="mr-5 hover:text-gray-900">My ToDo</Link>
                    <Link href="/about"  className="mr-5 hover:text-gray-900">About</Link>
                </nav>
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">TaskSync</span>
                </a>
            </div>
        </header>
    )
}

export default Navbar

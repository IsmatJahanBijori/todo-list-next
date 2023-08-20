import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const MyTodo = () => {


  
    const [myToDo, setMyToDo] = useState([])
    useEffect(() => {
        const myToDo = localStorage.getItem("TODO")
        setMyToDo(JSON.parse(myToDo))
    }, [])

    //delete item
    const handleDelete = (title) => {
        // Show a confirmation dialog
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this task!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                // User confirmed the deletion
                const newMyToDo = myToDo.filter((todo) => todo.title !== title);
                localStorage.setItem("TODO", JSON.stringify(newMyToDo));
                setMyToDo(newMyToDo);
                Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // User canceled the deletion
                Swal.fire('Cancelled', 'Your task is safe.', 'error');
            }
        });
    };


    //update item
    const handleUpdate = (title) => {
        Swal.fire({
            title: 'Update Task',
            html: `
            <div class="">
            <input id="newTitle" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 mb-5 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="New Title"  required>
            <textarea id="newDescription" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="New Description" required></textarea>
            <input id="newDate" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 mb-5 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="New Date"  required>
            </div>
          `,
            showCancelButton: true,
            confirmButtonText: 'Update',
            cancelButtonText: 'Cancel',
            preConfirm: () => {
                const newTitle = Swal.getPopup().querySelector('#newTitle').value;
                const newDescription = Swal.getPopup().querySelector('#newDescription').value;
                const newDate = Swal.getPopup().querySelector('#newDate').value;
                if (!newTitle || !newDescription) {
                    Swal.showValidationMessage('Please fill in both fields');
                }
                return { newTitle, newDescription, newDate };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // User confirmed the update
                const { newTitle, newDescription, newDate } = result.value;
                const updatedMyToDo = myToDo.map((todo) =>
                    todo.title === title ? { ...todo, title: newTitle, description: newDescription, date:newDate } : todo
                );
                localStorage.setItem("TODO", JSON.stringify(updatedMyToDo));
                setMyToDo(updatedMyToDo);
                Swal.fire('Updated!', 'Your task has been updated.', 'success');
            }
        });
    };
    
    return (
        <section class="text-gray-600 min-h-screen overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="-my-8 divide-y-2 divide-gray-200">
                    {
                        myToDo.map(item =>
                            <div class="py-8 flex flex-wrap md:flex-nowrap">
                                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col mr-5">
                                    <span class="font-semibold title-font text-gray-700">{item.title}</span>
                                    <span class="mt-1 text-gray-500 text-sm">{item.date}</span>
                                </div>
                                <div class="md:flex-grow">
                                    <p class="leading-relaxed text-2xl font-medium text-gray-900 title-font mb-2">{item.description}</p>
                                </div>
                                <div className='w-full flex flex-col md:flex-row md:w-1/4 '>
                                    <button onClick={() => handleDelete(item.title)} className="text-white w-1/3 mb-5 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-5">Delete</button>
                                    <button onClick={() => handleUpdate(item.title)} className="text-white w-1/3 mb-5 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update</button>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    )
}

export default MyTodo

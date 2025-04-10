import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, deleteTask } from '../app/Store';
import { DeleteIcon } from 'lucide-react';

const Hero = () => {
    const tasks = useSelector((state) => state.task);
    const dispatch = useDispatch();
    const [task, setTask] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(task));
        setTask('');
    }

    const handleDelete = (index) => {
        dispatch(deleteTask(index));
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className='container max-w-lg py-6 px-15 mx-auto bg-cyan-900'>
                <h1 className='text-2xl font-semibold text-white'>To-do-List:</h1>
                <form
                    onSubmit={handleFormSubmit}
                    className='inline-flex items-center border bg-white border-black rounded-3xl p-1 mt-4'
                >
                    <input
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        type="text"
                        name='text'
                        placeholder='add a new task'
                        className='rounded-3xl py-2 px-4 outline-none'
                    />
                    <button className='bg-gray-800 cursor-pointer hover:bg-gray-900 text-white text-sm py-2 px-4 rounded-3xl ml-2'>
                        Add task
                    </button>
                </form>

                <ul className='mt-4 space-y-2'>
                    {
                        tasks.map((CurrTask, index) => (
                            <li className='bg-white p-2 flex items-center justify-between rounded' key={index}>
                                <p>{index}: {CurrTask}</p>
                                <DeleteIcon
                                    className='text-black cursor-pointer hover:text-red-600'
                                    onClick={() => handleDelete(index)}
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Hero;

import React from 'react'

const EditTopicForm = () => {
    return (
        <form className="w-full flex flex-col gap-8 bg-gray-800 p-6">
            <h1 className="text-purple-400 font-medium text-xl">Edit Topic</h1>

            <div className="flex flex-col items-start w-full gap-6">
                <input type="text" className="w-full border text-sm py-3 px-3 rounded-sm outline-none focus:border-purple-400 border-gray-200 bg-transparent" placeholder="Add topic title" />

                <textarea className="w-full border text-sm py-3 px-3 rounded-sm outline-none focus:border-purple-400 border-gray-200 bg-transparent resize-y" rows={5} placeholder="Add topic description..."></textarea>

                <button className="bg-purple-600 text-gray-200 py-2 px-6 rounded-sm border-none outline-none text-sm hover:bg-gray-200 hover:text-purple-600">Update Topic</button>
            </div>
        </form>
    )
}

export default EditTopicForm
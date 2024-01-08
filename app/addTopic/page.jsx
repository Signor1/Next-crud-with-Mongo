"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTopic() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Title and description are required");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description })
            });

            if (res.ok) {
                router.push('/')

            } else {
                throw new Error('Failed to create a topic')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8 bg-gray-800 p-6">
            <h1 className="text-purple-400 font-medium text-xl">Add A New Topic</h1>

            <div className="flex flex-col items-start w-full gap-6">
                <input type="text" className="w-full border text-sm py-3 px-3 rounded-sm outline-none focus:border-purple-400 border-gray-200 bg-transparent" placeholder="Add topic title" onChange={(e) => setTitle(e.target.value)} value={title} />

                <textarea className="w-full border text-sm py-3 px-3 rounded-sm outline-none focus:border-purple-400 border-gray-200 bg-transparent resize-y" rows={5} placeholder="Add topic description..." onChange={(e) => setDescription(e.target.value)} value={description}></textarea>

                <button type="submit" className="bg-purple-600 text-gray-200 py-2 px-6 rounded-sm border-none outline-none text-sm hover:bg-gray-200 hover:text-purple-600">Add Topic</button>
            </div>
        </form>
    )
}
import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'
import { format } from 'date-fns';

//async function for getting the data from the api
const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', { cache: "no-store" });

        if (!res.ok) {
            throw new Error('Failed to fetch topics')
        }
        return res.json();
    } catch (error) {
        console.log(error)
    }
}



const TopicLists = async () => {
    //desturing the data
    const { topics } = await getTopics();

    const formatDate = (data) => {
        const parsedDate = new Date(data);
        const formattedDate = format(parsedDate, "yyyy-MM-dd HH:mm a");
        return formattedDate;
    }

    return (
        <>
            {
                topics.map(topic => (
                    <main className='bg-gray-800 mb-4 rounded-sm flex flex-col' key={topic._id}>
                        <div className='flex justify-between gap-5 p-6 items-start' >
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-purple-400 text-xl font-medium'>{topic.title}</h2>
                                <div className='text-base'>{topic.description}</div>
                            </div>
                            <div className='flex gap-3'>
                                <RemoveBtn />
                                <Link href={`/editTopic/${topic._id}`}>
                                    <HiPencilAlt size={20} />
                                </Link>
                            </div>
                        </div>
                        <div className='flex justify-between bg-purple-600 text-white text-sm items-center px-6 py-3'>
                            <span>Created At: {formatDate(topic.createdAt)}</span>
                            <span>Updated At: {formatDate(topic.updatedAt)}</span>
                        </div>
                    </main>
                ))
            }

        </>
    )
}

export default TopicLists
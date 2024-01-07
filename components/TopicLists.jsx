import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

const TopicLists = () => {
    return (
        <>
            <div className='bg-gray-800 mb-4 p-6 rounded-sm flex justify-between gap-5 items-start'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-purple-400 text-xl font-medium'>Topic</h2>
                    <div className='text-base'>Description</div>
                </div>
                <div className='flex gap-3'>
                    <RemoveBtn />
                    <Link href={`/editTopic/123`}>
                        <HiPencilAlt size={20} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default TopicLists
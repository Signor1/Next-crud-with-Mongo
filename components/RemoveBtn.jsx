'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

const RemoveBtn = ({ id }) => {

    const router = useRouter()

    const removeTopic = async () => {
        const confirmed = confirm("Are you sure ?")

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: "DELETE"
            });

            if (res.ok) {
                router.refresh();
            }
        }
    }

    return (
        <button onClick={removeTopic} type='button' className='text-red-600'>
            <HiOutlineTrash size={20} />
        </button>
    )
}

export default RemoveBtn
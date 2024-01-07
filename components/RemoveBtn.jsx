import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

const RemoveBtn = () => {
    return (
        <button type='button' className='text-red-600'>
            <HiOutlineTrash size={20} />
        </button>
    )
}

export default RemoveBtn
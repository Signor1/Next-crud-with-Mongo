import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <nav className='w-full flex bg-purple-600 justify-between items-center h-16 px-8 mb-12 mt-2'>
            <Link className='text-white font-bold' href={`/`}>CRUD</Link>
            <Link className='bg-gray-200 text-purple-600 px-6 py-2 border-none outline-none text-sm rounded-sm hover:bg-gray-800 hover:text-gray-200' href={`/addTopic`}>Add Topic</Link>
        </nav>
    )
}

export default NavBar
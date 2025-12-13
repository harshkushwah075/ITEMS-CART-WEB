import React from 'react'
import { Search } from 'lucide-react';
const SearchFilter = () => {
  return (
    <div className=''>
      <div className='mb-5 p-5 bg-gray-900 rounded-2xl shadow-xl border border-y-gray-800'>
        <div className='flex items-center border border-gray-700 rounded-xl overflow-hidden focus-within:ring-4 focus-within:ring-orange-600/50 transition duration-300 bg-gray-800'>
          <Search className='text-gray-500 ml-4 w-5 h-5'></Search>
          <input className=' w-full p-4 outline-none text-white bg-gray-800 placeholder-gray-500 text-base font-medium' type="text" name="" id=""placeholder='Search product using name or feature' />
        </div>
      </div>
    </div>
  )
}

export default SearchFilter
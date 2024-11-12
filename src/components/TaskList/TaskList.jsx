import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto py-5 w-full  mt-10 flex items-center just gap-5 flex-nowrap '>
      <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5 '>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>
        A description is a statement or account that conveys the characteristics of someone or something. It can also be a picture in words or a descriptive representation.
           </p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5 '>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>
        A description is a statement or account that conveys the characteristics of someone or something. It can also be a picture in words or a descriptive representation.
           </p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5 '>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>
        A description is a statement or account that conveys the characteristics of someone or something. It can also be a picture in words or a descriptive representation.
           </p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5 '>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>
        A description is a statement or account that conveys the characteristics of someone or something. It can also be a picture in words or a descriptive representation.
           </p>
      </div>
      
      
    </div>
  )
}

export default TaskList

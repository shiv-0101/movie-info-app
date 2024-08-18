import React from 'react'

const Content = () => {
  return (
    <div>
        <div className='w-full flex items-center justify-center pt-7'>
            <input type="text" placeholder='Search movie' className='text-[16px] mr-5 p-2 outline-1 bg-slate-200'/>
            <button>Search</button>
        </div>
    </div>
  )
}

export default Content
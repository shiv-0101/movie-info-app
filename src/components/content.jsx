import React, {useState} from 'react'
import axios from 'axios'
import { apiKey } from '../Api'


const Content = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] =useState({})

  const onSearchHandler = () => {

    if (!searchTerm) {
      return
    }

    axios({
      method:"GET",
      url: `http://www.omdbapi.com/?t=${searchTerm}&&apiKey=${apiKey}`
    }).then (response => {
      setData(response.data)
      console.log(response.data)
    })
  }

  return (
    <div>
        <div className='w-full flex items-center justify-center pt-7'>
            <input 
            type="text" 
            placeholder='Search movie' 
            className='text-[16px] mr-5 p-2 outline-1 border-[1px] border-slate-600 bg-slate-200'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            />
            <button className='border-2 py-2 px-3 border-slate-950 font-semibold' onClick={onSearchHandler}>Search</button>
        </div>

        <div>
          <div>
            <h1>Title: {data.Title}</h1>
            <img src={data.Poster} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Content
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


  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      onSearchHandler();  // Trigger the search action on Enter key press
    }
  };

  return (
    <div>
        <div className='w-full flex items-center justify-center pt-7'>
            <input 
            type="text" 
            placeholder='Search movie' 
            className='text-[16px] mr-5 p-2 outline-1 border-[1px] border-slate-600 bg-slate-200'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onKeyDown={onKeyPressHandler}
            />
            <button className='border-2 py-2 px-3 border-slate-950 font-semibold' onClick={onSearchHandler}>Search</button>
        </div>

        <div className='w-[60%] mx-auto flex justify-center mt-10'>
          <div  className='block gap-8 sm:flex'>
            <img src={data.Poster} alt="" />
            <div className=''>
            <h1 className='text-xl mt-3'> <strong>Title:</strong> {data.Title} ({data.Year})</h1>
            <h3 className='text-[1.15rem] mt-3'> <strong>Rating:</strong> {data.imdbRating} (imdb)</h3>
            <h3 className='text-[1.15rem] mt-3'> <strong>Genre:</strong> {data.Genre}</h3>
            <h3 className='text-[1.15rem] mt-3'> <strong>Cast:</strong> {data.Actors}</h3>
            <p className='mt-3'><strong className='text-[1.15rem]'>Plot: </strong>{data.Plot}</p>
            <h3 className='text-[1.15rem] mt-3'> <strong>Language:</strong> {data.Language}</h3>
            <a href={`https://m.imdb.com/title/${data.imdbID}`} target="_blank" rel='noopener'><button className=' px-7 py-2 mt-6 bg-[#f5c518] font-semibold rounded'>Eplore more on IMDB</button></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Content
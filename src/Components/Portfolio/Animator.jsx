import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Animator = () => {
  const [videos, setVideos] = useState([])
  const data = useLoaderData()
  useEffect(()=>{
    setVideos(data.data)
  }, [data])
  
  return (
    
   <div>
      <div className="gap-7 border-l-[10px] border-r-[10px] h-16 border-blue-950 flex  mt-3 items-center justify-center hover:cursor-pointer bg-gray-900 ">
        <h1 className=" text-white text-center conceptHeader ">Animation</h1>
      </div>
     <div className='grid grid-cols-4 gap-3 mx-3 py-2'>
      
      {
        videos.map((video, index)=>(
          <div key={index}>
            <video id='VideoPlay' className='h-[400px] border-4 border-double rounded-md border-gray-900' src={video} autoPlay controls loop>
            </video>
          </div>
        ))
      }
    </div>
   </div>
  )
}

export default Animator

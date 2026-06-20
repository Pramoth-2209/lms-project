import { useEffect, useState } from "react"
import { VideoCard } from "../components/VideoCard"

export const Videos = () => {
  const[videodata,setVideoData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/student_Video")
    .then(res=>res.json())
    .then(data=>{
      // console.log("the api response: ",data);
      setVideoData(data)
    })
    .catch((x)=>console.log(x))
  },[])
  console.log("it is video data"+videodata);
  
  
  return (
    <>
    {videodata.map((data)=>(
      <VideoCard key={data?.video_id} videodata={data}/>
      ))
    }
    </>
  )
}
import { useEffect, useState } from "react"
import { UploadCard } from "../components/UploadCard"
import { SelectPostType } from "../components/SelectPostType";



export const ClassList=()=>{
    const[uploadVideoData,setUploadVideoData]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/Uploadvideos")
        .then(res=>res.json())
        .then(data=>{
            setUploadVideoData(data)
        })
        
        
    },[])

        useEffect(()=>{
            console.log(uploadVideoData);
        },[uploadVideoData])
return(
    <>
    
    {
        uploadVideoData.map((val)=>{
            return(
        <>
                <UploadCard key={val.subject_class_id || index} val={val}/>
                </>
            )

        })
        
     } 
       
    </>
)
}
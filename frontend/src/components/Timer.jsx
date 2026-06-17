import React, { useEffect, useState } from "react";

export const Timer = () => {
    const[time,settime]=useState("");

    useEffect(()=>{
       setInterval(()=>{
            let updatedTime=new Date();
            settime(updatedTime.toLocaleTimeString());
       },1000)
    },[])

    
  return(
    <h2>{time}</h2>
  );
};

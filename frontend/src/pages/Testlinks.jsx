import React, { useEffect, useState } from "react";
import { Timer } from "../components/Timer";
import { Input } from "../components/Input";
// import { title } from "node:process";

export const Testlinks = () => {
  const[val,setval]=useState("");
  const data=[{
    "type":"text",
    "name":"name",
    "placeholder":"enter your name"
  },
  {
    "type":"password",
    "name":"password",
    "placeholder":"enter your password"
  }
]
useEffect(()=>{
  console.log(val);
 
  
},[val])
// useEffect(()=>{
//   document.title="hi";
// },[])

  return (
    <>
        <Timer/>
      {data.map((data)=>{return(
        <Input type={data.type} placeholder={data.placeholder} name={data.name} value={val} onChange={(e)=>setval(e.target.value)} />
      )})}
    {/* <br />    
      <Input name={"input"} type={"text"} placeholder={"type somethings"} value={val} onChange={(e)=>{setval(e.target.value)}} />
      <label>{val}</label> */}

        
    </>
  )
};

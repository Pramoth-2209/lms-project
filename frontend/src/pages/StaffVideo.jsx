import { Upload, UploadIcon } from "lucide-react"
import { StaffClassVideo } from "../components/StaffClassVideo"
import { Button } from "../components/ui/button"
import { NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react"


export const StaffVideo=({params})=>{
    const val=useParams();
    console.log(val);
    const [videoresponse,setVideoResponse]=useState(null)
    
    
    useEffect(()=>{

        const sendData=async ()=>{
        try {
            const response=await fetch(`http://localhost:5000/staff_Class_Video/${val.id}`);
        const result=await response.json();
        console.log(result);
        
        setVideoResponse(result);
        if(response.ok){
            console.log("id hass been sent");
            
        }
        else{
            console.log("cannot send id" + result);
            
        }
        } catch (error) {
            console.log("fetch error: "+error);
            
        }
        };
        sendData()
        
    },[val.id])
    
    return(
        <><div>
            {<NavLink to={`/AddVideo/${val.id}`}> 
           <Button variant="default" size="sm" className="w-full"><UploadIcon/> Upload</Button>
           </NavLink>}
        </div>
        <div>
            <StaffClassVideo result={videoresponse}/>
        </div>
            
        </>
    )
}
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useParams } from "react-router-dom"


export const RegisterAnnouncement=()=>{
  const param=useParams({});
  const sc_id= param.id;
  
  const[RegisterAnnouncementFormData,setRegisterAnnouncementFormData]=useState({
    announcement:"",
    sc_id:sc_id
  })

  const handleChange=(e)=>{
    const{id,value}=e.target;
    setRegisterAnnouncementFormData((preData)=>({
      ...preData,
      [id]:value
    }))
  }

  const handleform=async (e)=>{
    e.preventDefault();
    try {
      const response=await fetch("http://localhost:5000/registerAnnouncement",{
        method:'post',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(RegisterAnnouncementFormData)
      })

      const result=await response.json();
      if(response.ok){
        alert("Announcement Successfully");
        setRegisterAnnouncementFormData({announcement:""});
      }
      else{
        alert("error"+result);
        console.log(result);
        
      }
      
    } catch (error) {
      console.log("error: "+error);
      
    }
  }
    return(
        <>
             
            <div className="w-full min-h-screen flex items-center justify-center bg-zinc-50 p-4">
            <form className="w-full max-w-md p-6 bg-white border rounded-xl shadow-sm space-y-6" onSubmit={handleform}>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Upload Announcemnt</h2>
                <p className="text-sm text-muted-foreground">Fill out the information below.</p>
              </div>

              <FieldGroup className="space-y-4">

                <Field>
                  <FieldLabel htmlFor="form-phone">Announcement</FieldLabel>
                  <Textarea id="announcement" type="text" placeholder="enter message..." value={RegisterAnnouncement.announcement} onChange={handleChange}/>
                </Field>
                

              <div className="flex justify-end gap-3 pt-2">
                <Button type="button" variant="outline">Cancel</Button>
                <Button type="submit">Submit</Button>
              </div>
            </FieldGroup>
            </form>
        </div>
 

        
        </>
    )
}
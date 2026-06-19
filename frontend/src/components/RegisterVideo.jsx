import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { useState } from "react"

export const RegisterVideo=({ssval})=>{
  
    const [registerVideoFormData,setRegisterVideoFormData]=useState({
        subjectClassId:ssval.ssId,
        videoTitle:"",
        videoDescription:"",
        videoUrl:"",
        
    })

    const handleChange=(e)=>{
        const{id,value}=e.target;
        setRegisterVideoFormData((preData)=>({
            ...preData,
            [id]:value
        }))
    }

    const handleform=async (e)=>{
        e.preventDefault();

try {
    

        const response=await fetch("http://localhost:5000/registerVideo",{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(registerVideoFormData)
        })
        

        const result=response.json();
        if(response.ok){
            alert("video uploaded successfully")
            setRegisterVideoFormData({videoTitle:"",videoDescription:"",videoUrl:""});
        }
        else{
            console.log("error:"+result.message);
            
        }
        } catch (error) {
            console.log(error);
            
    }  
    }
    return(
        <>
            <>
            <div className="w-full min-h-screen flex items-center justify-center bg-zinc-50 p-4">
            <form className="w-full max-w-md p-6 bg-white border rounded-xl shadow-sm space-y-6" onSubmit={handleform}>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Upload Video details</h2>
                <p className="text-sm text-muted-foreground">Fill out the information below.</p>
              </div>

              <FieldGroup className="space-y-4">

                {/* <Field>
                <FieldLabel htmlFor="form-name">linker id</FieldLabel>
                <Input id="subjectClassId" type="text" placeholder="e.g., 123" value={registerVideoFormData.subjectClassId} onChange={handleChange}  readOnly/>
              </Field> */}
              <Field>
                <FieldLabel htmlFor="form-name">Video title</FieldLabel>
                <Input id="videoTitle" type="text" placeholder="e.g., React hooks" value={registerVideoFormData.videoTitle} onChange={handleChange} />
              </Field>

              <Field>
                  <FieldLabel htmlFor="form-phone">video description</FieldLabel>
                  {/* <Input id="staffSubjectId" type="text" placeholder="dEP-12" value={studentElectiveFormData.staffSubjectId} onChange={handleChange} /> */}
                  <Textarea id="videoDescription" type="text" placeholder="enter description..." value={registerVideoFormData.videoDescription} onChange={handleChange}/>
                </Field>

                <Field>
                  <FieldLabel htmlFor="form-phone">video url</FieldLabel>
                  <Input id="videoUrl" type="text" placeholder="e.g., https//youtube.com......." value={registerVideoFormData.videoUrl} onChange={handleChange} />
                </Field>
              <div className="flex justify-end gap-3 pt-2">
                <Button type="button" variant="outline">Cancel</Button>
                <Button type="submit">Upload Video</Button>
              </div>
            </FieldGroup>
            </form>
        </div>
        </> 
        </>
    )
}
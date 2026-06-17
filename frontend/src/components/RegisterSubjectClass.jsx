import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export const RegisterSubjectClass=()=>{
    const [subjectClassFormData,setSubjectclassFormData]=useState({
        classId:"",
        staffSubjectId:""
    })

    const handleChange=(e)=>{
        const{id,value}=e.target;
        setSubjectclassFormData((preData)=>({
            ...preData,
            [id]:value
        }))
    }

    const handleform=async (e)=>{
        e.preventDefault();
        try {
            const response=await fetch("http://localhost:5000/registerSubjectClass",{
                method:"post",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(subjectClassFormData)
            })

            const result=await response.json();

            if(response.ok){
                alert("suject to class has been registered");
                setSubjectclassFormData({classId:"",staffSubjectId:""})
            }
            else{
                alert(error);
                console.log(error);
                
                
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
                <h2 className="text-xl font-semibold tracking-tight">Register Subject-Class</h2>
                <p className="text-sm text-muted-foreground">Fill out the information below.</p>
              </div>

              <FieldGroup className="space-y-4">
              <Field>
                <FieldLabel htmlFor="form-name">Class Id</FieldLabel>
                <Input id="classId" type="text" placeholder="e.g., 123" value={subjectClassFormData.classId} onChange={handleChange} />
              </Field>

              <Field>
                  <FieldLabel htmlFor="form-phone">Staff-Subject Id</FieldLabel>
                  <Input id="staffSubjectId" type="text" placeholder="dEP-12" value={subjectClassFormData.staffSubjectId} onChange={handleChange} />
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
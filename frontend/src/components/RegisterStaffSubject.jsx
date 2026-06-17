import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export const RegisterStaffSubject=()=>{
    const[staffSubjectFormData,setStaffSubjectFormData]=useState({
        staffId:"",
        subjectId:""
    })

    const handleChange=(e)=>{
        const{id,value}=e.target;
        setStaffSubjectFormData((preData)=>({
            ...preData,
            [id]:value
        }))
    }

    const handleform=async (e)=>{
        e.preventDefault();
        // console.log(staffSubjectFormData);
        

        try {
            const response=await fetch("http://localhost:5000/regiStaffSubject",{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(staffSubjectFormData)
        })
        const result=await response.json();

        if(response.ok){
            alert("staff to subject has been allcocated");
            setStaffSubjectFormData({subjectId:"",staffId:""});
        }
        else{
            alert("fetch error: "+result.message);
        }
        } catch (error) {
            console.log("error :"+error);
            alert(error)
            
        }
        
    }
    
    return(
        <>
            <div className="w-full min-h-screen flex items-center justify-center bg-zinc-50 p-4">
            <form className="w-full max-w-md p-6 bg-white border rounded-xl shadow-sm space-y-6" onSubmit={handleform}>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Register Staff-Subject</h2>
                <p className="text-sm text-muted-foreground">Fill out the information below.</p>
              </div>

              <FieldGroup className="space-y-4">
              <Field>
                <FieldLabel htmlFor="form-name">Staff Id</FieldLabel>
                <Input id="staffId" type="text" placeholder="e.g., 123" value={staffSubjectFormData.staffId} onChange={handleChange} />
              </Field>

              <Field>
                  <FieldLabel htmlFor="form-phone">Subject Id</FieldLabel>
                  <Input id="subjectId" type="text" placeholder="dEP-12" value={staffSubjectFormData.subjectId} onChange={handleChange} />
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
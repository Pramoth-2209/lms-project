import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export const RegisterStaffs=()=>{
    const [staffsFormData,setstaffsFormData]=useState({
        userId:"",
        departmentId:"",
        position:""
    })

    const handleChange=(e)=>{
        const{id,value}=e.target;
        setstaffsFormData((preData)=>({
            ...preData,
            [id]:value  
        }))
    }

    const handleform=async(e)=>{
        e.preventDefault();
        // console.log(staffsFormData);
        
        try {
            const response=await fetch("http://localhost:5000/registerStaff",{
                method:"post",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(staffsFormData)
            })
            const result=await response.json();
            if(response.ok){
                alert("staff registered successfully");
                setstaffsFormData({userId:"",departmentId:"",position:""});
            }
            else{
                alert("error: "+result.message);
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }
    return(
        <>
            <div className="w-full min-h-screen flex items-center justify-center bg-zinc-50 p-4">
            <form className="w-full max-w-md p-6 bg-white border rounded-xl shadow-sm space-y-6" onSubmit={handleform}>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Register Staff</h2>
                <p className="text-sm text-muted-foreground">Fill out the information below.</p>
              </div>

              <FieldGroup className="space-y-4">
              <Field>
                <FieldLabel htmlFor="form-name">User id</FieldLabel>
                <Input id="userId" type="text" placeholder="e.g., 123" value={staffsFormData.userId} onChange={handleChange} />
              </Field>

              <Field>
                  <FieldLabel htmlFor="form-phone">Department id</FieldLabel>
                  <Input id="departmentId" type="text" placeholder="dEP-12" value={staffsFormData.departmentId} onChange={handleChange} />
                </Field>

                <Field>
                  <FieldLabel htmlFor="form-phone">Position</FieldLabel>
                  <Input id="position" type="text" placeholder="Assistant professor" value={staffsFormData.position} onChange={handleChange} />
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
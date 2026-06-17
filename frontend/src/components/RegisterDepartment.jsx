import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export const RegisterDepartment=()=>{

    const[deptFormData,setdeptFormData]=useState({
        departmentName:"",
        departmentCode:""
    })

    const handleChange=(e)=>{
        const{id,value}=e.target;
        setdeptFormData((preData)=>({
            ...preData,
            [id]:value
        }))

    }


    const handleform=async(e)=>{
        e.preventDefault();
        
        try {
            const response=await fetch("http://localhost:5000/registerDepartment",{
                method:"post",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(deptFormData)
            })
            const result=await response.json()
            if(response.ok){
                alert("department registered successfully")
                setdeptFormData({departmentName:"",departmentCode:""})
            }
            else{
                alert("failed to save"+result.message)
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
                <h2 className="text-xl font-semibold tracking-tight">Register Department</h2>
                <p className="text-sm text-muted-foreground">Fill out the information below.</p>
              </div>

              <FieldGroup className="space-y-4">
              <Field>
                <FieldLabel htmlFor="form-name">Department Name</FieldLabel>
                <Input id="departmentName" type="text" placeholder="e.g., MCA" value={deptFormData.departmentName} onChange={handleChange} />
              </Field>

              <Field>
                  <FieldLabel htmlFor="form-phone">Department code</FieldLabel>
                  <Input id="departmentCode" type="text" placeholder="dEP-12" value={deptFormData.departmentCode} onChange={handleChange} />
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

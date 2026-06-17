import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export const RegisterStudent=()=>{
    const[studentFormData,setStudentFormData]=useState({
        userId:"",
        classId:"",
        batch:"",
        phoneNo:"",
        address:"",
        collegeMailId:""
    })

    const handleChange=(e)=>{
        const{id,value}=e.target;
        setStudentFormData((preData)=>({
            ...preData,
            [id]:value
        }))
    }

    const handleform=async(e)=>{
        e.preventDefault();
        
        try {
            const response=await fetch("http://localhost:5000/registerStudent",{
                method:"post",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(studentFormData)
            })
            const result= await response.json();
            if(response.ok){
                alert("student registered successfully")
                setStudentFormData({userId:"",classId:"",batch:"",phoneNo:"",address:"",collegeMailId:""});
            }
            else{
                alert("problem at fetch function"+ result.message)
            }
            
        } catch (error) {
            console.log(error);
            alert("catch error: "+error);
            
        }
    }


    return(
        <>
            <div className="w-full min-h-screen flex items-center justify-center bg-zinc-50 p-4">
            <form className="w-full max-w-md p-6 bg-white border rounded-xl shadow-sm space-y-6" onSubmit={handleform}>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Register Student</h2>
                <p className="text-sm text-muted-foreground">Fill out the information below.</p>
              </div>

              <FieldGroup className="space-y-4">
              <Field>
                <FieldLabel htmlFor="form-name">User id</FieldLabel>
                <Input id="userId" type="text" placeholder="e.g., 123" value={studentFormData.userId} onChange={handleChange} />
              </Field>

              <Field>
                  <FieldLabel htmlFor="form-phone">Class id</FieldLabel>
                  <Input id="classId" type="text" placeholder="dEP-12" value={studentFormData.classId} onChange={handleChange} />
                </Field>

                <Field>
                  <FieldLabel htmlFor="form-phone">Batch</FieldLabel>
                  <Input id="batch" type="text" placeholder="Assistant professor" value={studentFormData.batch} onChange={handleChange} />
                </Field>

                <Field>
                  <FieldLabel htmlFor="form-phone">Phone no.</FieldLabel>
                  <Input id="phoneNo" type="text" placeholder="Assistant professor" value={studentFormData.phoneNo} onChange={handleChange} />
                </Field>

                <Field>
                  <FieldLabel htmlFor="form-phone">Address</FieldLabel>
                  <Input id="address" type="text" placeholder="Assistant professor" value={studentFormData.address} onChange={handleChange} />
                </Field>

                <Field>
                  <FieldLabel htmlFor="form-phone">College mail id</FieldLabel>
                  <Input id="collegeMailId" type="text" placeholder="Assistant professor" value={studentFormData.collegeMailId} onChange={handleChange} />
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
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export const RegisterSubject=()=>{
    const[SubjectFormData,setSubjectFormData]=useState({
        subjectName:"",
        subjectCode:"",
        semester:"",
        isElective:"",
        departmentId:""
    })

    const handleChange=(e)=>{
        const{id,value,name}=e.target;
        const target=id||name;
        setSubjectFormData((preData)=>({
            ...preData,
            [target]:value
        }))
    }

    const handleform=async (e)=>{
        e.preventDefault();
        // console.log(SubjectFormData);
        

        try {
            const response=await fetch("http://localhost:5000/registerSubject",{
                method:"post",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(SubjectFormData)
            })
            const result=await response.json();

            if(response.ok){
                alert("subject registered successfully");
                setSubjectFormData({subjectName:"",subjectCode:"",semester:"",isElective:"",departmentId:""})
            }else{
                alert("error "+result.message)
            }
            
        } catch (error) {
            console.log("error in fetch "+error);
            alert("error in fetch "+error);
        }
    }
    return(
        <>
            <div className="w-full min-h-screen flex items-center justify-center bg-zinc-50 p-4">
            <form className="w-full max-w-md p-6 bg-white border rounded-xl shadow-sm space-y-6" onSubmit={handleform}>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Register Subject</h2>
                <p className="text-sm text-muted-foreground">Fill out the information below.</p>
              </div>

              <FieldGroup className="space-y-4">
              <Field>
                <FieldLabel htmlFor="form-name">Subject Name</FieldLabel>
                <Input id="subjectName" type="text" placeholder="e.g., 123" value={SubjectFormData.subjectName} onChange={handleChange} />
              </Field>

              <Field>
                  <FieldLabel htmlFor="form-phone">Subject Code</FieldLabel>
                  <Input id="subjectCode" type="text" placeholder="dEP-12" value={SubjectFormData.subjectCode} onChange={handleChange} />
                </Field>

                <Field>
                  <FieldLabel htmlFor="form-phone">Semester</FieldLabel>
                  {/* <Input id="batch" type="text" placeholder="Assistant professor" value={studentFormData.batch} onChange={handleChange} /> */}
                  <select name="semester" id="semester" placeholder="select semester" value={SubjectFormData.semester} onChange={handleChange}>
                    <option value="" disabled>select semester</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </Field>

                <Field>
                  <FieldLabel htmlFor="form-phone">Is Elective</FieldLabel>
                  {/* <Input id="phoneNo" type="text" placeholder="Assistant professor" value={studentFormData.phoneNo} onChange={handleChange} /> */}
                   <select name="isElective" id="isElective" placeholder="" value={SubjectFormData.isElective} onChange={handleChange}>
                    <option value="" disabled>select</option>
                    <option value="1">True</option>
                    <option value="0">False</option>
                  </select>
                </Field>

                <Field>
                  <FieldLabel htmlFor="form-phone">Department id</FieldLabel>
                  <Input id="departmentId" type="text" placeholder="e.g., pgca123" value={SubjectFormData.departmentId} onChange={handleChange} />
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
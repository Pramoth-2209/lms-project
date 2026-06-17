import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Handle } from "vaul"

export const Registerclass = () => {
    const[formData,setFormData]=useState({
        className:"",
        departmentId:"",
        classIncharge:""
    });

    const handleChange=(e)=>{
       let {id,value}= e.target
       setFormData((preData)=>({
            ...preData,
            [id]:value
       }))
    
    }

    const handleform=async(e)=>{
        e.preventDefault()
        try {
            const response=await fetch("http://localhost:5000/registerclass",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(formData)

            })
            const result=response.json();

            if(response.ok){
                alert("class created successfully")
                setFormData({className:"",departmentId:"",classIncharge:""})
            }
            else{
                alert("failed to save: "+result)
            }
            
        } catch (error) {
            alert("network error "+error)
            
        }
        
    }

  return (
    // This outer div ensures the component takes full screen height and width without stretching weirdly
    <div className="w-full min-h-screen flex items-center justify-center bg-zinc-50 p-4">
      <form className="w-full max-w-md p-6 bg-white border rounded-xl shadow-sm space-y-6" onSubmit={handleform}>
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Register Class</h2>
          <p className="text-sm text-muted-foreground">Fill out the information below.</p>
        </div>

        <FieldGroup className="space-y-4">
          <Field>
            <FieldLabel htmlFor="form-name">Class Name</FieldLabel>
            <Input id="className" type="text" placeholder="e.g., MCA" value={formData.className} onChange={handleChange} />
          </Field>

          {/* <Field>
            <FieldLabel htmlFor="form-email">Department Name</FieldLabel>
            <Input id="departmentName" type="text" placeholder="e.g.,Computer Applications" value={formData.departmentName} onChange={handleChange} />
          </Field> */}

          <Field>
              <FieldLabel htmlFor="form-phone">Department id</FieldLabel>
              <Input id="departmentId" type="text" placeholder="dEP-12" value={formData.departmentId} onChange={handleChange} />
            </Field>

          {/* <div className="grid grid-cols-2 gap-4">
            
            <Field>
              <FieldLabel htmlFor="form-country">Country</FieldLabel>
              <Select defaultValue="us">
                <SelectTrigger id="form-country">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </div> */}

          <Field>
            <FieldLabel htmlFor="form-address">Class incharge id</FieldLabel>
            <Input id="classIncharge" type="number" placeholder="e.g.,1234" value={formData.classIncharge} onChange={handleChange}/>
          </Field>

          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline">Cancel</Button>
            <Button type="submit">Submit</Button>
          </div>
        </FieldGroup>
      </form>
    </div>
  )
}
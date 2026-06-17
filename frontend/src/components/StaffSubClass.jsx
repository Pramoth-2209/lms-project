import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"

export const StaffSubClass=()=>{
  const[staffSubClass,setStaffSubClass]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/staffSubjectClass")
    .then(res=>res.json())
    .then(data=>setStaffSubClass(data))
    .catch((error)=>{
      
      console.log(error);
      
    
    })
  },[])
  console.log(staffSubClass);
  
    return(
        <>
        <Table>
            <TableHeader>
              <TableRow>
                 <TableHead>Class</TableHead>
                <TableHead>Subject Name</TableHead>
                <TableHead>Subject Code</TableHead>
                <TableHead>Semester</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
             { staffSubClass.map((subclass)=>(
                <TableRow key={subclass.id} >

                  <TableCell className="font-medium">
                    {subclass.class_name}
                  </TableCell>

                  <TableCell>
                    {subclass.subject_name}
                  </TableCell>
                  <TableCell>
                    {subclass.subject_code}
                  </TableCell>
                   <TableCell>
                    {subclass.semester}
                  </TableCell>             
          </TableRow>
           ))} 
      </TableBody>

      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>
            Total Students: {students.length}
          </TableCell>
        </TableRow>
      </TableFooter> */}

    </Table>
        </>
    )
}
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

export function TableS() {

  const [students, setStudents] = useState([])

  useEffect(() => {

    fetch("http://localhost:5000/staffsandstudents")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  return (

    <Table>

      {/* <TableCaption>
        A list of students.
      </TableCaption> */}

      <TableHeader>
        <TableRow>
          <TableHead>Subject Name</TableHead>
          <TableHead>Staff Name</TableHead>
          <TableHead>Subject Code</TableHead>
          <TableHead>Semester</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>

        {students.map((student) => (

          <TableRow key={student.id}>

            <TableCell className="font-medium">
              {student.subject_name}
              {}
            </TableCell>

            <TableCell>
              {student.staff_name}
            </TableCell>

            <TableCell>
              {student.subject_code}
            </TableCell>

            <TableCell>
              {student.semester}
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

  )
}
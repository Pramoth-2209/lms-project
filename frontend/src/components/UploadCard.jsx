import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { NavLink } from "react-router-dom"

export function UploadCard({val}) {
  return (
    <Card size="sm" className="mx-auto w-full max-w-sm">
      
      <CardContent>
        <p>
            Class: {val.class_name} <br />
            <CardDescription>
                subject name: {val.subject_name} <br />
                subject code: {val.subject_code} <br />
                semester: {val.semester} <br /> 
            </CardDescription>
            
        </p>
      </CardContent>
      <CardFooter>
        <NavLink to={`/StaffVideo/${val.subject_class_id}`}>
        <Button variant="outline" size="sm" className="w-full">
          Open class
        </Button>
        </NavLink>
      </CardFooter>
    </Card>
  )
}

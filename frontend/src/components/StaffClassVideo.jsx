import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Button } from "@/components/ui/button"
import { NavLink } from "react-router-dom";

export const StaffClassVideo = ({result}) => {
    console.log(result);
    
  return (

    <div className="p-10">

      <Card className="w-[350px] h-[240px] flex flex-col">

        <CardHeader className="flex-1">

          <CardTitle>
            <p>
              {result?.video_tittle}
            </p>
          </CardTitle>

        </CardHeader>

        <CardFooter >
          <CardContent >

         
          <CardDescription>
          {result?.video_description}
          </CardDescription>

        </CardContent>
          
          <a
            href={result?.url}
            target="_blank"
            rel="noopener noreferrer"
        >
         <Button>Open</Button>
        </a>
          

        </CardFooter>

      </Card>

    </div>

  )
}
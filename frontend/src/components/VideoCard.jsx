import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Button } from "@/components/ui/button"

export const VideoCard = ({videodata}) => {
  
  
  return (

    <div className="p-10">

      <Card className="w-[350px] h-[240px] flex flex-col">

        <CardHeader className="flex-1">

          <CardTitle>
           <p>
            {videodata?.video_tittle}
          </p>
          </CardTitle>

        </CardHeader>

        <CardFooter >
          <CardContent >

          
          <CardDescription>
            {videodata?.video_description}
          </CardDescription>

        </CardContent>
          <a href={videodata?.url}>
          <Button>
              open
          </Button>
        </a>
        </CardFooter>

      </Card>

    </div>

  )
}
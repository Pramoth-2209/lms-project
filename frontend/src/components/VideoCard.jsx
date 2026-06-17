import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Button } from "@/components/ui/button"

export const VideoCard = () => {
  return (

    <div className="p-10">

      <Card className="w-[350px] h-[240px] flex flex-col">

        <CardHeader className="flex-1">

          <CardTitle>
           thumbnail
          </CardTitle>

        </CardHeader>

        <CardFooter >
          <CardContent >

          <p>
           Unit-1 javaScript
          </p>
          <CardDescription>
            Welcome to your portal
          </CardDescription>

        </CardContent>
          
          <Button>
            Open
          </Button>

        </CardFooter>

      </Card>

    </div>

  )
}
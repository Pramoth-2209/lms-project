// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

// export function Notifycard() {
//   const list=[{
//     head:"java test",
//     body:"Unit 1-3, mcq's, 1,2,5 mark question"
//   },{
//     head:"dbms test",
//     body:"Unit 1-4, mcq's, 1,5 mark question"
//   }]
//   return (
//     list.map((x)=>{
//     <Card size="sm" className="mx-auto w-full max-w-sm m-4 w-92">
//       <CardHeader>
//         <CardTitle>{x.head}</CardTitle>
//         <CardDescription>
//           CIA internal test
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <p>
//           {x.body}
//         </p>
//       </CardContent>
//       <CardFooter>
//         <Button variant="outline" size="sm" className="w-full">
//           Action
//         </Button>
//       </CardFooter>
//     </Card>
//     })
//   )
// }
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Notifycard() {
  const list = [
    {
      id: 1, // Added an ID to use as a unique key
      head: "java test",
      body: "Unit 1-3, mcq's, 1,2,5 mark question"
    },
    {
      id: 2,
      head: "dbms test",
      body: "Unit 1-4, mcq's, 1,5 mark question"
    }
  ]

  return (
    // Wrap the list in a container if you want them stacked nicely
    <div className="flex flex-col gap-4 p-4">
      {list.map((x) => (
        <Card key={x.id} size="sm" className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle>{x.head}</CardTitle>
            <CardDescription>
              CIA internal test
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {x.body}
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              Action
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
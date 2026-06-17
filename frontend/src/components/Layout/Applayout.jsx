// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "./components/AppSidebar"
// import { CardImage } from "./components/CardImage"
// import { Home } from "./pages/Home"

import { Outlet } from "react-router-dom"
import { AppSidebar } from "../AppSidebar"
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar"


 export const Applayout=()=> {

  return (

    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        
        <AppSidebar />
          <SidebarTrigger className="mx-2 mt-2" />
        

        <main className="flex-1 p-5">

          <h1 className="text-3xl font-bold flex ">
               <Outlet/>  
          </h1>

           
        </main>

      </div>

    </SidebarProvider>

  )
}

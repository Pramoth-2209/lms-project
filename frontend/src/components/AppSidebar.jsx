  import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar";
  import { DynamicIcon } from "lucide-react/dynamic";
  import { NavLink, useLocation } from "react-router-dom";
  import { SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from "./ui/sidebar";
  import { Bell, Group, GroupIcon, HomeIcon, Link, Network, StickyNoteOffIcon, User2, Video } from "lucide-react";
  import { DropdownMenu } from "radix-ui";
  import { useEffect, useState } from "react";


  export function AppSidebar() {

    const [navVal,setnavVal]=useState([]);
    const loaction=useLocation();
    useEffect(()=>{
    fetch("http://localhost:5000/navbar")
    .then(res=>res.json())
    .then(val=>setnavVal(val))
    },[])
    return (
      <Sidebar >
        <SidebarHeader asChild>
        <Network/>
        </SidebarHeader>
  {/* className="p-3 space-y-3" */}
        <SidebarContent >
          <SidebarGroup>
            <SidebarMenu>
              {navVal.map((items)=>{
                const isCurrentPage = location.pathname === items.url;
                return(
                <SidebarMenuItem key={items.id}>
                  <SidebarMenuButton  asChild isActive={isCurrentPage}>
                    <NavLink to={items.url}> <DynamicIcon name={items.icon}/> <span>{items.name}</span> </NavLink>
                  </SidebarMenuButton>
                  <SidebarMenuBadge></SidebarMenuBadge>
                </SidebarMenuItem>
                )})}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              
              <SidebarMenuButton>
                <User2/><p>pramoth</p>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    );
  }
  // 
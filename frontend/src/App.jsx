import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Applayout } from "./components/Layout/Applayout";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Videos } from "./pages/Videos";
import { Notifications } from "./pages/Notifications";
import { StaffsandSubjects } from "./pages/StaffsandSubjects";
import { Testlinks } from "./pages/Testlinks";
import { RegiClass } from "./pages/RegiClass";
import { RegiDepartment } from "./pages/RegiDepartment";
import { RegiStaff } from "./pages/RegiStaff";
import { RegiStudent } from "./pages/RegiStudent";
import { RegiSubject } from "./pages/RegiSubject";
import { RegiStaffSubject } from "./pages/RegiStaffSubject";
import { RegiSubjectClass } from "./pages/RegiSubjectClass";
import { RegistudentElective } from "./pages/RegiStudentElective";
import { StaffSubjectClass } from "./pages/StaffSubjectClass";

export const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      
      element:<Applayout/>,
      children:[{
        path:"/home",
        element:<Home/>,
        
      },{
        path:"/register",
        element:<Register/>
      },
      {
        path:"/videos",
        element:<Videos/>
      },
      {
        path:"/testlinks",
        element:<Testlinks/>
      },
      {
        path:"/staffsandsubjects",
        element:<StaffsandSubjects/>
      },
      {
        path:"/notifications",
        element:<Notifications/>
      },
      {
        path:"/staffsubjectclass",
        element:<StaffSubjectClass/>
      },
      {
      path:"/RegiClass",
      element:<RegiClass/>
    }, 
    {
      path:"/RegiDepartment",
      element:<RegiDepartment/>
    },
    {
      path:"/RegiStaff",
      element:<RegiStaff/>
    },
    {
      path:"/RegiStudent",
      element:<RegiStudent/>
    },
    {
      path:"/RegiSubject",
      element:<RegiSubject/>
    },
    {
      path:"/RegiStaffSubject",
      element:<RegiStaffSubject/>
    },{
      path:"/RegiSubjectClass",
      element:<RegiSubjectClass/>
    },{
      path:"/RegiStudentElective",
      element:<RegistudentElective/>
    }
      ]
    },
    
  ])
  return <RouterProvider router={router}/>
  
};



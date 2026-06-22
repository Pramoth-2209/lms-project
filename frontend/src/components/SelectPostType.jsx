// import { InboxIcon } from "lucide-react"

// import {
//   Item,
//   ItemContent,
//   ItemDescription,
//   ItemMedia,
//   ItemTitle,
// } from "@/components/ui/item"

// export const SelectPostType=()=>{
//   return (
//     <div className="flex w-full max-w-md flex-col gap-6">
//       <Item>
//         <ItemMedia variant="icon">
//           <InboxIcon />
//         </ItemMedia>
//         <ItemContent>
//           <ItemTitle>Default Variant</ItemTitle>
//           <ItemDescription>
//             Transparent background with no border.
//           </ItemDescription>
//         </ItemContent>
//       </Item>
//       <Item variant="outline">
//         <ItemMedia variant="icon">
//           <InboxIcon />
//         </ItemMedia>
//         <ItemContent>
//           <ItemTitle>Outline Variant</ItemTitle>
//           <ItemDescription>
//             Outlined style with a visible border.
//           </ItemDescription>
//         </ItemContent>
//       </Item>
//       <Item variant="muted">
//         <ItemMedia variant="icon">
//           <InboxIcon />
//         </ItemMedia>
//         <ItemContent>
//           <ItemTitle>Muted Variant</ItemTitle>
//           <ItemDescription>
//             Muted background for secondary content.
//           </ItemDescription>
//         </ItemContent>
//       </Item>
//     </div>
//   )
// }



import { Link, Megaphone, Video } from "lucide-react"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { NavLink } from "react-router-dom"

export const SelectPostType = ({ onSelect,param }) => {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      
      {/* Option 1: Send Notification */}
      
      <Item 
        variant="outline"
        className=" hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300"
        onClick={() => onSelect('notification')}
      >
        <ItemMedia variant="icon" className=" p-2 rounded-lg">
          <Megaphone size={20} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="font-semibold text-gray-900">Send Notification</ItemTitle>
          <ItemDescription>
            Broadcast urgent notices, circulars, or text announcements to the class.
          </ItemDescription>
        </ItemContent>
      </Item>
      

      {/* Option 2: Upload Video */}
      <NavLink to={`/staffVideo/${param.id}`}>
      <Item 
        variant="outline"
        className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300"
        onClick={() => onSelect('video')}
      >
        <ItemMedia variant="icon" className=" p-2 rounded-lg">
          <Video size={20} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="font-semibold text-gray-900">Upload Video Lecture</ItemTitle>
          <ItemDescription>
            Share new video references or recorded class sessions with your students.
          </ItemDescription>
        </ItemContent>
      </Item>
      </NavLink>

      <Item 
        variant="outline"
        className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300"
        onClick={() => onSelect('video')}
      >
        <ItemMedia variant="icon" className=" p-2 rounded-lg">
          <Link/>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="font-semibold text-gray-900">Upload test links</ItemTitle>
          <ItemDescription>
            Share new video references or recorded class sessions with your students.
          </ItemDescription>
        </ItemContent>
      </Item>

    </div>
  )
}
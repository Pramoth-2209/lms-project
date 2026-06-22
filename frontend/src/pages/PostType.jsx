import { useParams } from "react-router-dom"
import { SelectPostType } from "../components/SelectPostType"

export const PostType=()=>{
    const paramsval=useParams();
    
    return(
        <SelectPostType param={paramsval}/>
    )
}
import { useParams } from "react-router-dom"
import { RegisterVideo } from "../components/RegisterVideo"

export const AddVideo=()=>{
    const param=useParams();

    return(
        <>
            <RegisterVideo ssval={param}/>
        </>
    )
}
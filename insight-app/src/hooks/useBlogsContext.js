import { BlogContext } from "../context/BlogContext";
import { useContext } from "react";

export const useBlogContext = ()=>{
    const context = useContext(BlogContext)

    if(!context){
        throw Error('useBlogsContext must be used inside an BlogsContextProvider')
    }
    return context
}
import { Navigate } from "react-router-dom";
const ProtectedRoute=({children})=>{
    const token=localStorage.getItem("token");

    // The logic behind the following code is if no token take to="/" else just render children which is <Admin/> in this case
    
    if(!token){
        return(<Navigate to="/" replace/>)
    }
    return children;
}

export default ProtectedRoute;
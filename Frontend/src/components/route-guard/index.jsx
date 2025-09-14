import { Fragment } from "react";
import { useLocation, Navigate } from "react-router-dom";


function RouteGuard({authenticated, user, element}){

    const location = useLocation();
    console.log("hii from guard print");
    console.log("next: ",authenticated," ",user," ",element);
    
    

    // sec1: when not authenticated but try to handle other pages
    if(!authenticated && !location.pathname.includes('/auth')){
        return <Navigate to='/auth' />
    }

    // sec2: when acthenticated but not admin still try to control admin featured pages
    if(authenticated && user?.role !== 'instructor' && (location.pathname.includes('instructor') || location.pathname.includes('/auth'))){
        
        return <Navigate to='/home' />
    }

    // sec3: if admin go in courses like normal pages then redirect to admin route 
    if(authenticated && user.role === 'instructor' && !location.pathname.includes('instructor')){
        return <Navigate to="/instructor"/>
    }

    return <Fragment>{element}</Fragment>

}

export default RouteGuard
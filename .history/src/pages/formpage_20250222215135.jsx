import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Form from "../components/form";



function Forms(){
    return(
        <>
        <div>
        <Form />
        <Outlet />
        </div>
        </>
    )

    
}



export default Forms;
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Form from "../components/form";
import { useState, useEffect } from "react";



function Forms(){
    const [step, setStep] = useState(0);


    return(
        <>
        <div>
            <Form />
        </div>
        </>
    )

    
}



export default Forms;
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Form from "../components/form";
import { useState } from "react";



function Forms(){
    const [step, setStep] = useState(0);

    return(
        <>
        <div>
        <section>
            {step === 0 &&
             <Form />}
        </section>
        </div>
        </>
    )

    
}



export default Forms;
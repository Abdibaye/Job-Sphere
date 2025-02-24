import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Form from "../components/form";
import { useState } from "react";



function Forms(){
    const [step, setStep] = useState(1);

    return(
        <>
        <div>
        <section>
            {step === 0 &&
             <Form />}
        </section>
        <section>
            {step === 1 &&
             <Form />}
             <div>another</div>
        </section>
        </div>
        </>
    )

    
}



export default Forms;
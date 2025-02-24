import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Form from "../components/form";
import { useState } from "react";



function Forms(){
    const [step, setStep] = useState(2);

    return(
        <>
        <div>
        <section>
            {step === 0 &&
             <Form />}
        </section>
        <section>
            {step === 2 &&
             <Form />}
             <div>another</div>
        </section>
        </div>
        </>
    )

    
}



export default Forms;
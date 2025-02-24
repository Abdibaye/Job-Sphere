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
             <Form prob1={"Title"} prob2={"Type"} prob3={"Salary"}  />}
        </section>
        <section>
            {step === 1 && <Form prob1={"hello"} /> 
             }
             
        </section>
        </div>
        </>
    )

    
}



export default Forms;
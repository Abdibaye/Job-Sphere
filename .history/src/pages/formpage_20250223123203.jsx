import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Form from "../components/form";
import { useState } from "react";



function Forms(){
    const [step, setStep] = useState(0);

    const [data, setData] = useState({
        name: '',
        placeholder: '',
    });
    
   
    
    updateData(); // Corrected: Call the function with parentheses to execute it
    
    console.log(data.name); // Output: "title"
    
    

    

    // setData("abdi")

    // console.log(data.name);


    return(
        <>
        <div>
        <section>
            {step === 0 &&
             <Form prob1={"Title"} prob2={"Type"} prob3={"Salary"}  />}
        </section>
        </div>
        </>
    )

    
}



export default Forms;
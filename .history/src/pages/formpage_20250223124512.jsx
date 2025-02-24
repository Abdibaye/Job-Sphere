import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Form from "../components/form";
import { useState, useEffect } from "react";



function Forms(){
    const [step, setStep] = useState(0);

    const[data, setData] = useState({
        name: "",
        placeHolder: "",
    });

    // useEffect(() => {
    //     setData(pre => ({
    //         ...pre, name: "title"
    //     }))
    // })

      


    console.log(data)   


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
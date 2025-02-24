import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Form from "../components/form";
import { useState } from "react";



function Forms(){
    const [step, setStep] = useState(0);

    const [data, setData] = useState({
        name: '',
        placeholder: '',
    });

    console.log(data)

    const updateDate = () => {
        setData(previousState => {
          return { ...previousState, name: "title" }
        });
      } 
    updateDate;
    console.log(data.name)

    

    

    // setData("abdi")

    // console.log(data.name);


    return(
        <>
        <div>
        <section>
            {step === 0 &&
             <Form prob1={"Title"} prob2={"Type"} prob3={"Salary"}  />}
        </section>
        <section>
            {step === 1 && <Form prob1={"company"} prob2={"none"} /> 
             }
             
        </section>
        </div>
        </>
    )

    
}



export default Forms;
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Form from "../components/form";
import { useState } from "react";

const [data, setData] = useState({
    name: '',
    placeholder: '',
});



console.log(data); // Output: { name: '', placeholder: '' }
    
const updateData = () => {
    setData(previousState => ({
        ...previousState,
        name: "title"
    }));
}

updateData(); // Corrected: Call the function with parentheses to execute it
    
console.log(data.name); // Output: "title"


function Forms(){
    const [step, setStep] = useState(0);


   
    

    
    

    

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
import React, { useState } from "react";
import './Assets/Digiticalclock.css';
const Digitalclock = ()=>
{
    let time= new Date().toLocaleTimeString();
    const [ctime, setCtime]=useState(time);
    const updatetime =()=>
    {
        let time= new Date().toLocaleTimeString();
        setCtime(time);

    }

    setInterval(updatetime,1000);
    
    return(
        <div className="container">
        <title>Digital Clock</title>
        <h2>Current time is:</h2>
        <h2>{ctime}</h2>
     


        </div>
    )
}
export default  Digitalclock;
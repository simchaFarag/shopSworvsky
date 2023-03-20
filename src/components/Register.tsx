import { useState } from "react";
import { Link } from "react-router-dom";
import '../stylePages/Register.css';
export function Register(){
    const[name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [address,setAddress]=useState("")
    const[mail,setMail]=useState("");
    const[phone,setPhone]=useState("");
    const handelChange=(event:any)=>{
        if(name &&mail && phone && address &&password !=null)
        return(
        event.preventDefault())
        alert(`hello :${name}`)
           return console.log(" eror")
    }
    function ApiRegister(){
        location.href="/Category"
    }
    return(
    <form onSubmit={(e)=>ApiRegister()} className="Register" action="">
   <input type="text" value={name}placeholder="name" onChange={(e)=>setName(e.target.value)}></input><br/>
   <input type="text" value={password} placeholder="password" onChange={(p)=>setPassword(p.target.value)}></input><br/>
   <input type="text" placeholder="address" onChange={(a)=>setAddress(a.target.value)}></input><br/>
   <input type="text" placeholder='gmail' onChange={(m)=>setMail(m.target.value)}></input><br/>
   <input type="text" placeholder='phone' onChange={(p)=>setPhone(p.target.value)}></input><br/>
   <Link to="/Category"><button type="submit">הרשמה</button></Link>
    </form>
    )
}
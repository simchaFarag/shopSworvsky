import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylePages/Login.css';

export function Login() {
  function ApiLogin(){
    location.href="/Category"
  }
  const [name,setName]=useState('')
  const [password,setPassword]=useState()
  return (
    <form onSubmit={()=>ApiLogin} className="mask">
    <div className="Login">
    <input onChange={e=>setName(e.target.value)} type="text" placeholder="name"></input>
    <input type="text" placeholder="password"></input>
    <Link to="/Category"><button type="submit">כניסה</button></Link>
    </div>
    </form>
  );
}

import { Product, productItem } from "./Product";
import "../stylePages/Category.css";
import React, { Children } from "react";
import { create } from "domain";
import productApi from "../products";
import { useState } from "react";




export function Category() {

  const [from,setFrom]=useState("0")
  const [to,setTo]=useState("1000")
  const[product,setProduct]=useState("")
  const products = productApi.getList({from: Number(from), to: Number(to)})
  return (
    <>

    <input value={from} type="number" onChange={event=>setFrom(event.target.value)} ></input>
    <input value={to} type="number" onChange={event=>setTo(event.target.value)}></input>
    <div className="Category">
     { products.map((product:productItem)=><Product name={product.name} img={product.img} price={product.price}  id={product.id}/>)}

    </div>
    </>
  );
}

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../stylePages/Product.css";
import prod from "../components/assets/טבעת.png";
import { CartContext } from "./Context";
export type productItem = {
  name: string;
  img: string;
  price: number;
  id :number;
  count ?: number;
  descripion?: string;
};
export function Product({ name, img, price, id }: productItem) {
  const {addItem, deleteItem, getItemsCount} = useContext(CartContext)
  const count = getItemsCount(id);
  return (
    <div className="ProductType">
      <div className="Pname">{`${name}`}</div>
      <div className="Pimg">
        <img src={`./products/${img}`} width="100"></img>
      </div>
      <div className="Pprice"> {price}</div>
      <div>

        <button onClick={()=>addItem(id)}>+</button>
      
        <button>{count}</button>
        <button disabled={count===0} onClick={()=>deleteItem(id)}>-</button>
      </div>
    </div>
  );
}

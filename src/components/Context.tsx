import { useState, createContext, PropsWithChildren } from "react";
import { Cart } from "./Cart";
import { Category } from "./Category";

type CartContextType = {
  addItem(prodId: number): void;
  getItemsCount(prodId:number):number;
  deleteItem(prodId: number):void
}
export const CartContext=createContext<CartContextType>({
  addItem(){},
  getItemsCount(){return 0},
  deleteItem(){},
})
export function CartContextProvider({children}:PropsWithChildren) {

  const [Cart, setCart] = useState(() => new Map());

  const addItem = (prodId: number) => {
    const currentCount = getItemsCount(prodId);
    setCart(map => {
      const updatedMap = new Map(map)
      updatedMap.set(prodId, currentCount+1);
      return updatedMap;
    })
  }
  const getItemsCount = (prodId: number) => {
    return Cart.get(prodId) || 0
  }
  const deleteItem=(prodId: number)=>{
    const currentCount=getItemsCount(prodId);
    setCart(map=>{
      const updatedMap =new Map(map)
      updatedMap.set(prodId,currentCount-1)
      return updatedMap;
    })
  }
  return <CartContext.Provider value={{addItem, getItemsCount, deleteItem}}>
      {children}
  </CartContext.Provider>
}
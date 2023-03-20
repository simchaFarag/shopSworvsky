import "../stylePages/Cart.css";
import { Product } from "./Product";
export type productToCart = {
  name: string;
  price: number;
  quantity: number;
};

export function Cart() {
  return (
    <>
      {" "}
      <h6 className="productAddCart">עגלה</h6>
      <div className="Cart">
        <Product name="jjuju" img="" price={250} id={1} />
        <Product name="nnmnmn" img="" price={140} id={2}/>
        <Product name="fddddrr" img="" price={200}id={3} />
      </div>
    </>
  );
}

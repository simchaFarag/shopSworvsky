import { productItem } from "./components/Product";

const PRODUCTS: productItem[] = [
  { name: "neclesss", id: 4, img: "1.jpg", price: 250 },
  { name: "neclesss", id: 4, img: "1.jpg", price: 250 },
  { name: "neclesss", id: 4, img: "1.jpg", price: 250 },

  { name: "chain", id: 1, img: "3.jpg", price: 300 },
  { name: "chain", id: 1, img: "3.jpg", price: 300 },
  { name: "chain", id: 1, img: "3.jpg", price: 300 },

  { name: "bracelet", id: 2, img: "1.jpg", price: 450 },  
  { name: "bracelet", id: 2, img: "1.jpg", price: 450 },

  { name: "bracelet ", id: 3, img: "צמיד.png", price: 150 },
  { name: "bracelet", id: 3, img: "צמיד.png", price: 150 },

  { name: "ring", id: 5, img: "טבעת.png", price: 100 },
];

type ProductFilterCount = {
  from?: number;
  to?: number;
};

type ProductFilterName={
    ring?:string,
    bracelet?:string,
    chain?:'',
    neclesss?:''

}

export default {
  getList(productFilter: ProductFilterCount = {}) {
    return PRODUCTS.filter((productItem) => {
      if (
        (productFilter.from != undefined &&
          productFilter.from >= productItem.price) ||
        (productFilter.to != undefined && productFilter.to <= productItem.price)
      ) {
        return false;
      }
      return true;
    });
  },
  getProductsByIds(ids: number[]) {
    const idsSet = new Set(ids);
    this.getList().filter(({ id },) => idsSet.has(id));
  },
};

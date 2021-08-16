import {Product} from "./product"

export type CartItem = {
    product: Product; // 商品
    quantity: number; // 個数
  };

const key = "cartKey"

export function AddToCart(product: Product) : void{

  const existCartItems = localStorage.getItem(key) || "[]"
  const cartItems : CartItem[] = JSON.parse(existCartItems);

  const isItemExist = cartItems.find((isItemExist) => {
    isItemExist.product.id === product.id;
  });

  if (isItemExist){
    isItemExist.quantity += 1;
  }else{
    cartItems.push({product, quantity: 1})
  }
  
  const cartItemsString = JSON.stringify(cartItems);

  localStorage.setItem(key, cartItemsString)

  console.log(localStorage.getItem(key))
}
// カートに追加するデータの型
// import {useRouter} from "next/router"
import {Product, getProduct } from "../lib/product";
import { FC, useEffect, useState} from 'react';
import { Layout } from "../components/Layout";

export type CartItem = {
    product: Product; // 商品
    quantity: number; // 個数
  };


const CartPage: FC = () => {

    // const productID = router.query.id as string;
    // const [product, setProduct ] = useState<Product| null>(null);
    
    // useEffect(
    //     () => {
    //         if(!productID){
    //             return;
    //         }
    //         (async () => {
    //             const prod = await getProduct(productID);
    //             // console.log(prod);
    //             setProduct(prod);
                
    //             localStorage.setItem('myCat', 'Tom');
    //             localStorage.getItem(key)

    //         })();
    //     }, [ productID ]
    // );


     return(
         <Layout>
            <h1>CartPage</h1>
         </Layout>
     );
} 

export default CartPage;
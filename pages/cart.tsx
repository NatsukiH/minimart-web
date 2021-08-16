// カートに追加するデータの型
// import {useRouter} from "next/router"
// import {Product, getProduct} from "../lib/product";
import { FC, useEffect, useState} from 'react';
import { Layout } from "../components/Layout";


const CartPage: FC = () => {

     return(
         <Layout>
            <h1>CartPage</h1>
            <button onClick={() => window.alert("注文しました")}>注文する</button>
         </Layout>
     );
} 

export default CartPage;
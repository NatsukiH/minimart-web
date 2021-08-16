import {useRouter} from "next/router"
import {Product, getProduct } from "../../lib/product";
// import {listProducts} from "../../lib/product"

import { FC, useEffect, useState} from 'react';
import { Layout } from "../../components/Layout";

const ProductPage: FC = () => {

    const router = useRouter();
    const productID = router.query.id as string;
    const [product, setProduct ] = useState<Product| null>(null);
    
    useEffect(
        () => {
            if(!productID){
                return;
            }
            (async () => {
                const prod = await getProduct(productID);
                // console.log(prod);
                setProduct(prod);
            })();
        }, [ productID ]
    );


     return(
         <Layout>
            <h1>{product?.name}</h1>
            <img src={product?.imageUrl}></img>
            <p>{product?.price}</p>
            <p>{product?.description}</p>
         </Layout>
     );
} 

export default ProductPage;

// async function ProductPage(){
//     const router = useRouter();
//     // const product = listProducts();



//     console.log(data.product); //=> product


//     return(
//         <div>
//         <h1>Product ID: {router.query.id}</h1>
//         {/* <h2>{product}</h2> */}
//         </div>
//     ); 
    
// }

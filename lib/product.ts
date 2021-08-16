import { graphqlRequest } from "./graphqlClient";

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

const listProductsQuery = `
  query listProducts {
    products {
      id
      name
      description
      price
      imageUrl
    }
  }
`;

export async function listProducts(): Promise<Product[]> {
  const data = await graphqlRequest({ query: listProductsQuery });
  return data.products;
}

const GetProductQuery = `
  query getProduct($id: ID!) {
    product(id: $id) {
      id
      name
      description
      imageUrl
      price
    }
  }
`;

export async function getProduct(productID :string): Promise<Product> {
  const data = await graphqlRequest({ query: GetProductQuery, variables: {id: productID}});
  return data.product;
}
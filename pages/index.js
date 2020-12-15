import Head from "next/head";

import { Product, ProductRow, ProductColImage, ProductCol } from "../styles/Home";
import products from "../products.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {products.map((product) => (
        <Product key={product.name}>
          <ProductRow>
            <ProductColImage>
              <img src="" />
            </ProductColImage>
            <ProductCol>
              {product.name} {product.price}
            </ProductCol>
          </ProductRow>
        </Product>
      ))}
    </div>
  );
}

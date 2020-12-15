import Head from "next/head";

import { Product, ProductRow, ProductColImage, ProductCol } from "../styles/Home";
import products from "../products.json";
import { fromImageToUrl } from "../utils/urls";

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
              <img src={fromImageToUrl(product.image)} />
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

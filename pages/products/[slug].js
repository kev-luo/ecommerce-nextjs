import Head from "next/head";

import products from "../../products.json";
import { fromImageToUrl } from "../../utils/urls";

const product = products[0];

export default function Product() {
  return (
    <>
      <Head>
        {product.meta_title && (
          <title>{product.meta_title}</title>
        )}
        {product.meta_description && (
          <meta name="description" content={product.meta_description} />
        )}
      </Head>
      <div>
        <h3>{product.name}</h3>
        <img src={fromImageToUrl(product.image)} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <p>{product.content}</p>
      </div>
    </>
  );
}

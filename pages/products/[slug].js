import Head from "next/head";
import axios from "axios";

import { fromImageToUrl, API_URL } from "../../utils/urls";
import { twoDecimals } from "../../utils/format";

export default function Product({ product }) {
  return (
    <>
      <Head>
        {product.meta_title && <title>{product.meta_title}</title>}
        {product.meta_description && (
          <meta name="description" content={product.meta_description} />
        )}
      </Head>
      <div>
        <h3>{product.name}</h3>
        <img src={fromImageToUrl(product.image)} />
        <h3>{product.name}</h3>
        <p>${twoDecimals(product.price)}</p>
        <p>{product.content}</p>
      </div>
    </>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const { data: product } = await axios.get(
    `${API_URL}/products/?slug=${slug}`
  );
  return {
    props: {
      product: product[0]
    },
  };
}
export async function getStaticPaths() {
  const { data: products } = await axios.get(`${API_URL}/products/`);
  return {
    paths: products.map((product) => ({
      params: { slug: String(product.slug) },
    })),
    fallback: false,
  };
}


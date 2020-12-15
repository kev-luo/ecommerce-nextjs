import Head from "next/head";
import Link from "next/link";
import axios from "axios";

import {
  Product,
  ProductRow,
  ProductColImage,
  ProductCol,
} from "../styles/Home";
import { fromImageToUrl, API_URL } from "../utils/urls";
import { twoDecimals } from "../utils/format";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {products.map((product) => (
        <Product key={product.name}>
          <Link href={`/products/${product.slug}`}>
            <a>
              <ProductRow>
                <ProductColImage>
                  <img src={fromImageToUrl(product.image)} alt="jersey"/>
                </ProductColImage>
                <ProductCol>
                  {product.name} ${twoDecimals(product.price)}
                </ProductCol>
              </ProductRow>
            </a>
          </Link>
        </Product>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const {data: products} = await axios.get(`${API_URL}/products/`)
  return {
    props: {
      products
    }
  }
}
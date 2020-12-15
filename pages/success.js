import Head from "next/head";
import { useRouter } from "next/router";

import { useOrder } from "../utils/useOrder"

export default function Success() {
  const router = useRouter();

  const { session_id } = router.query;

  const { order, loading } = useOrder(session_id);

  return (
    <div>
      <Head>
        <title>Purchase Successful</title>
        <meta name="description" content="Thank you for your purchase" />
      </Head>
      <h2>Success</h2>
      {loading && <p>Loading</p>}
      {order && <p>Your order is confirmed with order number: {order.id}</p>}
    </div>
  )
}
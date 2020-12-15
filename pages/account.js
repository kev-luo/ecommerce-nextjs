import Head from "next/head";
import Link from "next/link";

import { useAuthContext } from "../context/AuthContext";
import { useOrders } from "../utils/useOrders";

export default function Account() {
  const { user, logoutUser, getToken } = useAuthContext();

  const { orders, loading } = useOrders(user, getToken);
  
  console.log("Account.render orders", orders);

  if (!user) {
    return (
      <div>
        <h4>Please login or registers</h4>
        <Link href="/">
          <a>Go Back</a>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Account Page</title>
        <meta
          name="description"
          content="The account page, view your orders and logout"
        />
      </Head>
      <h2>Account Page</h2>

      <h3>Your Orders</h3>
      {loading && <p>Loading your orders...</p>}
      {orders.map(order => (
        <div key={order.id}>
          {new Date(order.created_at).toLocaleDateString('en-EN')} {order.product.name} ${order.total} {order.status}
        </div>
      ))}
      <p>Logged in as {user.email}</p>
      <a href="#" onClick={logoutUser}>
        Logout
      </a>
    </div>
  );
}

import Head from "next/head";
import Link from "next/link";

import { useAuthContext } from "../context/AuthContext";

export default function Account() {
  const { user, logoutUser } = useAuthContext();

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
      <a href="#" onClick={logoutUser}>
        Logout
      </a>
    </div>
  );
}

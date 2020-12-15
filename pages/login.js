import { useState } from "react";
import Head from "next/head";

import { useAuthContext } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const { loginUser } = useAuthContext();

  function handleSubmit(e) {
    e.preventDefault();
    loginUser(email);
  }

  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login here to make a purchase" />
      </Head>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="user@email.com"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

import React from 'react'
import { useRouter } from "next/router";

import { Button } from "../styles/BuyButton";
import { useAuthContext } from "../context/AuthContext";

export default function buyButton() {
  const { user } = useAuthContext();
  const router = useRouter();

  const redirectToLogin = () => {
    router.push("/login")
  }

  return (
    <>
      {!user && (
        <Button onClick={redirectToLogin}>
          Purchase
        </Button>
      )}
    </>
  )
}

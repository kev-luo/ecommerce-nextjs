import React from "react";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

import { Button } from "../styles/BuyButton";
import { useAuthContext } from "../context/AuthContext";
import { STRIPE_PK, API_URL } from "../utils/urls";

const stripePromise = loadStripe(STRIPE_PK);

export default function buyButton({ product }) {
  const { user, getToken } = useAuthContext();
  const router = useRouter();

  const redirectToLogin = () => {
    router.push("/login");
  };

  const handlePurchase = async () => {
    const stripe = await stripePromise;
    const token = await getToken();
    const { data: session } = await axios.post(
      `${API_URL}/orders`,
      { product: { id: product.id } },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

  return (
    <>
      {!user && <Button onClick={redirectToLogin}>Login to Purchase</Button>}
      {user && <Button onClick={handlePurchase}>Purchase</Button>}
    </>
  );
}

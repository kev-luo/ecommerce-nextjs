import { useState, useEffect } from "react";
import axios from "axios";

import { API_URL } from "../utils/urls";

export const useOrder = (session_id) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);

      try {
        const { data } = await axios.post(
          `${API_URL}/orders/confirm`,
          { checkout_session: session_id },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setOrder(data);
      } catch (err) {
        setOrder(null);
      }

      setLoading(false);
    };

    fetchOrder();
  }, [session_id]);

  return { order, loading };
};

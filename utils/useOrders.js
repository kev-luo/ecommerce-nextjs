import { useState, useEffect } from "react";
import { API_URL } from "./urls";
import axios from "axios";

export const useOrders = (user, getToken) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async() => {
      if(user) {
        try {
          setLoading(true);
          const token = await getToken();
          const { data } = await axios.get(`${API_URL}/orders`, { 
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
          setOrders(data);
        } catch(err) {
          setOrders([]);
        }
        setLoading(false);
      }
    }
    fetchOrders();
  }, [user])

  return {orders, loading};
}
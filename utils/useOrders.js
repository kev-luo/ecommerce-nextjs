import { useState, useEffect } from "react";
import { API_URL } from "./urls";
import axios from "axios";

export const useOrders = (user, getToken) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async() => {
      if(user) {
        try {
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
      }
    }
    fetchOrders();
  }, [user])

  return orders;
}
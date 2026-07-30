import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { auth, db } from "../firebase/firebase";
import Navbar from "../components/Navbar";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const q = query(
        collection(db, "orders"),
        where("userId", "==", auth.currentUser.uid)
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <p>No Orders Yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} style={styles.card}>
              <h3>Total: ₹{order.total}</h3>

              <p>Status: {order.status}</p>

              <p>Items: {order.items.length}</p>

              {order.items.map((item) => (
                <div key={item.id} style={styles.item}>
                  <strong>{item.title}</strong>

                  <p>
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
  },

  card: {
    background: "#fff",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  item: {
    marginTop: "10px",
    paddingTop: "10px",
    borderTop: "1px solid #ddd",
  },
};

export default Orders;
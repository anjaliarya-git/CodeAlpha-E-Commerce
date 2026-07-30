import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import { db, auth } from "../firebase/firebase";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = async () => {
    try {
      await addDoc(collection(db, "orders"), {
        userId: auth.currentUser.uid,
        items: cart,
        total: total,
        status: "Pending",
        createdAt: new Date(),
      });

      alert("🎉 Order Placed Successfully!");
     clearCart();
      navigate("/orders");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>Checkout</h1>

        <h2>Total Amount : ₹{total}</h2>

        <button
          style={styles.button}
          onClick={placeOrder}
        >
          Place Order
        </button>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "30px",
    background: "#fff",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },

  button: {
    marginTop: "20px",
    width: "100%",
    padding: "15px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "18px",
  },
};

export default Checkout;
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>🛒 My Cart</h1>

        {cart.length === 0 ? (
          <h2>Your Cart is Empty</h2>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} style={styles.card}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={styles.image}
                />

                <div style={{ flex: 1 }}>
                  <h3>{item.title}</h3>

                  <p>{item.category}</p>

                  <h2>₹{item.price}</h2>

                  <p>Quantity : {item.quantity}</p>
                </div>

                <button
                  style={styles.remove}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}

            <h2>Total : ₹{total}</h2>

            <button
              style={styles.checkout}
              onClick={() => navigate("/checkout")}
            >
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "900px",
    margin: "auto",
  },

  card: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
  },

  image: {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  remove: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  checkout: {
    marginTop: "20px",
    width: "100%",
    padding: "15px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default Cart;
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={styles.card}>
      <img
        src={product.image}
        alt={product.title}
        style={styles.image}
      />

      <h3>{product.title}</h3>

      <p style={styles.category}>
        {product.category}
      </p>

      <h2>₹{product.price}</h2>

      <button
        style={styles.button}
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
}

const styles = {
  card: {
    width: "250px",
    padding: "20px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  category: {
    color: "#6b7280",
    margin: "8px 0",
  },

  button: {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default ProductCard;
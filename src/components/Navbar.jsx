import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged Out Successfully");
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🛒 CodeAlpha Store</h2>

      <div style={styles.links}>
        <Link to="/home" style={styles.link}>
          Home
        </Link>

        <Link to="/cart" style={styles.link}>
          Cart ({cart.length})
        </Link>

        <Link to="/orders" style={styles.link}>
          Orders
        </Link>

        <Link to="/admin" style={styles.link}>
          Admin
        </Link>

        <button onClick={handleLogout} style={styles.button}>
          Logout
        </button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 40px",
    background: "#2563eb",
    color: "#fff",
  },

  logo: {
    margin: 0,
  },

  links: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },

  button: {
    background: "#fff",
    color: "#2563eb",
    border: "none",
    padding: "8px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Navbar;
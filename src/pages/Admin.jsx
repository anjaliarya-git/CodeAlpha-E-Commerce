import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

import Navbar from "../components/Navbar";
import { db } from "../firebase/firebase";

function Admin() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const addProduct = async () => {
    if (!title || !price || !category || !image) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      await addDoc(collection(db, "products"), {
        title,
        price: Number(price),
        category,
        image,
        description,
      });

      alert("✅ Product Added Successfully!");

      setTitle("");
      setPrice("");
      setCategory("");
      setImage("");
      setDescription("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>Admin Panel</h1>

        <input
          style={styles.input}
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          style={styles.input}
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          style={styles.input}
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          style={styles.input}
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button style={styles.button} onClick={addProduct}>
          Add Product
        </button>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "30px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },

  textarea: {
    width: "100%",
    height: "100px",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    padding: "14px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Admin;
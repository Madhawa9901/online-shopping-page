import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContex";
import { motion } from "framer-motion";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.id === parseInt(id));
        setProduct(foundProduct);
      });
  }, [id]);

  if (!product) {
    return <p className="text-white text-center mt-10">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <motion.div
        className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
        />
        <h1 className="text-3xl font-bold text-blue-400">{product.title}</h1>
        <p className="text-yellow-400 text-lg my-2">⭐ {product.rating}</p>
        <p className="text-lg text-gray-300 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-green-400 mb-6">
          ${product.price}
        </p>

        <motion.button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          whileTap={{ scale: 0.9 }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </motion.button>
      </motion.div>
    </div>
  );
}

export default ProductDetail;

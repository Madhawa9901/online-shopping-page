import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContex";
import { motion } from "framer-motion";

function Home() {
  const [products, setProducts] = useState([]);
  const { cart, addToCart } = useCart();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header with animated cart */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold text-blue-400">
          🛍️ Online Shopping
        </h1>
        <Link
          to="/cart"
          className="relative text-lg font-semibold text-blue-300 hover:text-blue-500 transition"
        >
          🛒 Cart
          <motion.span
            className="ml-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </motion.span>
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            <p className="text-yellow-400">⭐ Rating: {product.rating}</p>
            <p className="text-lg font-semibold text-green-400">
              ${product.price}
            </p>
            <div className="mt-4 flex justify-between">
              <motion.button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                whileTap={{ scale: 0.9 }}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </motion.button>
              <Link
                to={`/product/${product.id}`}
                className="text-blue-400 hover:underline"
              >
                View Details →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Home;

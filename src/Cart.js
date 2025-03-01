import { useCart } from "./CartContex";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Cart() {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-extrabold text-blue-400 mb-6">
        🛒 Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-lg text-gray-400">Your cart is empty.</p>
      ) : (
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {cart.map((item) => (
            <motion.div
              key={item.id}
              className="bg-gray-800 p-4 rounded-lg flex justify-between items-center shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-yellow-400">⭐ {item.rating}</p>
                  <p className="text-green-400 font-semibold">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <motion.button
                  className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => removeFromCart(item.id)}
                >
                  ➖
                </motion.button>
                <span className="text-xl">{item.quantity}</span>
                <motion.button
                  className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => addToCart(item)}
                >
                  ➕
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <div className="mt-6">
        <Link to="/" className="text-blue-400 hover:underline">
          ⬅ Back to Shopping
        </Link>
      </div>
    </div>
  );
}

export default Cart;

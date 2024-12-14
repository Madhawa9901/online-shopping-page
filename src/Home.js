import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/data.json')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);

    return(
        <div className="container mx-auto p-4 ">
            <h1 className="text-3xl font-bold text-center mb-6">Online Shopping</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map(product => (
                    <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition">
                        <img src={product.image} alt={product.title} className="h-48 w-full objecct-cover mb-4 rounded" />
                        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                        <p className="text-yellow-500">Rating: {product.rating}</p>
                        <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Home;
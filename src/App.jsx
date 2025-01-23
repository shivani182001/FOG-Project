import { useEffect, useState } from "react";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Breadcrumb from "./component/Breadcrumb";
import FilterAndSort from "./component/FilterAndSort";
import ProductCard from "./component/ProductCard";
import Pagination from "./component/Pagination";
import Footer from "./component/Footer";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0); // Initialize total state
  const limit = 12; // Items per page

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products", {
          params: {
            filter: JSON.stringify(filters),
            sort,
            page,
            limit,
          },
        });
        setProducts(response.data.data);
        setTotal(response.data.total); // Update total items
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [filters, sort, page, limit]);

  return (
    <div className="bg-gray-100">
      <Header />
      <HeroSection />
      <Breadcrumb />
      <FilterAndSort setFilters={setFilters} setSort={setSort} />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              label={{
                text: product.label || "New",
                color: product.label === "Sale" ? "red-500" : "yellow-500",
              }}
              name={product.name}
              price={`Rp ${product.price.toLocaleString()}`}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      <Pagination total={total} limit={limit} page={page} setPage={setPage} />
      <Footer />
    </div>
  );
};

export default App;

import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout.jsx";
import ProductGrid from "./components/ProductGrid/ProductGrid.jsx";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Layout>
        <main className="main container">
          <h1 className="page-title">DISCOVER OUR PRODUCTS</h1>
          <p className="page-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </p>
          <ProductGrid />
        </main>
      </Layout>
    </CartProvider>
  );
}

export default App;

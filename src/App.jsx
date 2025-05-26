import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import NewsLetter from "./Components/NewsLetter";
import ProductGrid from "./Components/ProductCard";
import ProductList from "./Components/ProductList";
import "./style.css";

export default function App() {
  return (
    <>
      <NavBar />
      <main class="container mx-auto px-4 md:px-8 py-8">
        <ProductList />
      </main>
      <NewsLetter />
      <Footer />

    </>
  );
}

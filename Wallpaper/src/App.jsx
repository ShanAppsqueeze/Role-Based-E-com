import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import HeroSection from "./component/Main";
import FeaturedTShirts from "./component/FeaturedTShirts";
import About from "./component/About";
import Services from "./component/Services";
import Contact from "./component/Contact";
import AdminContactDashboard from "./Dashboard/ContactPage";
import AdminProductDashboard from "./Dashboard/ProductsPage";
import Product from "./component/Product";

function App() {
  return (
    <BrowserRouter>
      {/* Main Layout (with header/footer) */}
      <Routes>
        <Route 
          path="/*" 
          element={
            <>
              <Navbar />
              <MainContent />
              <Footer />
            </>
          } 
        />
        
        {/* Admin Layout (without header/footer) */}
        <Route 
          path="/Dashboard/*" 
          element={<AdminLayout />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

// Main content component for regular pages
function MainContent() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HeroSection />
            <FeaturedTShirts />
          </>
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

// Admin layout component
function AdminLayout() {
  return (
    <Routes>
      <Route path="/contactPage" element={<AdminContactDashboard />} />
      <Route path="/productsPage" element={<AdminProductDashboard />} />
      {/* Add other admin routes here */}
    </Routes>
  );
}

export default App;
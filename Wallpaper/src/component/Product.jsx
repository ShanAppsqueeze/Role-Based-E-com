import { useState, useEffect } from 'react';
import { FiShoppingCart, FiHeart, FiShare2, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ProductPage = () => {
  const [mainImage, setMainImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3000/Productfind", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        console.log("data", data);
        
        setProducts(data);
        setInitialProductData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const setInitialProductData = (data) => {
    if (data && data.length > 0) {
      setMainImage(data[0]?.images?.[0] || '');
      setSelectedColor(data[0]?.colors?.[0] || '');
      setSelectedSize(data[0]?.sizes?.[0] || '');
    }
  };

  const currentProduct = products[currentSlide] || {};

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    setMainImage(products[currentSlide === products.length - 1 ? 0 : currentSlide + 1]?.images?.[0] || '');
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    setMainImage(products[currentSlide === 0 ? products.length - 1 : currentSlide - 1]?.images?.[0] || '');
  };

  const handleThumbnailClick = (img) => {
    setMainImage(img);
  };

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-medium">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-medium text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-medium">No products available</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative">
            {currentProduct.Status === 'New' && (
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                NEW
              </div>
            )}
            {currentProduct.Status === 'Discount' && (
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                {currentProduct.Aboutitem}% OFF
              </div>
            )}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <img 
                src={currentProduct.Image} 
                alt={currentProduct.Productname || 'Product image'} 
                className="w-full h-96 object-contain cursor-zoom-in"
              />
            </div>
            <div className="flex space-x-2 mb-6">
              {currentProduct.Image.split(',').map((img, index) => (
                <div 
                  key={index}
                  className={`w-16 h-16 rounded-md overflow-hidden border-2 ${mainImage === img ? 'border-blue-500' : 'border-transparent'}`}
                  onClick={() => handleThumbnailClick(img)}
                >
                  <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex justify-between mb-8">
              <button 
                onClick={prevSlide}
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                <FiChevronLeft className="mr-1" /> Previous
              </button>
              <button 
                onClick={nextSlide}
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                Next <FiChevronRight className="ml-1" />
              </button>
            </div>
          </div>
          <div className="px-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentProduct.Productname || 'Product Name'}</h1>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-red-600">
                Rs: {currentProduct.Price }
              </span>
              {/* {currentProduct.Price && (
                <span className="ml-2 text-lg text-gray-500 line-through">
                  ${currentProduct.Price?.toFixed(2)}
                </span>
              )} */}
            </div>
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Color: {selectedColor || 'Select color'}</h3>
              <div className="flex space-x-2">
                {/* {currentProduct.Color.split(',').map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-blue-500' : 'border-gray-300'}`}
                    style={{ backgroundColor: color.toLowerCase().includes('blue') ? '#93C5FD' : color.toLowerCase().includes('navy') ? '#1E3A8A' : '#000' }}
                    title={color}
                  />
                ))} */}
              </div>
            </div>
            <div className="mb-6">
           
              <div className="flex space-x-2">
                {currentProduct.Size.split(',').map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex items-center justify-center${selectedSize === size ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              
            </div>
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-100"
                >
                  -
                </button>
                <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300">
                  {quantity}
                </div>
                <button 
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex space-x-4 mb-8">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center">
                <FiShoppingCart className="mr-2" /> Add to Cart
              </button>
              <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center">
                <FiHeart className="mr-2" /> Wishlist
              </button>
            </div>
            <button className="flex items-center text-gray-600 hover:text-blue-600 mb-8">
              <FiShare2 className="mr-2" /> Share this product
            </button>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Product Details</h3>
           
              <ul className="text-gray-600 space-y-2">
                {currentProduct.Aboutitem.split(',').map((detail, index) => (
                  <li key={index}>• {detail}</li>
                )) || (
                  <>
                    <li>• Premium materials</li>
                    <li>• High quality construction</li>
                    <li>• Designed for comfort</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">More Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.Image} 
                    alt={product.Productname || 'Product image'} 
                    className="w-full h-64 object-cover"
                  />
                  {product.Status === 'New' && (
                    <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                      NEW
                    </div>
                  )}
                  {product.Status === 'Discount' && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {product.Aboutitem}% OFF
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{product.Productname || 'Product Name'}</h3>
                  <div className="flex items-center">
                    <span className="text-red-600 font-bold">
                      Rs: {product.Price }
                    </span>
                    {/* {product.Price && (
                      <span className="ml-2 text-gray-500 text-sm line-through">
                        ${product.Price?.toFixed(2)}
                      </span>
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
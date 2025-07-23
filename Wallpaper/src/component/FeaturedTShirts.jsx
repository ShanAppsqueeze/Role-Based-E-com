import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const FeaturedTShirts = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Urban Explorer Tee',
      price: '$29.99',
      rating: 4.5,
      reviewCount: 78,
      imageSrc: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Black t-shirt with urban skyline design',
      colors: [
        { name: 'Black', bgColor: 'bg-gray-900' },
        { name: 'White', bgColor: 'bg-white border border-gray-300' },
        { name: 'Navy', bgColor: 'bg-blue-900' },
      ],
    },
    {
      id: 2,
      name: 'Vintage Retro Tee',
      price: '$27.99',
      rating: 4.8,
      reviewCount: 124,
      imageSrc: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Vintage washed t-shirt with retro design',
      colors: [
        { name: 'Cream', bgColor: 'bg-amber-50' },
        { name: 'Heather Grey', bgColor: 'bg-gray-300' },
        { name: 'Olive', bgColor: 'bg-green-800' },
      ],
    },
    {
      id: 3,
      name: 'Minimalist Logo Tee',
      price: '$24.99',
      rating: 4.2,
      reviewCount: 56,
      imageSrc: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Simple t-shirt with minimalist logo',
      colors: [
        { name: 'Charcoal', bgColor: 'bg-gray-700' },
        { name: 'White', bgColor: 'bg-white border border-gray-300' },
        { name: 'Burgundy', bgColor: 'bg-red-900' },
      ],
    },
  ];

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      title: "Perfect fit and quality",
      rating: 5,
      content: "The fabric is so soft and comfortable. I've washed it several times and it still looks brand new. Will definitely buy more!",
      author: "Alex Johnson",
      date: "May 15, 2023",
    },
    {
      id: 2,
      title: "Love the design",
      rating: 4,
      content: "Great t-shirt with unique designs. The colors are vibrant and the print quality is excellent. Slightly pricey but worth it.",
      author: "Sarah Miller",
      date: "April 28, 2023",
    },
    {
      id: 3,
      title: "My new favorite tee",
      rating: 5,
      content: "I wear this at least once a week. The fit is perfect and it's so comfortable. Already planning to order in another color.",
      author: "Michael Chen",
      date: "June 2, 2023",
    },
  ];

  return (
    <div className="bg-white">
      {/* Featured Collection */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Featured Collection
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base text-gray-500">
            Premium quality t-shirts with unique designs that stand out from the crowd.
          </p>
        </div>

        {/* Product grid */}
        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <div className="mt-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={`h-5 w-5 flex-shrink-0 ${
                          product.rating > rating ? 'text-yellow-400' : 'text-gray-200'
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">{product.reviewCount} reviews</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
              <div className="mt-2 flex space-x-2">
                {product.colors.map((color) => (
                  <div
                    key={color.name}
                    className={`h-5 w-5 rounded-full ${color.bgColor} ring-2 ring-offset-1 ring-gray-200`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View All Products
          </a>
        </div>
      </div>

      {/* Customer reviews */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base text-gray-500">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={`h-5 w-5 flex-shrink-0 ${
                        review.rating > rating ? 'text-yellow-400' : 'text-gray-200'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900">{review.title}</h3>
                <p className="mt-3 text-base text-gray-600">{review.content}</p>
                <div className="mt-4 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-600 font-medium">
                        {review.author.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{review.author}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Premium Quality, Every Time
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Fast Shipping</h3>
                <p className="mt-2 text-base text-gray-500">
                  Get your order in 2-3 business days with our express shipping options.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Premium Materials</h3>
                <p className="mt-2 text-base text-gray-500">
                  100% organic cotton that's soft, breathable, and built to last.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Quality Guarantee</h3>
                <p className="mt-2 text-base text-gray-500">
                  If you're not satisfied, we'll make it right with our 30-day guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTShirts;
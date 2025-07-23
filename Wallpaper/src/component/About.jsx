import React from 'react';
import { CheckBadgeIcon, TruckIcon, ArrowPathIcon, HeartIcon } from '@heroicons/react/24/outline';

import { BrowserRouter } from 'react-router-dom';
// import Footer from './component/Footer'
// import Navbar from './component/Navbar'

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      bio: 'Fashion enthusiast with 10+ years in the apparel industry.'
    },
    {
      name: 'Sarah Chen',
      role: 'Head Designer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      bio: 'Creates unique designs that tell a story and spark conversations.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      bio: 'Ensures every order meets our quality standards.'
    }
  ];

  return (
    <>

     {/* <BrowserRouter>
      <Navbar/>
    </BrowserRouter> */}
   
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="T-shirt printing workshop"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            From a small garage startup to a beloved t-shirt brand - our journey of passion, quality, and style.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                We believe everyone deserves to wear high-quality, comfortable t-shirts that express their personality without breaking the bank.
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Shop Our Collection
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                className="w-full rounded-lg shadow-xl rotate-1 hover:rotate-0 transition-transform duration-300"
                src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Team working on t-shirt designs"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                    <CheckBadgeIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">Quality</h3>
                  <p className="mt-5 text-base text-gray-500">
                    We use only premium fabrics and printing techniques that stand the test of time.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                    <HeartIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">Passion</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Every design is created with love and attention to detail.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                    <TruckIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">Sustainability</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Eco-friendly materials and ethical manufacturing processes.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                    <ArrowPathIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">Innovation</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Constantly pushing boundaries in design and comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              The passionate people behind your favorite tees
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((person) => (
              <div key={person.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow h-full">
                  <div className="-mt-6">
                    <div className="flex justify-center">
                      <div className="relative">
                        <img
                          className="h-40 w-40 rounded-full object-cover"
                          src={person.image}
                          alt={person.name}
                        />
                        <span className="absolute -bottom-2 -right-2 bg-indigo-500 text-white px-3 py-1 text-xs font-medium rounded-full">
                          {person.role}
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">{person.name}</h3>
                    <p className="mt-2 text-base text-gray-500 text-center">
                      {person.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to find your perfect tee?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Join thousands of happy customers wearing our designs every day.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>

      {/* <BrowserRouter>
      <Footer/>
      </BrowserRouter> */}

     </>
  );
};

export default AboutPage;
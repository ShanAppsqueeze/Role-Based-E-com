import React from 'react';
import { 
  TruckIcon, 
  ArrowPathIcon, 
  GlobeAltIcon, 
  ShieldCheckIcon, 
  PaintBrushIcon,
  ScissorsIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const ServicesPage = () => {
  const services = [
    {
      name: 'Custom Printing',
      description: 'Bring your unique designs to life with our high-quality digital and screen printing services.',
      icon: <PaintBrushIcon className="h-8 w-8 text-indigo-600" />,
      features: ['Full-color printing', 'No minimum order', 'Fast turnaround']
    },
    {
      name: 'Bulk Orders',
      description: 'Special pricing and dedicated support for large quantity orders of 50+ pieces.',
      icon: <TruckIcon className="h-8 w-8 text-indigo-600" />,
      features: ['Volume discounts', 'Custom packaging', 'Bulk shipping rates']
    },
    {
      name: 'Design Services',
      description: 'Our creative team can help bring your vision to reality with professional design services.',
      icon: <ScissorsIcon className="h-8 w-8 text-indigo-600" />,
      features: ['Free consultations', 'Unlimited revisions', 'Vector file delivery']
    },
    {
      name: 'Worldwide Shipping',
      description: 'We ship to over 100 countries with reliable international carriers.',
      icon: <GlobeAltIcon className="h-8 w-8 text-indigo-600" />,
      features: ['Duty calculations', 'Tracking included', 'Express options']
    },
    {
      name: 'Quality Guarantee',
      description: 'We stand behind our products with a 100% satisfaction guarantee.',
      icon: <ShieldCheckIcon className="h-8 w-8 text-indigo-600" />,
      features: ['30-day returns', 'Free replacements', 'Color matching']
    },
    {
      name: 'Sustainable Options',
      description: 'Eco-friendly materials and processes for environmentally conscious customers.',
      icon: <SparklesIcon className="h-8 w-8 text-indigo-600" />,
      features: ['Organic cotton', 'Water-based inks', 'Recycled packaging']
    }
  ];

  const processSteps = [
    {
      name: 'Consultation',
      description: 'Discuss your needs with our specialists',
      icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />
    },
    {
      name: 'Design',
      description: 'Create or finalize your artwork',
      icon: <PaintBrushIcon className="h-6 w-6 text-white" />
    },
    {
      name: 'Production',
      description: 'We print with premium materials',
      icon: <ScissorsIcon className="h-6 w-6 text-white" />
    },
    {
      name: 'Delivery',
      description: 'Fast shipping to your location',
      icon: <TruckIcon className="h-6 w-6 text-white" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-700">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="T-shirt printing process"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
            Everything you need to create perfect custom apparel for your brand, team, or special event.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Premium T-Shirt Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              From design to delivery, we handle every detail with care
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div 
                key={service.name}
                className="pt-6 hover:transform hover:scale-105 transition duration-300"
              >
                <div className="flow-root bg-white rounded-lg shadow-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                      {service.icon}
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">
                      {service.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-600 text-center">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-sm text-gray-600">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Simple Process
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Get custom t-shirts in just 4 easy steps
            </p>
          </div>

          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-4 lg:gap-8">
              {processSteps.map((step, index) => (
                <div key={step.name} className="relative">
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 right-0 -mr-8 w-16 h-0.5 bg-indigo-500" aria-hidden="true" />
                  )}
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-600">
                      {step.icon}
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900">
                      {step.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to create custom tees?
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Get a free quote today - no obligation, just great service.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
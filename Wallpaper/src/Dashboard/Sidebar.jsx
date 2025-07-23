import React, { useState } from 'react';
import { 
  ChartBarIcon,
  UsersIcon,
  ShoppingBagIcon,
  EnvelopeIcon,
  CogIcon,
  LogoutIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  HomeIcon
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    {
      name: 'Dashboard',
      icon: <ChartBarIcon className="h-5 w-5" />,
      path: '/admin/dashboard',
      key: 'dashboard'
    },
    {
      name: 'Users',
      icon: <UsersIcon className="h-5 w-5" />,
      path: '/admin/users',
      key: 'users'
    },
    {
      name: 'Products',
      icon: <ShoppingBagIcon className="h-5 w-5" />,
      path: '/admin/products',
      key: 'products'
    },
    {
      name: 'Messages',
      icon: <EnvelopeIcon className="h-5 w-5" />,
      path: '/admin/messages',
      key: 'messages'
    },
    {
      name: 'Settings',
      icon: <CogIcon className="h-5 w-5" />,
      path: '/admin/settings',
      key: 'settings'
    }
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-indigo-800 text-white h-screen fixed transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-64'}`}>
      {/* Logo/Sidebar Header */}
      <div className={`flex items-center justify-between p-4 border-b border-indigo-700 ${isCollapsed ? 'flex-col' : ''}`}>
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-8 w-8 text-white" />
            <span className="text-xl font-bold">Admin Panel</span>
          </div>
        )}
        {isCollapsed && (
          <HomeIcon className="h-8 w-8 text-white" />
        )}
        <button 
          onClick={toggleSidebar}
          className="text-white hover:bg-indigo-700 p-2 rounded-lg transition-colors"
        >
          {isCollapsed ? (
            <ChevronDoubleRightIcon className="h-5 w-5" />
          ) : (
            <ChevronDoubleLeftIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="mt-6">
        <ul className="space-y-2 px-2">
          {menuItems.map((item) => (
            <li key={item.key}>
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-indigo-900 text-white' : 'text-indigo-200 hover:bg-indigo-700'} ${isCollapsed ? 'justify-center' : ''}`
                }
                onClick={() => setActiveItem(item.key)}
              >
                <span className="flex-shrink-0">
                  {React.cloneElement(item.icon, {
                    className: `h-5 w-5 ${activeItem === item.key ? 'text-white' : 'text-indigo-300'}`
                  })}
                </span>
                {!isCollapsed && (
                  <span className="ml-3">{item.name}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className={`absolute bottom-0 w-full p-4 border-t border-indigo-700 ${isCollapsed ? 'text-center' : ''}`}>
        <NavLink
          to="/logout"
          className={`flex items-center p-2 rounded-lg text-indigo-200 hover:bg-indigo-700 transition-colors ${isCollapsed ? 'justify-center' : ''}`}
        >
          <LogoutIcon className="h-5 w-5" />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
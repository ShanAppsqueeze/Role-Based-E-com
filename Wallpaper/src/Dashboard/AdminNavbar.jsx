// AdminNavbar.jsx
import { NavLink } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav>
      <NavLink to="/Dashboard/ContactPage">Contact Messages</NavLink>
      <NavLink to="/admin/orders">Orders</NavLink>
      <NavLink to="/admin/products">Products</NavLink>
    </nav>
  );
};

module .exports = AdminNavbar;
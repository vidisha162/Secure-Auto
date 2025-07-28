import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">SecureAuto 🔐</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-300">Dashboard</Link>
          <Link to="/vault" className="hover:text-gray-300">Vault</Link>
          <Link to="/settings" className="hover:text-gray-300">Settings</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

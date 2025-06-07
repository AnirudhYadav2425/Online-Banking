import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">OnlineBank</Link>
      <div className="space-x-4">
        {user && (
          <>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <Link to="/transfer" className="hover:underline">Transfer</Link>
            <Link to="/profile" className="hover:underline">Profile</Link>
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-700">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

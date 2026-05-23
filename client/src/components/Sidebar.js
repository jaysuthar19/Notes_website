import {
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";

import { useContext } from "react";

import { AuthContext }
from "../context/AuthContext";

const Sidebar = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const { user, logout } =
    useContext(AuthContext);

  const isActive = (path) => {
    return location.pathname === path
      ? "active-link"
      : "";
  };

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-top">

        <h2 className="logo">
          DevBlog
        </h2>

      </div>

      <nav className="sidebar-links">

        <Link
          to="/"
          className={isActive("/")}
        >
          🏠 Home
        </Link>

        <Link
          to="/create"
          className={isActive("/create")}
        >
          ✍️ Create Blog
        </Link>

        {!user ? (
          <>
            <Link
              to="/login"
              className={isActive("/login")}
            >
              🔐 Login
            </Link>

            <Link
              to="/register"
              className={isActive("/register")}
            >
              👤 Register
            </Link>
          </>
        ) : (
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>
        )}

      </nav>

      <div className="sidebar-bottom">
        <p>
          Write. Share. Grow.
        </p>
      </div>

    </aside>
  );
};

export default Sidebar;
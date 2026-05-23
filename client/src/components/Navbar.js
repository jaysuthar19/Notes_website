import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">DevBlog</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
import {
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import BlogDetails from "./pages/BlogDetails";

const AppRoutes = ({
  blogs,
  loading,
  error,
  addBlog,
  removeBlog,
  editBlog
}) => {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <Home
            blogs={blogs}
            loading={loading}
            error={error}
            removeBlog={removeBlog}
          />
        }
      />

      <Route
        path="/create"
        element={
          <CreateBlog
            addBlog={addBlog}
          />
        }
      />

      <Route
        path="/edit/:id"
        element={
          <EditBlog
            blogs={blogs}
            editBlog={editBlog}
          />
        }
      />

      <Route
        path="/blog/:id"
        element={
          <BlogDetails
            blogs={blogs}
          />
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

    </Routes>
  );
};

export default AppRoutes;
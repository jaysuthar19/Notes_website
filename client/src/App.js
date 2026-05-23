import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import BlogDetails from "./pages/BlogDetails";

import useBlogs from "./hooks/useBlogs";

function App() {
  const {
    blogs,
    loading,
    error,
    addBlog,
    removeBlog,
    editBlog
  } = useBlogs();

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

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

      </main>

    </div>
  );
}

export default App;
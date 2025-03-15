import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./components/Pages/home.jsx";
import Navbar from "./components/navbar.jsx";
import WorkoutForm from "./components/WorkoutForm.jsx";
import Analytics from "./components/Pages/Analytics.jsx";
const Layout = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1 ml-52">
        <Navbar />
        <div className="p-32 pt-36 bg-gray-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap routes inside Layout
    children: [
      { index: true, element: <Home /> }, // Default child route
      {
        path: '/analytics',
        element: <Analytics />
      },
      {
        path: '/categories',
        element: <Home />
      },
      {
        path: '/progress',
        element: <Home />
      },
      {
        path: '/work',
        element: <Home />
      },
      {
        path: '/timings',
        element: <Home />
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

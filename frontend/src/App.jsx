import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <Outlet /> 
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
        path:'/abc',
        element:<>ABC</>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

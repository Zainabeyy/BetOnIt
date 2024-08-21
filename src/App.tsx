import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import AboutUsPage from "./pages/AboutUs";
import Faqs from "./pages/Faqs";

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/aboutUs',
      element:<AboutUsPage/>
    },
    {
      path:'/faqs',
      element:<Faqs/>
    }
  ])
  return (
    <div>
      <Nav />
      <RouterProvider router={router}/>
      <Footer />
    </div>
  );
}

export default App;

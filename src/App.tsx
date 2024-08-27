import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import AboutUsPage from "./pages/AboutUs";
import Faqs from "./pages/Faqs";
import ProtectedRoute from "./component/ProtectedRoute";
import AuthLogin from "./pages/crm/authLogin";
import AdminEmailDashboard from "./pages/crm/adminEmailPage";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.config";

function App() {
  const [user,setUser]=useState<User | null>(null)
  useEffect(()=>{
    const unsbscribe=onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)
        return
      }
      setUser(null)
    })
    return ()=> unsbscribe();
  })
  const location = window.location;
  const hiddeNavFooter = location.pathname === "/admin-dashboard" || location.pathname === "/adminLogin";
  
  return (
    <div>
      <BrowserRouter>
        {!hiddeNavFooter && <Nav />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/adminLogin" element={<AuthLogin />}></Route>
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute user={user}>
                <AdminEmailDashboard />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
        {!hiddeNavFooter && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;

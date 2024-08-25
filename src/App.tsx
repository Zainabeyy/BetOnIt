import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import AboutUsPage from "./pages/AboutUs";
import Faqs from "./pages/Faqs";
import EmailCrm from "./pages/crm/email";

function App() {
  const location=window.location
  const hiddeNavFooter= location.pathname === '/email'
  return (
    <div>
      <BrowserRouter>
        {!hiddeNavFooter && <Nav />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/email" element={<EmailCrm />}/>
        </Routes>
        {!hiddeNavFooter && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;

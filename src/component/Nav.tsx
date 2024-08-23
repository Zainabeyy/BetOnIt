import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  let location=useLocation();
  return (
    <nav className="bg-transparent flex justify-between text-white my-4 containerPadding">
      <Link to="/">
        <img src="../../Logo.svg" alt="logo" className="logo"/>
      </Link>
      <div className="font-medium space-x-8">
        <Link to="/faqs" className={`uppercase ${location.pathname==='/faqs' ? 'font-extrabold' : ''}`}>
          faq's
        </Link>
        <Link to="/aboutUs" className={`${location.pathname==='/aboutUs' ? 'font-extrabold' : ''}`}>About Us</Link>
      </div>
    </nav>
  );
}

import { Link } from "react-router-dom";

export default function Nav() {
  const location=window.location.pathname;
  return (
    <nav className="bg-transparent flex justify-between text-white my-4 containerPadding">
      <Link to="/">
        <img src="../../Logo.png" alt="logo" />
      </Link>
      <div className="font-medium space-x-8">
        <Link to="/faqs" className={`uppercase ${location==='/faqs' ? 'font-extrabold' : ''}`}>
          faq's
        </Link>
        <Link to="/aboutUs" className={location==='/aboutUs' ? 'font-extrabold' : ''}>About Us</Link>
      </div>
    </nav>
  );
}

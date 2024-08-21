export default function Nav() {
  const location=window.location.pathname;
  return (
    <nav className="bg-transparent flex justify-between text-white my-4 containerPadding">
      <a href="/">
        <img src="../../Logo.png" alt="logo" />
      </a>
      <div className="font-medium space-x-8">
        <a href="/faqs" className={`uppercase ${location==='/faqs' ? 'font-extrabold' : ''}`}>
          faq's
        </a>
        <a href="/aboutUs" className={location==='/aboutUs' ? 'font-extrabold' : ''}>About Us</a>
      </div>
    </nav>
  );
}

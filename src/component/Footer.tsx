import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="containerPadding bg-black-dark py-10">
        <div className="md:grid md:grid-rows-3 md:grid-flow-col md:h-28 text-xs font-medium text-transWhite-medium flex flex-col space-y-4">
          <a href="/">
            <img
              src="../../Logo.svg"
              alt="logo"
              className="w-[5.5rem]"
            />
          </a>
          <div className="space-x-4 flex row-span-2 md:self-center">
            <a href="#" className="footerImg">
              <img
                src="../../footer/insta-icon.svg"
                alt="instagram icon"
              />
            </a>
            <a href="#" className="footerImg">
              <img
                src="../../footer/linkedIn-icon.svg"
                alt="linked In icon"
              />
            </a>
          </div>
          <div className="line"></div>
          <Link to="/aboutUs">About Us</Link>
          <Link to="/faqs">FAQs</Link>
          <a href="#">Contact Us</a>
          <div className="line"></div>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <p className="font-medium text-transWhite-medium text-[0.625rem] mt-3">
          Copyright © BetOnIt 2024
        </p>
      </div>
    </footer>
  );
}

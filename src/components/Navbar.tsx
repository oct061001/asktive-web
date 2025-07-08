import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router";
import logo from "../assets/logotest.png";
import "./StickyNavbar.css";

interface NavMenu {
  label: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  const navbar = useRef<HTMLDivElement | null>(null);
  const navbarOffset = useRef<HTMLDivElement | null>(null);

  const location = useLocation();

  const menus: NavMenu[] = [
    { label: "Home", path: "/" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "About", path: "/about" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (navbarOffset.current) {
        const offsetTop = navbarOffset.current.clientHeight;
        setSticky(window.pageYOffset >= offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (navbar.current) {
      setNavHeight(navbar.current.clientHeight);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div ref={navbarOffset}></div>
      <div ref={navbar} className={`content ${sticky ? "sticky" : ""}`}>
        <div className="navbar-inner">
          <div className="navbar-logo">
            <img src={logo} alt="Asktive-Logo" className="logo" />
          </div>
          <nav className="menu">
            {menus.map((menu) => (
              <Link
                key={menu.path}
                to={menu.path}
                className={`menu-item ${location.pathname === menu.path ? "active" : ""}`}
                onClick={handleMenuClick}
              >
                {menu.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div style={{ height: navHeight }}></div>
    </>
  );
};

export default Navbar;

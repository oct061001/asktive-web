import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router";

import logo from "../assets/logotest.png"
import "./StickyNavbar.css";

interface NavMenu {
  label: string;
  path: string;
}

const Navbar: React.FC = () => {
  // All states
  const [sticky, setSticky] = useState<boolean>(false);
  const [navHeight, setNavHeight] = useState<number>(0);

  // All refs
  const navbar = useRef<HTMLDivElement | null>(null);
  const navbarOffset = useRef<HTMLDivElement | null>(null);

  // Current location from react-router
  const location = useLocation();

  // Menu items
  const menus: NavMenu[] = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact Us!", path: "/contact-us" },
  ];

  // Mount the Event Listener on loading the site
  useEffect(() => {
    const handleScroll = () => {
      if (navbarOffset.current) {
        // Get the offset to the top
        const value = navbarOffset.current.clientHeight;

        // Set the boolean value
        setSticky(window.pageYOffset >= value);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Set the height of the Navbar
    if (navbar.current) {
      setNavHeight(navbar.current.clientHeight);
    }

    // Remove the listener when cleaning up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <>
      <div ref={navbarOffset}></div>
      {/* Always add the content class and only if it is sticky the other class */}
      <div ref={navbar} className={`content ${sticky ? "sticky" : ""}`}>
        <div className="navbar-logo">
          <img
          src = {logo}
          alt = "Asktive-Logo"
          className = "Logo">
          </img>
        </div>
        <nav className="menu">
          {menus.map((menu) => (
            <Link
              key={menu.path}
              to={menu.path}
              className={`menu-item ${
                location.pathname === menu.path ? "active" : ""
              }`}
              onClick={handleMenuClick} // Scroll to top when clicked
            >
              {menu.label}
            </Link>
          ))}
        </nav>
      </div>
      {/* To prevent the next content to "jump" behind the navbar */}
      <div style={sticky ? { marginTop: navHeight } : {}}></div>
    </>
  );
};

export default Navbar;

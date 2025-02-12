import React, { useContext, useEffect, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import icon from "../../public/assets/logoTesla.png";
import { HiMiniSun } from "react-icons/hi2";
import { GoMoon } from "react-icons/go";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // State to track theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme when component mounts
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle Theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSignOut = () => {
    signOutUser().then(() => {
      toast.success("LogOut successful");
    });
  };

  return (
    <div className="w-full fixed z-10 shadow-lg py-3 bg-[#141414] text-white">
      <div className="flex items-center justify-between px-4">
        {/* Navbar Start */}
        <div className="flex items-center">
          {/* Dropdown for smaller screens */}
          <div className="dropdown lg:hidden">
            <button tabIndex={0} role="button" className="text-2xl">
              <HiOutlineMenuAlt1 />
            </button>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 shadow space-y-3 pl-6"
            >
              <NavLink to="/" className="block">
                Home
              </NavLink>
              <NavLink to="/available-cars" className="block">
                Available Cars
              </NavLink>
              {user ? (
                <>
                  <NavLink to="/add-car" className="block">
                    Add Cars
                  </NavLink>
                  <NavLink to="/my-cars" className="block">
                    My Cars
                  </NavLink>
                  <NavLink to="/my-booking" className="block">
                    My Booking
                  </NavLink>
                  <button onClick={handleSignOut} className="block text-left">
                    LogOut
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/login" className="block">
                    Login
                  </NavLink>
                  <NavLink to="/registration" className="block">
                    Registration
                  </NavLink>
                </>
              )}
            </div>
          </div>

          {/* Logo */}
          <img src={icon} alt="Logo" className="w-8 ml-2" />
          <div
            onClick={() => navigate("/")}
            className="text-2xl font-bold ml-2 text-gray-900 dark:text-white"
          >
            The <span className="text-red-600">Cars</span>
          </div>
        </div>

        {/* Navbar Links for Larger Screens */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/available-cars">Available Cars</NavLink>
          {user ? (
            <div className="flex items-center space-x-6">
              <NavLink to="/add-car">Add Cars</NavLink>
              <NavLink to="/my-cars">My Cars</NavLink>
              <NavLink to="/my-booking">My Booking</NavLink>
              <button onClick={handleSignOut}>Logout</button>

              {/* Theme Toggler */}
              <button
                class="theme-toggle"
                type="button"
                title="Toggle theme"
                aria-label="Toggle theme"
                onClick={toggleTheme}
              >
                {theme === "light" ? <GoMoon /> : <HiMiniSun />}
              </button>

              {/* User Profile Picture */}
              <img
                referrerPolicy="no-referrer"
                alt={`${user?.displayName}`}
                src={`${user?.photoURL}`}
                className="w-10 rounded-full"
              />
            </div>
          ) : (
            <div className="flex gap-5">
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/registration">Registration</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

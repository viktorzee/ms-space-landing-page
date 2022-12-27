import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar: React.FC = () => {
  const [click, setClick] = React.useState(false);

  const handleClick: any = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div
        className={
          click
            ? "absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0, 0, 0, 0.3)]"
            : ""
        }
        onClick={() => Close()}
      />
      <nav
        className=" bg-transparent h-[80px] flex justify-center items-center text-xl sticky top-0 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center items-center w-full h-4/5 max-w-screen-2xl">
          <NavLink
            to="/"
            className="text-[#f5b921] items-center ml-5 cursor-pointer decoration-none text-4xl grow"
          >
            MS-SWAP
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-links active" : "nav-links"
                }
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-links active" : "nav-links"
                }
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "nav-links active" : "nav-links"
                }
                onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-links active" : "nav-links"
                }
                onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

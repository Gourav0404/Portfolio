import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss";

const data = [
  {
    lable: "Home",
    to: "/",
  },
  {
    lable: "About Me",
    to: "/About",
  },
  {
    lable: "Skills",
    to: "/Skills",
  },
  {
    lable: "Contact",
    to: "/Contact",
  },
  
]

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">

          {/* <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link> */}

          <h1 className="navbar__container__heading">Gourav Chouhan</h1>

        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>

          {
            data.map((item, key) => 
              <li key={key} className="navbar__container__menu__item">
                <Link  className="navbar__container__menu__item__links"  to={item.to}
                  onClick={() => setToggleIcon(false)}// ✅ This line is the fix
                  >
                   {item.lable}
                </Link>
             </li>
                    ))
          }

        </ul>
        <div className="nav_icons" onClick={handleToggleIcon}>
          {
            toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
          }
        </div>

      </nav>
    </div>
  );
}

export default Navbar;

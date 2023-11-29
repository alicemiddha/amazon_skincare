import React from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>amazon</span>
      </div>

      <div className={css.right}>
        <div className={css.bars}>
        </div>

        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        </div>

        <input type="text" className={css.search} placeholder="Search" />
        <CgShoppingBag className={css.cart} />
        <Link to={"/"} className="px-6 py-1 rounded-3xl bg-yellow-250 font-bold border-2 border-green-400 hover:bg-green-400">Login</Link>
      </div>
    </div>
  );
};

export default Header;

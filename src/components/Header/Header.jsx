import React from "react";
import { Link} from "react-router-dom";
const Header = () => {
    return (
        <header className="nav-bar">
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item navigation__item--1">
                        <Link to="/">
                            <span>Calculator</span>
                        </Link>
                    </li>
                    <li className="navigation__item navigation__item--2">
                        <Link to="/text">
                            <span>Text page</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;
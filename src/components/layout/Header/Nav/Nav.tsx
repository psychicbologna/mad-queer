import './Nav.css';
import { NavLink } from "react-router-dom";

export const Nav = (): JSX.Element => {
    return (
        <nav className="Nav">
            <NavLink className="NavLink" to="/">
                Home
            </NavLink>
            <NavLink className="NavLink" to="/about">
                About
            </NavLink>
            <NavLink className="NavLink" to="/resources">
                Resources
            </NavLink>
            <NavLink className="NavLink" to="/reflections" >
                Reflections
            </NavLink>
            <NavLink className="NavLink" to="/connect">
                Connect
            </NavLink>
            <NavLink className="NavLink" to="/feedback">
                Feedback
            </NavLink>
        </nav>)
}
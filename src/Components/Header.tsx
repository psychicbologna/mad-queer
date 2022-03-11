import { NavLink } from "react-router-dom";
import { Heading } from '../components/utils'

const Header = (): JSX.Element => {
    return (
        <div className="Header flex-col gap-10 p-10">
            <Heading size={2}>Mad Queer Organization Strategies</Heading>
            <Heading size={3}>Liberation for Every Body</Heading>
            <nav>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/resources">
                    Resources
                </NavLink>
                <NavLink to="/reflections" >
                    Reflections
                </NavLink>
            </nav>

            <nav>
                <NavLink to="/connect">
                    Connect
                </NavLink>
                <NavLink to="/feedback">
                    Feedback
                </NavLink>
            </nav>
        </div>
    )
}

export default Header
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <img />
            </li>
            <li>
                <NavLink to={'/'}>
                    Lobby
                </NavLink>
            </li>
            <li>
                <NavLink to={''}>
                    Projects
                </NavLink>
            </li>
            <li>
                <NavLink to={''}>
                    Skills Tree
                </NavLink>
            </li>
            <li>
                <NavLink to={''}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to={''}>
                    Post Office
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
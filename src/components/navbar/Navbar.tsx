import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to={'/'}>
                    Lobby
                </NavLink>
            </li>
            <li>
                <NavLink to={''}>
                    Skills Tree
                </NavLink>
            </li>
            <li>
                <NavLink to={''}>
                    Projects Gateway
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
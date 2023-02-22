import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "linkActive" : undefined)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "linkActive" : undefined)}
            to="/add"
          >
            Add Items
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "linkActive" : undefined)}
            to="/list"
          >
            All Items
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

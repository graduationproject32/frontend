import { NavLink } from "react-router-dom";
import logo from "../assets/logo-black.svg";
import whiteLogo from "../assets/logo-white.svg";
import "./Navigation.scss";
import { useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navigation = ({ navClasses }) => {
  const [toggled, setToggled] = useState(false);
  const onToggle = () => {
    setToggled((prevState) => {
      return !prevState;
    });
  };
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isDark = navClasses.includes("darkNav");
  const conditionalContent = user ? (
    <ul className="navbar-nav m-0">
      <NavLink className="nav-link" to="/upload">
        Upload resume
      </NavLink>
      <NavLink className="nav-link" to="/interview">
        Voice interview
      </NavLink>
      <Dropdown className="dropdownMenu">
        <Dropdown.Toggle>
          <div onClick={onToggle} className="d-flex align-items-center">
            <div className="user-info d-flex align-items-center">
              <div>
                <h4 className="user-name">{user.username}</h4>
                <p className="occupation">developer</p>
              </div>
              <div className="avatar">
                <img alt="profile pic" src={user.image}></img>
              </div>
            </div>
            <FontAwesomeIcon
              className={`toggleIcon ${toggled ? "fa-rotate-180" : ""}`}
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as="div">
            <button
              onClick={() => {
                setToggled(false);
                dispatch(logout());
                navigate("/");
              }}
            >
              Log out
            </button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ul>
  ) : (
    <NavLink className="nav-link" to="/auth/login">
      Sign in
    </NavLink>
  );
  return (
    <nav className={navClasses}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="">
          <img src={isDark ? whiteLogo : logo} alt="" />
        </NavLink>
        {conditionalContent}
      </div>
    </nav>
  );
};
export default Navigation;

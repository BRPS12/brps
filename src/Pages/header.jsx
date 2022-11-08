import { useContext } from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { darkModeContext } from "../App";
import lightLogo from "../assets/team.png";
import darkLogo from "../assets/team.-2.png";
const Header = () => {
  const { isDarkMode, setIsDarkMode } = useContext(darkModeContext);
  const location = useLocation();

  const styles = {
    backgroundColor: isDarkMode ? "black" : "white",
    navItem: {
      color: location.pathname !== "/" ? "black" : "white",
    },
  };
  return (
    <div className="header">
      <div className="Logo">
        <Link className="" to={"./"}>
          {location.pathname !== "/" ? (
            <img className="logo" src={darkLogo} alt="" />
          ) : (
            <img className="logo" src={lightLogo} alt="" />
          )}
        </Link>
      </div>
      <Form>
        <Form.Check
          onChange={(e) => setIsDarkMode(e.target.checked)}
          type="switch"
          id="custom-switch"
        />
      </Form>
      <div className="Bar">
        <Link className="App" style={styles.navItem} to={"./Product"}>
          Product
        </Link>
        <Link className="App" style={styles.navItem} to={"./Services"}>
          Services
        </Link>
        <Link className="App" style={styles.navItem} to={"./Contacts"}>
          Contacts
        </Link>
        <Link className="App" style={styles.navItem} to={"./Login"}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;

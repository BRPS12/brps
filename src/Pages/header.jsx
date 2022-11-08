import { useContext } from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { darkModeContext } from "../App";
import lightLogo from "../assets/team.png";
const Header = () => {
  const { isDarkMode, setIsDarkMode } = useContext(darkModeContext);
  const location = useLocation();

  const styles = {
    backgroundColor: isDarkMode ? "white" : "black",
    navItem: {
      color: location.pathname !== "/" ? "black" : "white",
    },
  };
  return (
    <div className="">
      <div className="header">
        <div className="Logo">
          <Link className="" to={"./"}>
            {location.pathname !== "/" ? (
              <div>har logo</div>
            ) : (
              <img className="logo" src={lightLogo} />
            )}
          </Link>
        </div>
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
        <Form>
          <Form.Check
            onChange={(e) => setIsDarkMode(e.target.checked)}
            type="switch"
            id="custom-switch"
            label="Check this switch"
          />
        </Form>
      </div>
    </div>
  );
};

export default Header;

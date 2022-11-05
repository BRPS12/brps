import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="Logo">
        <Link className="logo" to={"./"}></Link>
      </div>
      <div className="Bar">
        <Link className="App" to={"./Product"}>
          Product
        </Link>
        <Link className="App" to={"./Services"}>
          Services
        </Link>
        <Link className="App" to={"./Contacts"}>
          Contacts
        </Link>
        <Link className="App" to={"./Login"}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;

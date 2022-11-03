import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = ({ Team, instagram, facebook, twitter, headers, input }) => {
  return (
    <div className="Footercontainer">
      {/* <div className="Logo2">
        <div className="logo2">{Team}</div>
      </div>
      <div className="Instagram">
        <div className="inst"></div>
        <div
          style={{
            display: "flex",
            margin: 25,
            flexDirection: "row",
            color: "white",
          }}
        >
          {instagram}
        </div>
      </div> */}
      <Row className="w-25">
        <Col className="inst"></Col>
        <Col className="text-light">{instagram}</Col>
      </Row>
    </div>
  );
};
export default Footer;

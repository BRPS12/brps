import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "../components/blog";
const Product = () => {
  return (
    <div className="BLOGPOSTS">
      <div className="Blog">
        <div className="title" style={{ fontSize: "48px", fontWeight: "800" }}>
          Blog posts
        </div>
      </div>
      <div
        className="miniTitle text-muted"
        style={{ fontSize: "18px", lineHeight: "29px", fontWeight: "600" }}
      >
        Our latest updates and blogs about managing your team
      </div>
      <div>
        <Container className="w-100 ">
          <Row className="w-100">
            <Col className="w-25 m-2">
              <Blog
                blogheader="The Emotional Toll of Being in UX"
                blogcontent="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
                blogname="Wade Warren | 2nd January , 2022"
                bg=""
              />
            </Col>
            <Col className="w-25 m-2">
              <Blog
                blogheader="The Emotional Toll of Being in UX"
                blogcontent="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
                blogname="Wade Warren | 2nd January , 2022"
                bg=""
              />
            </Col>
            <Col className="w-25 m-2">
              <Blog
                blogheader="The Emotional Toll of Being in UX"
                blogcontent="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
                blogname="Wade Warren | 2nd January , 2022"
                bg=""
              />
            </Col>
          </Row>
          <Row className="w-100">
            <Col className="w-25 m-2">
              <Blog
                blogheader="The Emotional Toll of Being in UX"
                blogcontent="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
                blogname="Wade Warren | 2nd January , 2022"
                bg=""
              />
            </Col>
            <Col className="w-25 m-2">
              <Blog
                blogheader="The Emotional Toll of Being in UX"
                blogcontent="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
                blogname="Wade Warren | 2nd January , 2022"
                bg=""
              />
            </Col>
            <Col className="w-25 m-2">
              <Blog
                blogheader="The Emotional Toll of Being in UX"
                blogcontent="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
                blogname="Wade Warren | 2nd January , 2022"
                bg=""
              />
            </Col>
          </Row>
          <Row className="w-100">
            <Col className="w-25 m-2">
              <Blog
                blogheader="The Emotional Toll of Being in UX"
                blogcontent="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
                blogname="Wade Warren | 2nd January , 2022"
                bg=""
              />
            </Col>
            <Col className="w-25 m-2">
              <Blog
                blogheader="The Emotional Toll of Being in UX"
                blogcontent="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
                blogname="Wade Warren | 2nd January , 2022"
                bg=""
              />
            </Col>
            <Col className="w-25 m-2">
              <Blog
                blogheader="The Emotional Toll of Being in UX"
                blogcontent="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
                blogname="Wade Warren | 2nd January , 2022"
                bg=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Product;

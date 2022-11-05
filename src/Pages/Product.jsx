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
                bg="https://images.squarespace-cdn.com/content/v1/5e2fbee4883d490ef064c414/1580623923638-3DU02TVC5PTLEKA51ORH/photo-1558403194-611308249627.jpeg"
                blogpf="https://sy-security.fr/wp-content/uploads/2020/10/christian-buehner-DItYlc26zVI-unsplash.jpg"
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

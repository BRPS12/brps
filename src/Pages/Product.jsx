import { Col, Container, Row , Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "../components/blog";
const Product = () => {
  return (
    <div className="BLOGPOSTS">
      <div >
        <div className="title" style={{ fontSize: "48px", fontWeight: "800" }}>
          Blog posts
        </div>
      </div>
      <div
        className="title3"
        style={{ fontSize: "18px", lineHeight: "29px", fontWeight: "600" }}
      >
        Our latest updates and blogs about managing your team
      </div>
      <div className="Blog">
        <Container className="w-100 ">
          <Row className="w-100">
            <Col className="w-25 m-2">
              <Blog
                blogheader="The Emotional Toll of Being in UX"
                blogcontent="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
                blogname="Wade Warren | 2nd January , 2022"
                bg="https://images.squarespace-cdn.com/content/v1/5e2fbee4883d490ef064c414/1580623923638-3DU02TVC5PTLEKA51ORH/photo-1558403194-611308249627.jpeg"
                blogpf="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
              />
            </Col>
            <Col className="w-25 m-2">
              <Blog
                blogheader="10 secret tips for managing a team remotely"
                blogcontent="Our latest updates and blogs about managing your team
                Our latest updates and blogs about managing your team"
                blogname="Bessie Cooper | 2nd January , 2022"
                bg="https://media.istockphoto.com/photos/business-professionals-applauding-at-a-seminar-picture-id1308964737?b=1&k=20&m=1308964737&s=612x612&w=0&h=2RqKdfoi5kdVlMte3_wC2a7-YDXMIYI1LHw1YnuqeFo="
                blogpf="https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1614436201459-156d322d38c6"
              />
            </Col>
            <Col className="w-25 m-2">
              <Blog
                blogheader="What Ever Happened to Steampunk?"
                blogcontent="How the iPhone popularized steampunk… and how the iPhone killed it off "
                blogname="Courtney Henry | 2nd January , 2022"
                bg="https://images.unsplash.com/photo-1603202662747-00e33e7d1468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80"
                blogpf="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c21pbGV8ZW58MHx8MHx8&w=1000&q=80"
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
                blogheader="The Ultimate Guide to Becoming a Great Designer"
                blogcontent="Our latest updates and blogs about managing your team
                Our latest updates and blogs about managing your team"
                blogname="Eleanor Pena | 2nd January , 2022"
                bg="https://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/legacy/image/2019/Jun/PHOTO-dark%20and%20stormy%20cloudscape-istock-1125x534-Landscape.jpg"
                blogpf="https://ml8z4wffbwun.i.optimole.com/w:513/h:513/q:mauto/https://cataly5t.co.za/wp-content/uploads/2022/02/pexels-andrea-piacquadio-3769021-1.png"/>
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
      <center><Button type="button" className="blogbutton btn btn-secondary">Next</Button></center>
    </div>
  );
};
export default Product;

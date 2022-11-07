import { Col, Container, Row , Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "../components/blog";
const Product = () => {
  return (
    <div className="BLOGPOSTS">
      <Container className="w-100 ">
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
                blogheader="Why Are Women Still Behind in the Design World?"
                blogcontent="It’s 2020, but women designers still face lower pay and less opportunity. What gives?"
                blogname="Snoop Dog | 2nd January , 2022"
                bg="https://www.istockphoto.com/resources/images/istock-diff-screen-poster.png"
                blogpf="https://upload.wikimedia.org/wikipedia/commons/1/17/Snoop_Dogg_2019_by_Glenn_Francis.jpg"/>
            </Col>
            <Col className="w-25 m-2">
              <Blog
                blogheader="The 2020 Guide for White Men in Tech"
                blogcontent="How to use centuries of unfair advantage to make the world a more equal place"
                blogname="Boldin Ashid | 2nd January , 2022"
                bg="https://shotkit.com/wp-content/uploads/2019/02/Stock-photo.jpg"
                blogpf="data:image/jpeg;base64,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"
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
                blogheader="Data-Driven Design is Killing Our Instincts"
                blogcontent="Our latest updates and blogs about managing your team
                Our latest updates and blogs about managing your team"
                blogname="Jane Cooper | 2nd January , 2022"
                blogpf="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OGY5UFBVRmVnVHN8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=60"
                bg="https://media.istockphoto.com/photos/financial-advisor-with-couple-explaining-options-picture-id1334729682?b=1&k=20&m=1334729682&s=170667a&w=0&h=Op9LliIcnrWCjSzqCwjwNZXAEIj5qD2K4ob_JkuyCnI="
              />
            </Col>
            <Col className="w-25 m-2">
              <Blog
                blogheader="Finding the Blank Spots in Big Data"
                blogcontent="Artists and designers are working to address a major problem for marginalized communities in data economy: If the data does not exist…"
                blogname="Jenny Wilson | 2nd January , 2022"
                blogpf="https://images.unsplash.com/photo-1543269665-7821011040ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80"
                bg="https://www.taos.com/wp-content/uploads/2022/05/istockphoto-1369207279-170667a.jpg"
              />
            </Col>
            <Col className="w-25 m-2">
              <Blog
                blogheader="3 Lessons We Learned From Rebranding Gusto"
                blogname="Jacob Jones | 2nd January , 2022"
                blogcontent="You might not know the music, but designers have certainly taken notice of this small but visceral movement from the late ’80s"
                blogpf="https://images.pexels.com/photos/11676951/pexels-photo-11676951.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                bg="https://media.istockphoto.com/photos/businesswoman-addressing-a-meeting-in-office-picture-id1351446226"
              />
            </Col>
          </Row>
        
      </div>
      <center><Button type="button" className="blogbutton btn btn-secondary">Next</Button></center>
      </Container></div>
  );
};
export default Product;

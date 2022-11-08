import { Col, Container, Row, Button } from "react-bootstrap";
import { useContext } from "react";
import { darkModeContext } from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "../components/blog";
const Product = () => {
  const { isDarkMode } = useContext(darkModeContext);
  const styles = {
    box: {
      backgroundColor: isDarkMode ? "black" : "white",
    },
  };
  return (
    <div className="BLOGPOSTS" style={styles.box}>
      <Container className="w-100 ">
        <div>
          <div
            className="title3"
            style={{
              marginTop: "100px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Blog posts
          </div>
        </div>
        <div
          style={{
            fontSize: "18px",
            lineHeight: "29px",
            fontWeight: "600",
            marginTop: 40,
            color: isDarkMode ? "white" : "black",
          }}
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
                blogpf="https://upload.wikimedia.org/wikipedia/commons/1/17/Snoop_Dogg_2019_by_Glenn_Francis.jpg"
              />
            </Col>
            <Col className="w-25 m-2">
              <Blog
                blogheader="The 2020 Guide for White Men in Tech"
                blogcontent="How to use centuries of unfair advantage to make the world a more equal place"
                blogname="Boldin Ashid | 2nd January , 2022"
                bg="https://shotkit.com/wp-content/uploads/2019/02/Stock-photo.jpg"
                blogpf=""
              />
            </Col>
            <Col className="w-25 m-2">
              <Blog
                blogheader="The Ultimate Guide to Becoming a Great Designer"
                blogcontent="Our latest updates and blogs about managing your team
                Our latest updates and blogs about managing your team"
                blogname="Eleanor Pena | 2nd January , 2022"
                bg="https://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/legacy/image/2019/Jun/PHOTO-dark%20and%20stormy%20cloudscape-istock-1125x534-Landscape.jpg"
                blogpf="https://ml8z4wffbwun.i.optimole.com/w:513/h:513/q:mauto/https://cataly5t.co.za/wp-content/uploads/2022/02/pexels-andrea-piacquadio-3769021-1.png"
              />
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
        <center>
          <Button type="button" className="blogbutton btn btn-secondary">
            Next
          </Button>
        </center>
      </Container>
    </div>
  );
};
export default Product;

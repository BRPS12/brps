import Content from "./content";
import Teamprops from "../components/teamprops";
import Teamprops2 from "../components/teamprops2";
import Teamprops3 from "../components/teamprops3";
import Teamprops4 from "../components/teamprops4";
import { Col, Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Content
        title="Instant collaborations for remote teams"
        text="All in one for your remote team chats, collaboration and track projects"
        button="Get early access"
        placeholder="Email"
        type="email"
      />

      <Teamprops
        header="Your hub for Teamwork"
        content="haiuDSHIUDBCWNASDCMSADNIDCOWVANCMSXNOMDIW
        ANVIACSDV
         BANWASKNDJAJDHASKJHCNXCNBMVBXCNVBSDILUHEFA
         FHDSBCJK
        ASJDBC
        IAUBCUILEEIBVSUDCBAIUEYFGBAUCDSHJAGWDUYA
        FGBSDUKAJHBA"
        button="Learn more ->"
      />
      <Teamprops2
        header2="Simple task management"
        content2="haiuDSHIUDBCWNASDCMSADNIDCOWVANCMSXNOMDIW
        ANVIACSDV
         BANWASKNDJAJDHASKJHCNXCNBMVBXCNVBSDILUHEFA
         FHDSBCJK
        ASJDBC
        IAUBCUILEEIBVSUDCBAIUEYFGBAUCDSHJAGWDUYA
        FGBSDUKAJHBA"
        button2="Learn more ->"
      />
      <Teamprops3
        header3="Scheduling that actually works"
        content3="haiuDSHIUDBCWNASDCMSADNIDCOWVANCMSXNOMDIW
        ANVIACSDV
         BANWASKNDJAJDHASKJHCNXCNBMVBXCNVBSDILUHEFA
         FHDSBCJK
        ASJDBC
        IAUBCUILEEIBVSUDCBAIUEYFGBAUCDSHJAGWDUYA
        FGBSDUKAJHBA"
        button3="Learn more ->"
        title2="What people say about us"
      />

      <Container className="Textboxcontainer">
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            profile="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&w=1000&q=80"
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Jane Cooper"
            content4="Amet minim mollit non deserunt est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            profile="https://sy-security.fr/wp-content/uploads/2020/10/christian-buehner-DItYlc26zVI-unsplash.jpg"
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
      </Container>
    </div>
  );
};
export default Home;

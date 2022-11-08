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

      <Container>
        <Col className="w-50">
          <Teamprops
            header="Your hub for Teamwork"
            content="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
            button="Learn more ->"
            image1="https://uploads-ssl.webflow.com/5eaa67fcbc49cd35196dccb7/5eabc256573fea80b426f19b_ooto%20Meetings-min.png"
          />
        </Col>
        <Col className="w-50">
          <Teamprops2
            header2="Simple task management"
            content2="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
            button2="Learn more ->"
            image2="https://assets.bizclikmedia.net/576/496bfa2c2c7ebeca69e092c50b3b26a1:0843008e222f5d7c19d81b82f9ccb799/brooke-cagle-jbwcenourcg-unsplash.jpg"
          />
        </Col>

        <Col>
          <Teamprops3
            header3="Scheduling that actually works"
            content3="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
            button3="Learn more ->"
            title2="What people say about us"
            image3="https://images.unsplash.com/photo-1543270122-f7a11ad44f3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
          />
        </Col>
      </Container>

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
            name4="Eleanor Pena"
            content4="Nulla Lorem mollit cupidatat irure. Laborum magna nulla cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            profile="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c21pbGV8ZW58MHx8MHx8&w=1000&q=80"
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Boldin Ashid Bahli"
            content4="Yr ni bol hicheelee hii , uurtuu anhaar buh ym saihan bolno. Ta burhand itgdg bol nmg dagna uu. Nmg humuus Boldin huuhed gd bdg ym. Tiimee bi Boldin huuhed nda tal talin avyas bii. Nmg joker c gj duudg."
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

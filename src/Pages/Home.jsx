import Content from "./content"
import {Container , Row , Col} from 'react-bootstrap'
import Teamprops from "../components/teamprops";
const Home = ()=> {
    return(
       <div>
         <Container>
        <Row>
          <Col sm={10}>

                <Content
        title="Instant collaborations for remote teams"
        text="All in one for your remote team chats, collaboration and track projects"
        button="Get early access"
        placeholder="Email"
        type="email" />

        <Teamprops 
        header="Your hub for Teamwork"
        content="haiuDSHIUDBCWNASDCMSADNIDCOWVANCMSXNOMDIWANVIACSDV BANWASKNDJAJDHASKJHCNXCNBMVBXCNVBSDILUHEFAFHDSBCJK
        ASJDBCIAUBCUILEEIBVSUDCBAIUEYFGBAUCDSHJAGWDUYAFGBSDUKAJHBA"
        button="Learn more ->"
        />
        </Col>
        </Row>
        </Container>
       </div>
    )
};
export default Home;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram, faSquareWhatsapp, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #000;
  margin-top: 4rem;
  width: 100%;
  padding: 0 2rem;
  /* text-align: left; */
`

const FooterContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 25rem;
    justify-content: space-around;
    color: #fff;
    margin-top: 3rem;
    padding-top: 2rem;

  @media screen and (max-width: 802px) {
    gap: 0;
    flex-direction: column;
    width: 100%;
  }
`


const FooterDesc = styled.div`
    h1{
      font-weight: bold;
      font-size: 2rem;
    }
`

const Icons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  color: #fff;
  margin-top: 2.8rem;

  ul > li:first-child {
    /* Add your styles here */
    font-weight: bold;
    font-size: 1.6rem;
  }

  li{
    font-weight: 100;
  }
`;

const Footer = () => {
  return (
    <MainContainer>
      <FooterContent>
        <FooterDesc>
          <h1>Trippy</h1>
          <p>Choose your favourite destination.</p>
        </FooterDesc>
        <Icons>
          <h4>  <FontAwesomeIcon icon={faSquareFacebook} /> </h4>
          <h4>  <FontAwesomeIcon icon={faSquareInstagram} /> </h4>
          <h4>  <FontAwesomeIcon icon={faSquareWhatsapp} /> </h4>
          <h4>  <FontAwesomeIcon icon={faSquareTwitter} /> </h4>
        </Icons>
      </FooterContent>

      <List>
        <ul>
          <li>Project</li>
          <li>Changelog</li>
          <li>Status</li>
          <li>License</li>
          <li>All Versions</li>
        </ul>

        <ul>
          <li>Community</li>
          <li>GitHub</li>
          <li>Issues</li>
          <li>Project</li>
          <li>Twitter</li>
        </ul>

        <ul>
          <li>Help</li>
          <li>Support</li>
          <li>Troubleshooting</li>
          <li>Contact Us</li>
        </ul>

        <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>License</li>
        </ul>
      </List>

    </MainContainer>
  )
}

export default Footer
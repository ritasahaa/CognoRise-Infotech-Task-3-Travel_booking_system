import Cards from "./cards"
import styled from 'styled-components';


const HomePara=styled.p`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1rem;
`

const Head=styled.div`
   text-align: center;
   font-weight: bold;
   font-size: 3rem;
   margin: 1rem 0;
`

const Home = () => {
  return (
    <div>
      <Head>Popular Destinations</Head>
      <HomePara>tours give you the opportunity to see a lot ,within a time frame.</HomePara>
      <Cards
        image1="/Images/bedroom.jpg"
        image2="/Images/bike-riding1.webp"
        heading="Taal Volcano,Batangas"
        para="lorem50 LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps. It was launched on May 5, 2003 by Reid Hoffman and Eric Ly. Since December 2016, LinkedIn has been a wholly owned subsidiary of Microsoft.lorem50 LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps. It was launched on May 5, 2003 by Reid Hoffman and Eric Ly. Since December 2016, LinkedIn has been a wholly owned subsidiary of Microsoft"
      />

      <Cards
        heading="Taal Volcano,Batangas"
        para="lorem50 LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps. It was launched on May 5, 2003 by Reid Hoffman and Eric Ly. Since December 2016, LinkedIn has been a wholly owned subsidiary of Microsoft.lorem50 LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps. It was launched on May 5, 2003 by Reid Hoffman and Eric Ly. Since December 2016, LinkedIn has been a wholly owned subsidiary of Microsoft"
        image1="/Images/bedroom.jpg"
        image2="/Images/bike-riding1.webp"
        reverse={true}
      />

      {/* <Cards
        image1="/Images/bedroom.jpg"
        image2="/Images/bike-riding1.webp"
        heading="Thailand"
        para="lorem50 LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps. It was launched on May 5, 2003 by Reid Hoffman and Eric Ly. Since December 2016, LinkedIn has been a wholly owned subsidiary of Microsoft.lorem50 LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps. It was launched on May 5, 2003 by Reid Hoffman and Eric Ly. Since December 2016, LinkedIn has been a wholly owned subsidiary of Microsoft"
      /> */}

      {/* <Cards
        heading="Thailand"
        para="lorem50 LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps. It was launched on May 5, 2003 by Reid Hoffman and Eric Ly. Since December 2016, LinkedIn has been a wholly owned subsidiary of Microsoft.lorem50 LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps. It was launched on May 5, 2003 by Reid Hoffman and Eric Ly. Since December 2016, LinkedIn has been a wholly owned subsidiary of Microsoft"
        image1="/Images/bedroom.jpg"
        image2="/Images/bike-riding1.webp"
        reverse={true}
      /> */}



    </div>
  )
}

export default Home
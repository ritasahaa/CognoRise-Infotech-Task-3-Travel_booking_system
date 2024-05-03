import Cards from "./cards"

const Home = () => {
  return (
    <div>
      {/* <Cards/>
      <Cards />
      <Cards /> */}
      <Cards
        image1="/Images/bedroom.jpg"
        image2="/Images/bike-riding1.webp"
        heading="Thailand"
        para="lorem50 LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps. It was launched on May 5, 2003 by Reid Hoffman and Eric Ly. Since December 2016, LinkedIn has been a wholly owned subsidiary of Microsoft"
      />

      <Cards
        heading="Thailand"
        para="lorem50 LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps. It was launched on May 5, 2003 by Reid Hoffman and Eric Ly. Since December 2016, LinkedIn has been a wholly owned subsidiary of Microsoft"
        image1="/Images/bedroom.jpg"
        image2="/Images/bike-riding1.webp"
        reverse={true}
      />

      <Cards
        image1="/Images/bedroom.jpg"
        image2="/Images/bike-riding1.webp"
        heading="Thailand"
        para="lorem50 LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps. It was launched on May 5, 2003 by Reid Hoffman and Eric Ly. Since December 2016, LinkedIn has been a wholly owned subsidiary of Microsoft"
      />

      <Cards
        heading="Thailand"
        para="lorem50 LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps. It was launched on May 5, 2003 by Reid Hoffman and Eric Ly. Since December 2016, LinkedIn has been a wholly owned subsidiary of Microsoft"
        image1="/Images/bedroom.jpg"
        image2="/Images/bike-riding1.webp"
        reverse={true}
      />

    </div>
  )
}

export default Home
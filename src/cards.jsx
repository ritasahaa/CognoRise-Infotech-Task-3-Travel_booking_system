import styled from 'styled-components';


const Div = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   align-items: center;
   gap: 6rem;

   @media screen and (max-width: 1280px) {
      gap: 0;
      flex-direction: column;
      margin-bottom: 7rem;
    }

   p{
    width: 490px;
   }
`
const ImageContainer = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   order: 1;
   img:last-child {
    margin-bottom: 3rem;
    margin-left: .8rem;
   }
   @media screen and (max-width: 1280px) {
        order: 2;
      }
`

const Image = styled.img`
    border-radius: 9px;
    width: 260px;
    height: 300px;
`;

const Text=styled.div`
  width: 100%;
  max-width: 490px;
  order: 1; 

  @media screen and (max-width: 1280px) {
        order: 2; 
    }

    h1{
        text-align: center;
        font-size: 1.8rem;
        margin-bottom: .7rem;
    }
`

const Cards = ({ image1, image2, heading, para, reverse }) => {
    return (
        <Div className="container">
            {!reverse && (
                <ImageContainer className="images-container">
                    <Image src={image1} />
                    <Image src={image2}/>
                </ImageContainer>
            )}
            <Text className="text-container">
                <h1><b>{heading}</b></h1>
                <p>{para}</p>
            </Text>
            {reverse && (
                <ImageContainer className="images-container">
                    <Image src={image1} />
                    <Image src={image2}/>
                </ImageContainer>
            )}
        </Div>
    );
};

export default Cards;

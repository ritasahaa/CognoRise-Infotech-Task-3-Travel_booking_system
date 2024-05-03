import styled from 'styled-components';

const Div = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   align-items: center;
   gap: 1rem;
   height: 60vh;

   p{
    width: 490px;
   }
`
const ImageContainer = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   img:last-child {
    margin-top: 5rem;
    margin-left: 1rem;
   }
`

const Image = styled.img`
    width: 300px;
    height: 300px;
`;

const Cards = ({ image1, image2, heading, para, reverse }) => {
    return (
        <Div className="container">
            {!reverse && (
                <ImageContainer className="images-container">
                    <Image src={image1} />
                    <Image src={image2}/>
                </ImageContainer>
            )}
            <div className="text-container">
                <h1><b>{heading}</b></h1>
                <p>{para}</p>
            </div>
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

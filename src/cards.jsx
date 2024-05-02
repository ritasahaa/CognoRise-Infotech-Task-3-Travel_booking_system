import styled from 'styled-components';

const Div = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1rem;
`
const ImageContainer = styled.div`
   display: flex;
   align-items: center;
   img:last-child {
    margin-top: 5rem;
    margin-left: 1rem;
   }
`

const Image = styled.img`
    width: 300px;
    height: 380px;
`;

const Cards = () => {
    // console.log(props)
    return (
        <Div className="container">
            <ImageContainer className="images-container">
                <Image src="/Images/img2.jpg" alt="Image 1" />
                <Image src="/Images/img3.jpg" alt="Image 2" />
            </ImageContainer>
            <div className="text-container">
                <h1>Taal Volcano,Batangas</h1>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida odio eget ligula accumsan, vitae fringilla dui consectetur.</p>
            </div>
        </Div>
    )
}

export default Cards
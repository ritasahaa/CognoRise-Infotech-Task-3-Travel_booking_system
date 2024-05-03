import styled from 'styled-components';

const Content = styled.div`
    text-align: center;
    h1 {
        font-weight: bold;
        font-size: 2.3rem;
        margin-top: 3rem;
    }
    p {
        font-size: 1.2rem;
        margin: .2rem 0;
    }

    h2{
        text-align: left;
        font-weight: bold;
        font-size: 1.4rem;
    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 11px;
    width: 320px;
    margin-top: 1rem;
`;

const Images = styled.img`
    width: 320px;
    height: 200px;
    border-radius: 8px;
    margin-bottom: 10px;
`;

const CardPara=styled.p`
    text-align: left;
    margin-top: 4rem;
`

const RecentTrip = () => {
    // Sample data for cards
    const cardsData = [
        {
            image: '/Images/bike-riding1.webp',
            heading: 'Trip in Indonesia',
            para:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        },
        {
            image: '/Images/bike-riding1.webp',
            heading: 'Trip in Malaysia',
            para:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        },
        {
            image: '/Images/bike-riding1.webp',
            heading: 'Trip in France',
            para:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        },
        
        // Add more card data objects as needed
    ];

    return (
        <Content>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <CardContainer>
                {cardsData.map((card, index) => (
                    <Card key={index}>
                        <Images src={card.image} alt={card.heading} />
                        <h2>{card.heading}</h2>
                        <CardPara>{card.para}</CardPara>
                    </Card>
                ))}
            </CardContainer>
        </Content>
    );
};

export default RecentTrip;

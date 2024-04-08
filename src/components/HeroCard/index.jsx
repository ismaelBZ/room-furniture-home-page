import styled from 'styled-components';
import data from './../../data';
// 
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 550px) {
    flex-direction: row;
  }
`;

const ImageHero = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;
  object-position: 40% top;

  @media only screen and (min-width: 550px) {
    width: 50%;
    height: 60vh;
  }
  
  @media only screen and (max-height: 680px) {
    height: 80vh;
  }

  @media only screen and (max-height: 460px){
    height: 100vh;
  }
`;

const TextWrapper = styled.div`
  max-width: var(--textWidth);
  margin: 0 auto;
  height: 57vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media only screen and (min-width: 550px) {
    width: 50%;
    height: 60vh;
    padding: 0 1rem;
  }

  @media only screen and (min-width: 768px) {
    padding: 0 2rem;
  }

  @media only screen and (max-height: 680px) {
    height: 80vh;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 480px;
    justify-content: space-between;
    padding: 5%;
  }
  @media only screen and (max-height: 460px) {
    height: 100vh;
  }
`;

const Title = styled.h2`
  font-size: 2.15rem;
  letter-spacing: -1.5px;
`;

const Description = styled.p`
  font-size: 1rem;
  letter-spacing: -0.33px;
  line-height: 1.5;
  color: #a0a0a0;
`;

const ShopLink = styled.a`
  font-size: 0.98rem;
  letter-spacing: 10px;
  text-decoration: none;
  color: #131313;
  
  @media only screen and (min-width: 768px) {
    margin-bottom: 47px;
  }
`;

const Arrow = styled.svg`
  margin-left: 1rem;
  transform: scaleX(1.2) scaleY(1);
`;

const HeroCard = ({index}) => {
  return (
    <>
      <CardWrapper>
        <ImageHero
          src={data.hero[index].imgSrc}
          alt={data.hero[index].alt}
        />
        <TextWrapper>
          <Title>{data.hero[index].title}</Title>
          <Description>
            {data.hero[index].description}
          </Description>
          <ShopLink href="#" target="_blank">
            SHOP NOW <Arrow width="40" height="12" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/>
            </Arrow>
          </ShopLink>
        </TextWrapper>
      </CardWrapper>
    </>
  );
};

export { HeroCard };

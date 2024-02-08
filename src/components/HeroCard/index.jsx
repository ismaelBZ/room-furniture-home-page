import styled from 'styled-components';
import Image from './../../imgs/desktop-image-hero-1.jpg';
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

  @media only screen and (min-width: 1024px) {
    max-width: 570px;
    justify-content: space-between;
    padding: 5%;
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
`;

const Arrow = styled.svg`
  margin-left: 1rem;
  transform: scaleX(1.2) scaleY(1);
`;

const HeroCard = () => {
  return (
    <>
      <CardWrapper>
        <ImageHero
          src={Image}
          alt="High quality furniture in wood and white lacquer paint"
        />
        <TextWrapper>
          <Title>Discover innovative ways to decorate</Title>
          <Description>
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
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

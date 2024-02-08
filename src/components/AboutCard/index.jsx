import styled from 'styled-components'
import DarkImage from './../../imgs/image-about-dark.jpg';
import LightImage from './../../imgs/image-about-light.jpg';


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 550px) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 25vh;
  object-fit: cover;
  object-position: center;

  @media only screen and (min-width: 550px) {
    width: 50%;
    height: 40vh;

    &:first-child {
      display: none;
    }
  }

  @media only screen and (min-width: 768px) {

    width: 30%;

    &:first-child {
      display: block;
    }

  }

`;

const TextWrapper = styled.div`
  width: var(--textWidth);
  height: 50vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media only screen and (min-width: 550px) {
    height: 40vh;
    padding: 0 1rem;
  }

  @media only screen and (min-width: 1024px) {
    padding: 3%;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 575px;
  }
  
`;

const Title = styled.h2`
  font-size: 1rem;
  letter-spacing: 0.3875rem;
`;

const Description = styled.p`
    font-size: 1rem;
    letter-spacing: -0.33px;
    line-height: 1.5;
    color: #a0a0a0;

    @media only screen and (min-width: 550px) {
      
    }
`;





const AboutCard = () => {
  return (
    <CardWrapper>
      <Image src={DarkImage} alt="3d image of a sofisticated room, with circular center wood table and an armchair in black linen fabric with inox thin circular arms" />
      <TextWrapper>
        <Title>ABOUT OUR FURNITURE</Title>
        <Description>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </Description>
      </TextWrapper>
      <Image src={LightImage} alt="" />
    </CardWrapper>
  );
};

export { AboutCard };

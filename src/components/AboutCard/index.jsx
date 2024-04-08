import data from '../../data'
import styled from 'styled-components'

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

  @media only screen and (max-height: 680px) {
    height: 60vh;
  }

  @media only screen and (max-height: 460px) {
    height: 100vh;
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

  @media only screen and (max-height: 680px) {
    height: 60vh;
  }

  @media only screen and (min-width: 1024px) {
    padding: 3%;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 575px;
  }
  
  @media only screen and (max-height: 460px) {
    height: 100vh;
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
      <Image src={data.about.imgDarkSrc} alt="" />
      <TextWrapper>
        <Title>{data.about.title}</Title>
        <Description>
          {data.about.description}
        </Description>
      </TextWrapper>
      <Image src={data.about.imgLightSrc} alt="" />
    </CardWrapper>
  );
};

export { AboutCard };

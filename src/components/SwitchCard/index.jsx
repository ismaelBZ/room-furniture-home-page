import styled from 'styled-components';
import Left from './../../imgs/icon-angle-left.svg';
import Right from './../../imgs/icon-angle-right.svg';

const Wrapper = styled.div`
  position: absolute;
  bottom: 40vh;
  right: 30%;

  @media only screen and (max-width: 768px) {
    right: 50%;
  }

  @media only screen and (max-width: 550px) {
    bottom: 60vh;
    right: 0;
  }

  @media only screen and (max-height: 680px) {
    bottom: 20vh;
  }
  `;

const PreviousCard = styled.button`
  padding: 10px 0;
  width: 10vw;
  max-width: 144px;
  border: none;
  background-color: #000;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #444;
  }
`;

const NextCard = styled(PreviousCard)``;

const IconWrapper = styled.img`
  transform: scale(0.7);
`;

const SwitchCard = ({nextCard, previousCard}) => {

  return (
    <Wrapper>
      <PreviousCard onClick={previousCard}>
        <IconWrapper src={Left} alt="Previous Card" />
      </PreviousCard>
      <NextCard onClick={nextCard}>
        <IconWrapper src={Right} alt="Next Card" />
      </NextCard>
    </Wrapper>
  );
};

export { SwitchCard };

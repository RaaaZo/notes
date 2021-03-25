import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeButtons = () => {
  return (
    <ButtonsWrapper>
      <Link to='/new-note'>NEW NOTE</Link>
      <Link to='/about'>ABOUT US</Link>
    </ButtonsWrapper>
  );
};

const ButtonsWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;

  a {
    font-family: ${({ theme }) => theme.pangolin};
    font-weight: 700;
    padding: 2rem 3rem;
    border: 2px solid ${({ theme }) => theme.darkAccents};
    border-radius: 25px;
    transition: all 0.3s linear;
  }

  a:hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.darkAccents};
  }

  @media screen and (orientation: landscape) and (max-width: 768px) {
    margin-left: 15rem;
  }

  @media screen and (min-width: 650px) {
    margin-left: 12rem;
    margin-right: 3rem;
  }

  @media screen and (min-width: 1024px) {
    margin-right: auto;
  }
`;

export default HomeButtons;

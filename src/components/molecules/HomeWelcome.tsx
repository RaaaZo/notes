import { motion } from 'framer-motion';
import styled from 'styled-components';
import HomeButtons from './HomeButtons';

const HomeWelcome = () => {
  return (
    <WelcomeWrapper>
      <h1>MAKE YOUR NOTES HANDY</h1>
      <h3>YOUR NOTES</h3>
      <p>
        Can simply increase the speed of making notes. And keep Your notes
        always with You. That's end with forgetting your notebooks to school.
        Now You need only access to the Internet!
      </p>
      <HomeButtons />
    </WelcomeWrapper>
  );
};

const WelcomeWrapper = styled(motion.div)`
  width: 100%;

  h1 {
    font-size: 2.6rem;
  }

  h3 {
    font-size: 4.5rem;
    color: ${({ theme }) => theme.darkAccents};
    margin-top: 1rem;
  }

  p {
    text-align: justify;
    font-size: 1.6rem;
    margin-top: 3rem;
    color: #4b4b4b;
  }

  @media screen and (orientation: landscape) and (max-width: 768px) {
    margin-top: 6rem;
    width: 80%;

    h1,
    h3 {
      margin-left: 5rem;
    }

    p {
      margin-left: 15rem;
    }
  }

  @media screen and (min-width: 1024px) {
    max-width: 500px;
    h1,
    h3 {
      margin-left: 3rem;
    }

    p {
      margin-left: 12rem;
    }
  }
`;

export default HomeWelcome;

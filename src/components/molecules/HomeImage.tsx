import { motion } from 'framer-motion';
import styled from 'styled-components';
import image from 'assets/images/home.png';

const HomeImage = () => {
  return (
    <ImageWrapper>
      <img src={image} alt='A man whose making some notes' />
    </ImageWrapper>
  );
};

const ImageWrapper = styled(motion.div)`
  display: none;
  position: relative;

  @media screen and (min-width: 1024px) {
    display: block;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: -20rem;
      bottom: 0;
      width: 700px;
      height: 700px;
      background-color: ${({ theme }) => theme.darkAccents};
      border-radius: 50%;
      z-index: -1;
    }

    img {
      border-bottom-left-radius: 25%;
      object-fit: contain;
    }
  }

  @media screen and (min-width: 1200px) {
    &::before {
      top: -10rem;
      right: -30rem;
      width: 900px;
      height: 900px;
    }
  }

  @media screen and (min-width: 1400px) {
    &::before {
      top: -20rem;
      right: -50rem;
      width: 1100px;
      height: 1000px;
    }
  }
`;

export default HomeImage;

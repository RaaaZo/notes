import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MotionCircle = styled(motion.div)`
  display: none;

  @media (min-width: 992px) {
    display: block;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    position: absolute;
    top: 15rem;
    right: -20rem;
    z-index: -1;
    background-color: ${({ theme }) => theme.darkAccents};
  }

  @media (min-width: 1200px) {
    width: 700px;
    height: 700px;
    top: 13rem;
    right: -17rem;
  }

  @media (min-width: 1600px) {
    width: 800px;
    height: 800px;
  }
`;

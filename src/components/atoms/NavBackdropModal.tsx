import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Props {
  isMenuOpen: boolean;
}

const drawerVariants = {
  open: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  closed: { opacity: 0, x: '100%' },
};

const NavBackdropModal: React.FC<Props> = ({ isMenuOpen }) => {
  return (
    <Modal
      variants={drawerVariants}
      animate={isMenuOpen ? 'open' : 'closed'}
      initial='closed'
    />
  );
};

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.6);
  z-index: 5;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export default NavBackdropModal;

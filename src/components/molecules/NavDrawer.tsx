import { motion } from 'framer-motion';
import styled from 'styled-components';
import NavLinkList from './NavLinkList';

interface Props {
  isMenuOpen: boolean;
  handleDrawerVisibility: () => void;
}

const drawerVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '100%' },
};

const NavDrawer: React.FC<Props> = ({ handleDrawerVisibility, isMenuOpen }) => {
  return (
    <DrawerWrapper
      variants={drawerVariants}
      animate={isMenuOpen ? 'open' : 'closed'}
    >
      <NavLinkList handleDrawer={handleDrawerVisibility} drawer={true} />
    </DrawerWrapper>
  );
};

const DrawerWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 25rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.white};
  -webkit-box-shadow: -2px 0px 15px 3px #000;
  box-shadow: -1px 0px 15px 3px #000;

  @media screen and (min-width: 450px) {
    width: 35rem;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export default NavDrawer;

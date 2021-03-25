import Logo from 'components/atoms/Logo';
import NavLinkList from 'components/molecules/NavLinkList';
import styled from 'styled-components';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import NavDrawer from 'components/molecules/NavDrawer';
import { useState } from 'react';
import NavBackdropModal from 'components/atoms/NavBackdropModal';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerVisibility = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <NavDrawer
        isMenuOpen={isOpen}
        handleDrawerVisibility={handleDrawerVisibility}
      />
      <NavBackdropModal isMenuOpen={isOpen} />

      <NavWrapper>
        <Logo />
        <NavLinkList />
        <button onClick={handleDrawerVisibility}>
          <HiOutlineMenuAlt3 />
        </button>
      </NavWrapper>
    </>
  );
};

const NavWrapper = styled.div`
  height: 15rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button {
    position: absolute;
    top: 5rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin-right: 2rem;
    z-index: 100;
    border: none;

    svg {
      width: 100%;
      height: 100%;
    }

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
`;

export default NavBar;

import { useAuth } from 'auth/useAuth';
import NavLink from 'components/atoms/NavLink';
import {
  IsLoggedContext,
  IsLoggedContextInterface,
} from 'context/IsLoggedContext';
import { links } from 'data/navigation-data';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  drawer?: boolean;
  handleDrawer?: () => void;
}

const NavLinkList: React.FC<Props> = ({ drawer, handleDrawer }) => {
  const { isLogged, setIsLogged } = useContext(
    IsLoggedContext
  ) as IsLoggedContextInterface;

  const { logoutUser } = useAuth();

  const handleSignOutButton = () => {
    setIsLogged(false);
    logoutUser();
  };

  return (
    <LinkList drawer={drawer}>
      {links.map(({ id, link, name }) => (
        <NavLink handleDrawer={handleDrawer} key={id} link={link} name={name} />
      ))}

      {isLogged ? (
        <SignOutButton onClick={handleSignOutButton} to='/'>
          Sign Out
        </SignOutButton>
      ) : (
        <NavLink handleDrawer={handleDrawer} link='/sign-in' name='Sign In' />
      )}
    </LinkList>
  );
};

const SignOutButton = styled(Link)`
  width: 100%;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  transition: color 0.3s linear;

  &:hover {
    color: ${({ theme }) => theme.darkAccents};
  }

  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const LinkList = styled.ul<Props>`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.drawer ? 'flex' : 'none')};
  flex-direction: ${(props) => (props.drawer ? 'column' : 'row')};
  padding-top: ${(props) => (props.drawer ? '12rem' : 0)};
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-grow: 2;
  }
`;

export default NavLinkList;

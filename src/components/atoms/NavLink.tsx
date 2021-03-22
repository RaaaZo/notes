import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  link: string;
  name: string;
  handleDrawer?: () => void;
}

const NavLink: React.FC<Props> = ({ link, name, handleDrawer }) => {
  return (
    <StyledLink onClick={handleDrawer} exact activeClassName='active' to={link}>
      {name}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  width: 100%;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  transition: color 0.3s linear;

  &.active {
    color: ${({ theme }) => theme.darkAccents};
  }

  &:hover {
    color: ${({ theme }) => theme.darkAccents};
  }

  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export default NavLink;

import NavLink from 'components/atoms/NavLink';
import { links } from 'data/navigation-data';
import styled from 'styled-components';

interface Props {
  drawer?: boolean;
  handleDrawer?: () => void;
}

const NavLinkList: React.FC<Props> = ({ drawer, handleDrawer }) => {
  return (
    <LinkList drawer={drawer}>
      {links.map(({ id, link, name }) => (
        <NavLink handleDrawer={handleDrawer} key={id} link={link} name={name} />
      ))}
    </LinkList>
  );
};

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

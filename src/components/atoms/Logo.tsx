import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo: React.FC = () => {
  return (
    <LogoWrapper>
      <Link to='/'>Notes</Link>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  position: relative;
  margin-left: 2rem;
  margin-right: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    position: absolute;
    content: '';
    width: 25rem;
    height: 25rem;
    background-color: ${({ theme }) => theme.lightAccents};
    border-radius: 50%;
    z-index: -1;
  }

  a {
    font-family: ${({ theme }) => `${theme.pangolin}, ${theme.roboto}`};
    font-weight: 700;
    font-size: 3rem;
    text-align: center;
  }

  @media screen and (min-width: 450px) {
    &::before {
      width: 30rem;
      height: 30rem;
    }

    a {
      font-size: 3.5rem;
    }
  }

  @media screen and (min-width: 600px) {
    margin-left: 3rem;
    &::before {
      width: 35rem;
      height: 35rem;
    }
  }

  @media screen and (min-width: 1024px) {
    &::before {
      width: 40rem;
      height: 40rem;
    }

    a {
      font-size: 4rem;
    }
  }
`;

export default Logo;

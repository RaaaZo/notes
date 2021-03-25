import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  linkTxt: string;
  link: string;
  text: string;
}

const AccountParagraph: React.FC<Props> = ({ text, link, linkTxt }) => {
  return (
    <SignUpParagraph>
      {text} <Link to={link}>{linkTxt}</Link>
    </SignUpParagraph>
  );
};

const SignUpParagraph = styled.p`
  margin-top: 2rem;
  text-align: center;

  a {
    font-size: 2.2rem;
    font-family: ${({ theme }) => theme.pangolin};
    font-weight: 700;
    color: ${({ theme }) => theme.darkAccents};
    transition: color 0.3s linear;
  }
  a:hover {
    color: 000;
  }

  @media (min-width: 576px) {
    margin-top: 3rem;
  }
`;

export default AccountParagraph;

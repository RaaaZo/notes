import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <a href='https://github.com/RaaaZo'> Made with 🖤 by RaaaZo</a>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.lightAccents};

  a {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.pangolin};
    font-weight: 700;
  }
`;

export default Footer;

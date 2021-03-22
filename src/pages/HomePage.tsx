import Footer from 'components/molecules/Footer';
import HomeImage from 'components/molecules/HomeImage';
import HomeWelcome from 'components/molecules/HomeWelcome';
import styled from 'styled-components';

const HomePage: React.FC = () => {
  return (
    <>
      <PageWrapper>
        <HomeWelcome />
        <HomeImage />
      </PageWrapper>
      <Footer />
    </>
  );
};

const PageWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem auto;
  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    margin: 15rem 3rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 15rem auto;
    display: flex;
  }
`;

export default HomePage;

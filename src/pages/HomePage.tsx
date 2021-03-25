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
  min-height: calc(100vh - 15rem - 3rem);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  padding: 0 2rem;

  @media (min-width: 576px) {
    padding: 5rem 2rem 10rem 2rem;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export default HomePage;

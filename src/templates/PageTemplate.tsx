import { PageWrapper } from 'components/atoms/PageWrapper';
import Footer from 'components/molecules/Footer';

const PageTemplate: React.FC = ({ children }) => {
  return (
    <>
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </>
  );
};

export default PageTemplate;

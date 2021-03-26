import { PageWrapper } from 'components/atoms/PageWrapper';
import Footer from 'components/molecules/Footer';

interface Props {
  profile?: boolean;
}

const PageTemplate: React.FC<Props> = ({ children, profile }) => {
  return (
    <>
      <PageWrapper profile={profile}>{children}</PageWrapper>
      <Footer />
    </>
  );
};

export default PageTemplate;

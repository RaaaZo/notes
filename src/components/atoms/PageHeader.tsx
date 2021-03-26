import styled from 'styled-components';

const PageHeader: React.FC = ({ children }) => {
  return <PageHeading>{children}</PageHeading>;
};

const PageHeading = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

export default PageHeader;

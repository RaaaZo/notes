import styled from 'styled-components';

interface Props {
  error: string;
}

const FetchError: React.FC<Props> = ({ error }) => {
  return (
    <ErrorWrapper>
      <p>{error}</p>
    </ErrorWrapper>
  );
};

const ErrorWrapper = styled.div`
  color: red;
  margin-top: 1rem;
  font-weight: 700;
`;

export default FetchError;

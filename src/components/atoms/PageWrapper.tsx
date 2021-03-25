import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: calc(100vh - 15rem - 3rem - 10rem);
  margin: 5rem 2rem 5rem 2rem;

  @media (min-width: 576px) {
    padding-bottom: 10rem;
  }

  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 15rem - 3rem - 20rem);
    margin-top: 15rem;
  }
`;

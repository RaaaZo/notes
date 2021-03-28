import styled from 'styled-components';

export const ProfileSectionWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.darkAccents};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 576px) {
    padding: 2rem;
  }

  @media (min-width: 768px) {
    max-width: 700px;
    padding: 3rem;
  }

  @media (min-width: 992px) {
    max-width: 1360px;
    margin: 0;
  }
`;

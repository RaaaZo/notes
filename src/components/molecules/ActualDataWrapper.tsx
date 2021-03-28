import { ProfileSectionWrapper } from 'components/atoms/ProfileSectionWrapper';
import styled from 'styled-components';

export const ActualDataWrapper = styled(ProfileSectionWrapper)`
  margin-bottom: 2rem;

  span {
    font-family: ${({ theme }) => theme.pangolin};
    font-weight: 700;
    color: ${({ theme }) => theme.darkAccents};
  }

  @media (min-width: 576px) {
    margin-bottom: 3rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
    width: 45%;
    padding: 5rem 2rem;
  }
`;

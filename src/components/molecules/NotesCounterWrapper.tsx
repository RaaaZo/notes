import { ProfileSectionWrapper } from 'components/atoms/ProfileSectionWrapper';
import styled from 'styled-components';

export const NotesCounterWrapper = styled(ProfileSectionWrapper)`
  margin-bottom: 2rem;

  p {
    text-align: center;
    font-weight: 700;
  }

  a {
    display: block;
    font-family: ${({ theme }) => theme.pangolin};
    font-weight: 700;
    color: ${({ theme }) => theme.darkAccents};
    text-decoration: underline;
    text-align: center;
  }

  @media (min-width: 576px) {
    margin-bottom: 3rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }

  @media (min-width: 992px) {
    width: 100%;
  }
`;

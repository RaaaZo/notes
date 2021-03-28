import styled from 'styled-components';
import { ProfileSectionWrapper } from 'components/atoms/ProfileSectionWrapper';

export const ChangeDataWrapper = styled(ProfileSectionWrapper)`
  .buttons__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  button {
    width: 25rem;
    height: 6rem;
    border: 2px solid ${({ theme }) => theme.darkAccents};
    border-radius: 15px;
    font-family: ${({ theme }) => theme.pangolin};
    font-weight: 700;
    font-size: 1.8rem;
    margin: 2rem auto;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .buttons__wrapper {
      flex-direction: row;
    }
  }

  @media (min-width: 992px) {
    width: 45%;
    padding: 5rem 2rem;

    .buttons__wrapper {
      flex-direction: column;
    }
  }
`;

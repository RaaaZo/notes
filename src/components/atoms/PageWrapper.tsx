import styled, { css } from 'styled-components';

export const PageWrapper = styled.div<{ profile: boolean | undefined }>`
  min-height: calc(100vh - 15rem - 3rem - 10rem);
  margin: 5rem 2rem 5rem 2rem;

  @media (min-width: 576px) {
    padding-bottom: 10rem;
  }

  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 15rem - 3rem - 20rem);
    margin-top: 15rem;
  }

  ${({ profile }) =>
    profile &&
    css`
      @media (min-width: 992px) {
        margin: 15rem auto 5rem auto;
        max-width: 1360px;
        width: 95%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    `}
`;

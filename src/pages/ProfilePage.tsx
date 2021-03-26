import PageHeader from 'components/atoms/PageHeader';
import {
  UserDataContext,
  UserDataContextInterface,
} from 'context/UserDataContext';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';

const ProfilePage = () => {
  const { userData } = useContext(UserDataContext) as UserDataContextInterface;

  const { createDate, email, notes, username } = userData!;

  const createDateForDisplay = String(createDate).slice(0, 10);

  return (
    <PageTemplate profile={true}>
      <PageHeader>{username} Profile</PageHeader>
      <NotesCounterWrapper>
        <p>You have {notes.length} notes.</p>
        {notes.length === 0 ? (
          <Link to='/new-note'>WRITE YOUR FIRST NOTE</Link>
        ) : (
          <Link to='/notes'> READ THEM THERE</Link>
        )}
      </NotesCounterWrapper>

      <ActualDataWrapper>
        <h3>CURRENT USER DATA:</h3>
        <p>
          Username: <span>{username}</span>
        </p>
        <p>
          Email: <span>{email}</span>
        </p>
        <p>
          Created at: <span>{createDateForDisplay}</span>
        </p>
      </ActualDataWrapper>

      <ChangeDataWrapper>
        <h3>CHANGE YOUR DATA:</h3>
        <div className='buttons__wrapper'>
          <motion.button whileHover={{ backgroundColor: '#DEB316' }}>
            Change Username
          </motion.button>
          <motion.button whileHover={{ backgroundColor: '#DEB316' }}>
            Change Email
          </motion.button>
        </div>
      </ChangeDataWrapper>
    </PageTemplate>
  );
};

const SectionWrapper = styled.div`
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

const ChangeDataWrapper = styled(SectionWrapper)`
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

const ActualDataWrapper = styled(SectionWrapper)`
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

const NotesCounterWrapper = styled(SectionWrapper)`
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

export default ProfilePage;

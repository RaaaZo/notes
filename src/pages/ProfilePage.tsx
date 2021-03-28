import PageHeader from 'components/atoms/PageHeader';
import { ActualDataWrapper } from 'components/molecules/ActualDataWrapper';
import { ChangeDataWrapper } from 'components/molecules/ChangeDataWrapper';
import { NotesCounterWrapper } from 'components/molecules/NotesCounterWrapper';
import {
  UserDataContext,
  UserDataContextInterface,
} from 'context/UserDataContext';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageTemplate from 'templates/PageTemplate';

const ProfilePage = () => {
  const { push } = useHistory();
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
          <motion.button
            onClick={() => push('/profile/change-username')}
            whileHover={{ backgroundColor: '#DEB316' }}
          >
            Change Username
          </motion.button>
          <motion.button
            onClick={() => push('/profile/change-email')}
            whileHover={{ backgroundColor: '#DEB316' }}
          >
            Change Email
          </motion.button>
        </div>
      </ChangeDataWrapper>
    </PageTemplate>
  );
};

export default ProfilePage;

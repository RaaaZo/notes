import PageHeader from 'components/atoms/PageHeader';
import {
  UserDataContext,
  UserDataContextInterface,
} from 'context/UserDataContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';

const ProfilePage = () => {
  const { userData } = useContext(UserDataContext) as UserDataContextInterface;

  const { createDate, email, notes, username } = userData!;

  return (
    <PageTemplate>
      <PageHeader>{username} Profile</PageHeader>
      <NotesCounterWrapper>
        <p>You have {notes.length} notes. Look them</p>{' '}
        <Link to='/notes'>THERE</Link>
      </NotesCounterWrapper>
    </PageTemplate>
  );
};

const NotesCounterWrapper = styled.div`
  p {
    display: inline-block;
  }

  a {
    font-family: ${({ theme }) => theme.pangolin};
    font-weight: 700;
    color: ${({ theme }) => theme.darkAccents};
  }
`;

export default ProfilePage;

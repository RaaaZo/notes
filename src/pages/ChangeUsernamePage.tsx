import { useAuth } from 'auth/useAuth';
import FormButton from 'components/atoms/FormButton';
import Loader from 'components/atoms/Loader';
import { MotionCircle } from 'components/atoms/MotionCircle';
import PageHeader from 'components/atoms/PageHeader';
import { StyledFormikForm } from 'components/atoms/StyledFormikForm';
import AccountParagraph from 'components/molecules/AccountParagraph';
import FetchError from 'components/molecules/FetchError';
import FormikTextInput from 'components/molecules/FormikTextInput';
import ChangeDataBackdrop from 'components/organisms/SuccessfulChangeDataBackdrop';
import {
  UserDataContext,
  UserDataContextInterface,
} from 'context/UserDataContext';
import { Formik } from 'formik';
import { useContext } from 'react';
import PageTemplate from 'templates/PageTemplate';
import * as Yup from 'yup';

const ChangeUsernamePage = () => {
  const { changeUsername, error, isLoading, response, logoutUser } = useAuth();
  const { userData } = useContext(UserDataContext) as UserDataContextInterface;
  const { username, email } = userData!;

  return (
    <>
      {isLoading && <Loader />}

      {response?.success === true && (
        <ChangeDataBackdrop
          handleClick={logoutUser}
          message={response.message}
        />
      )}

      <PageTemplate>
        <PageHeader>Change Username</PageHeader>

        <MotionCircle
          animate={{
            scale: [1, 0.4, 0.8, 0.6, 1],
            borderRadius: ['50%', '30%', '40%', '50%', '50%'],
            transition: { duration: 15 },
          }}
        />

        <Formik
          initialValues={{
            username,
            newUsername: '',
            password: '',
          }}
          onSubmit={async (values) => {
            const { newUsername, password } = values;
            await changeUsername(newUsername, password, email);
          }}
          validationSchema={Yup.object({
            newUsername: Yup.string()
              .required('Required')
              .min(3, 'Must be 3 characters or more')
              .max(20, 'Must be 20 characters or less'),
            password: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .min(6, 'Must be 6 characters or more')
              .required('Required'),
          })}
        >
          <StyledFormikForm>
            <FormikTextInput
              disabled={true}
              label='Actual Username'
              name='username'
              type='text'
            />

            <FormikTextInput
              label='New Username'
              name='newUsername'
              placeholder='New Username'
              type='text'
            />

            <FormikTextInput
              label='Password'
              name='password'
              placeholder='Password'
              type='password'
            />

            {error && <FetchError error={error} />}
            {response?.success === false && (
              <FetchError error={response.message} />
            )}

            <FormButton type='submit'>Change Username</FormButton>
          </StyledFormikForm>
        </Formik>

        <AccountParagraph
          link='/profile'
          linkTxt='Go Back!'
          text="You won't change Your username?"
        />
      </PageTemplate>
    </>
  );
};

export default ChangeUsernamePage;

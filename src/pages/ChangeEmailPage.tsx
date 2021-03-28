import { theme } from 'assets/styles/theme';
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

const ChangeEmailPage = () => {
  const { changeEmail, error, isLoading, response, logoutUser } = useAuth();
  const { userData } = useContext(UserDataContext) as UserDataContextInterface;

  const { email } = userData!;

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
        <PageHeader>Change Email</PageHeader>

        <MotionCircle
          animate={{
            scale: [1, 0.4, 0.8, 0.6, 1],
            borderRadius: ['50%', '30%', '40%', '50%', '50%'],
            transition: { duration: 15 },
          }}
        />

        <Formik
          initialValues={{
            email,
            newEmail: '',
            password: '',
          }}
          onSubmit={async (values) => {
            const { email, newEmail, password } = values;
            await changeEmail(email, newEmail, password);
          }}
          validationSchema={Yup.object({
            email: Yup.string().email('Provide correct email'),
            newEmail: Yup.string().email('Provide correct email'),
            password: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .min(6, 'Must be 6 characters or more')
              .required('Required'),
          })}
        >
          <StyledFormikForm>
            <FormikTextInput
              disabled={true}
              label='Actual Email'
              name='email'
              type='email'
            />

            <FormikTextInput
              label='New Email'
              name='newEmail'
              placeholder='New Email'
              type='email'
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

export default ChangeEmailPage;

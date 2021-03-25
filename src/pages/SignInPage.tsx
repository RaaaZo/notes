import { useAuth } from 'auth/useAuth';
import { StyledFormikForm } from 'components/atoms/StyledFormikForm';
import FormikTextInput from 'components/molecules/FormikTextInput';
import { Formik } from 'formik';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import * as Yup from 'yup';
import Loader from 'components/atoms/Loader';
import { MotionCircle } from 'components/atoms/MotionCircle';
import AccountParagraph from 'components/molecules/AccountParagraph';
import FetchError from 'components/molecules/FetchError';
import PageHeader from 'components/atoms/PageHeader';
import FormButton from 'components/atoms/FormButton';

const SignInPage = () => {
  const { authUser, error, isLoading } = useAuth();

  return (
    <>
      {isLoading && <Loader />}

      <MotionCircle
        animate={{
          scale: [1, 0.8, 1.05, 0.85, 1],
          x: [0, -100, 0, 50, 0],
          borderRadius: ['50%', '20%', '40%', '30%', '50%'],
          transition: { duration: 15 },
        }}
      />

      <PageTemplate>
        <PageHeader>Sign In</PageHeader>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={async (values) => {
            const { email, password } = values;

            await authUser(email, password);
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .required('Required')
              .email('Must be valid email'),
            password: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .min(6, 'Must be 6 characters or more')
              .required('Required'),
          })}
        >
          <StyledFormikForm>
            <FormikTextInput
              label='Email'
              name='email'
              placeholder='Email'
              type='email'
            />
            <FormikTextInput
              label='Password'
              name='password'
              placeholder='Password'
              type='password'
            />

            {error && <FetchError error={error} />}

            <FormButton type='submit'>Sign In</FormButton>
          </StyledFormikForm>
        </Formik>

        <AccountParagraph
          link='/sign-up'
          linkTxt='Sign Up!'
          text="You don't have an account?"
        />
      </PageTemplate>
    </>
  );
};

export default SignInPage;

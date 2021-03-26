import { useAuth } from 'auth/useAuth';
import FormButton from 'components/atoms/FormButton';
import Loader from 'components/atoms/Loader';
import { MotionCircle } from 'components/atoms/MotionCircle';
import PageHeader from 'components/atoms/PageHeader';
import { StyledFormikForm } from 'components/atoms/StyledFormikForm';
import AccountParagraph from 'components/molecules/AccountParagraph';
import FetchError from 'components/molecules/FetchError';
import FormikTextInput from 'components/molecules/FormikTextInput';
import { Formik } from 'formik';
import PageTemplate from 'templates/PageTemplate';
import * as Yup from 'yup';

const SignUpPage = () => {
  const { registerUser, error, isLoading } = useAuth();

  return (
    <PageTemplate>
      {isLoading && <Loader />}

      <MotionCircle
        animate={{
          scale: [1, 0.6, 1.05, 0.85, 1],
          borderRadius: ['50%', '20%', '45%', '35%', '50%'],
          transition: { duration: 15 },
        }}
      />

      <PageHeader>Sign Up</PageHeader>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().required('Required').email('Must be valid email'),
          password: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .min(6, 'Must be 6 characters or more')
            .required('Required'),
          confirmPassword: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .min(6, 'Must be 6 characters or more')
            .required('Required'),
          username: Yup.string()
            .min(3, 'Must be 3 characters or more')
            .max(20, 'Must be 20 characters or less'),
        })}
        onSubmit={async (values) => {
          const { confirmPassword, email, password, username } = values;
          await registerUser(username, password, confirmPassword, email);
        }}
      >
        <StyledFormikForm>
          <FormikTextInput
            label='Email'
            name='email'
            placeholder='Email'
            type='email'
          />
          <FormikTextInput
            label='Username'
            name='username'
            placeholder='Username'
            type='text'
          />
          <FormikTextInput
            label='Password'
            name='password'
            placeholder='Password'
            type='password'
          />
          <FormikTextInput
            label='Confirm password'
            name='confirmPassword'
            placeholder='Confirm password'
            type='password'
          />

          {error && <FetchError error={error} />}

          <FormButton type='submit'>Sign Up</FormButton>
        </StyledFormikForm>
      </Formik>

      <AccountParagraph
        link='/sign-in'
        linkTxt='Sign In!'
        text='You have an account?'
      />
    </PageTemplate>
  );
};

export default SignUpPage;

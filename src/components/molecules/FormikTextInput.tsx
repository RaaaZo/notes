import { useField } from 'formik';
import styled from 'styled-components';

interface Props {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const FormikTextInput: React.FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <StyledFormItem>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </StyledFormItem>
  );
};

const StyledFormItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    display: block;
    margin: 1rem auto;
    font-weight: 700;
  }

  input {
    display: block;
    width: 30rem;
    height: 5rem;
    font-size: 1.8rem;
    text-align: center;
    border-radius: 15px;
    border: 2px solid ${({ theme }) => theme.darkAccents};
    background-color: ${({ theme }) => theme.white};
    -moz-outline-radius: 15px;
  }

  .error {
    margin: 1rem;
    color: red;
    font-size: 1.4rem;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    input {
      width: 35rem;
      height: 5.5rem;
    }

    .error {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 992px) {
    margin: 1rem;

    label {
      font-size: 2.2rem;
    }

    input {
      width: 40rem;
    }
  }
`;

export default FormikTextInput;

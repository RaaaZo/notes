import styled from 'styled-components';

interface Props {
  type: 'button' | 'submit' | 'reset' | undefined;
}

const FormButton: React.FC<Props> = ({ children, type }) => {
  return <Button type={type}>{children}</Button>;
};

const Button = styled.button`
  margin-top: 2rem;
  font-size: 2.2rem;
  font-family: ${({ theme }) => theme.pangolin};
  font-weight: 700;
  padding: 1rem 5rem;
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.darkAccents};
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s linear, transform 0.3s linear;

  &:hover {
    background-color: ${({ theme }) => theme.darkAccents};
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    padding: 1.5rem 7rem;
  }

  @media (min-width: 992px) {
    margin-top: 4rem;
  }
`;

export default FormButton;

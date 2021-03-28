import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Props {
  handleClick: () => void;
  message: string;
}

const ChangeDataBackdrop: React.FC<Props> = ({ handleClick, message }) => {
  return (
    <SuccessfulChangeDataBackdrop>
      <div className='inner_dialog'>
        <h3>{message}</h3>
        <motion.button
          onClick={handleClick}
          whileHover={{ backgroundColor: '#DEB316' }}
        >
          Ok!
        </motion.button>
      </div>
    </SuccessfulChangeDataBackdrop>
  );
};

const SuccessfulChangeDataBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1000;

  .inner_dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 350px;
    height: 350px;
    background-color: ${({ theme }) => theme.lightAccents};
    border-radius: 15px;
  }

  h3 {
    text-align: center;
  }

  button {
    width: 200px;
    height: 50px;
    font-family: ${({ theme }) => theme.pangolin};
    font-weight: 700;
    font-size: 2rem;
    border: 2px solid ${({ theme }) => theme.darkAccents};
    border-radius: 15px;
    cursor: pointer;
  }

  @media (min-width: 576px) {
    .inner_dialog {
      padding: 2rem;
      width: 450px;
      height: 450px;
    }
  }

  @media (min-width: 768px) {
    .inner_dialog {
      padding: 4rem;
    }

    button {
      font-size: 2.5rem;
      width: 250px;
      height: 65px;
    }
  }

  @media (min-width: 992px) {
    .inner_dialog {
      width: 600px;
      height: 600px;
      padding: 6rem;
    }
    button {
      width: 300px;
      height: 65px;
    }
  }
`;

export default ChangeDataBackdrop;

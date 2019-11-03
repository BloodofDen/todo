import styled from 'styled-components';
import { DARK_MAGENTA } from '../../shared/colors';

export const ToDoListContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3vh 13vw;
`;

export const ToDoListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: 3rem;
  color: ${DARK_MAGENTA};
  margin: 1rem;
`;

export const OrderPoint = styled.p`
  margin-right: 10px;
`;

const styles = () => ({
  textField: {
    padding: '0 15px',
    '& label.Mui-focused': {
      color: DARK_MAGENTA,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: DARK_MAGENTA,
      },
    },
  },
  inputLabel: {
    paddingLeft: 20,
  },
  list: {
    padding: '0 20px',
    marginTop: '1rem',
    overflowY: 'auto',
  }
});

export default styles;

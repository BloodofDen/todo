import styled from 'styled-components';

export const ToDoListContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ToDoListWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 30vh;
`;

export const Heading = styled.h1`
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: 3rem;
  color: darkmagenta;
  margin: 1rem;
`;

const styles = () => ({
  textField: {
    padding: '0 15px',
    '& label.Mui-focused': {
      color: 'darkmagenta',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'darkmagenta',
      },
    },
  },
  inputLabel: {
    paddingLeft: 20,
  },
});

export default styles;

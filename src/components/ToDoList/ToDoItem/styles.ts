import styled from 'styled-components';

export const OrderPoint = styled.p`
  margin-right: 10px;
`;

const styles = () => ({
  listItem: {
    '&:hover > div:last-child': {
      display: 'block',
    },
  },
  secondaryAction: {
    display: 'none',
  },
  strikeThrough: {
    textDecoration: 'line-through',
  },
});

export default styles;
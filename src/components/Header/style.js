import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';

export const Container = styled('div')({
  backgroundColor: '#F36A21',
  padding: '10px 0',

  '@media (min-width: 700px)': {
    backgroundColor: '#FFF',
  }
});

export const Button = styled(Link)({
  color: '#FFF',
  textDecoration: 'none',
  padding: '10px',
  margin: '10px',
  
  '@media (min-width: 700px)': {
    backgroundColor: '#5D6A5A',
    borderRadius: '10px 10px 0 0'
  }
});

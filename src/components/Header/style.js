import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';

export const Logo = styled(Link)({
  display: 'none',

  '@media (min-width: 700px)': {
    display: 'inline-block',
    fontFamily: "Saira Stencil One",
    fontWeight: 500,
    fontSize: "3rem",
    color: "#155B9E",
    margin: "0 0 40px 20px",

    span: {
      color: "#F36A21",
      fontSize: "2.6rem",
    }
  }
});

export const Container = styled('div')({
  backgroundColor: '#F36A21',
  padding: '20px 0',

  '@media (min-width: 700px)': {
    backgroundColor: '#FFF',
    '& div': {
      display: 'flex',
      justifyContent: 'space-between',

    }
  }
});

export const Avatar = styled('div')({
  display: 'inline-block',
  height: '40px',
  width: '40px',
  position: 'absolute',
  top: '12px',
  right: '10px',
  borderRadius: '50%',

  '& svg': {
    fontSize: '40px'
  },

  '@media (min-width: 700px)': {
    position: 'relative',
    height: '50px',
    width: '50px',

    '& svg': {
      fontSize: '50px'
    }
  }
});

export const Button = styled(Link)({
  color: '#FFF',
  textDecoration: 'none',
  padding: '5px',
  fontSize: '0.9rem',

  '@media (min-width: 700px)': {
    backgroundColor: '#5D6A5A',
    padding: '10px',
    margin: '10px',
    borderRadius: '10px 10px 0 0'
  }
});

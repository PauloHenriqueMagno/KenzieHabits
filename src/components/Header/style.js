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
    margin: "0 0 40px 10px",

    span: {
      color: "#F36A21",
      fontSize: "2.6rem",
    }
  }
});

export const Container = styled('div')({
  backgroundColor: '#F36A21',
  padding: '20px 0',
  maxWidth: '1280px',
  margin: 'auto',

  '@media (min-width: 700px)': {
    backgroundColor: '#FFF',
    width: '90%',
    padding: '10px 0',
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

export const IconUser = styled("div")({
  display: 'flex',
  justifyContent: 'space-between',

  svg: {
    color: '#FFF',
    fontSize: '40px',
    position: 'absolute',
    right: '20px',
    top: '10px',
  },

  '@media (min-width: 700px)': {
    svg: {
      fontSize: '50px',
      color: '#555',
      position: 'relative',
      margin: '7px 0 0 -19px'
    },
  },
});
import {styled} from '@material-ui/core';

export const FooterStyle = styled('footer')({
    color: " #FFF",
    textAlign: 'center',
    backgroundColor: '#0005',
    padding: '10px',

    '& a': {
        textDecoration: 'none',
        cursor: 'pointer',
        color: '#fff'
    }
});

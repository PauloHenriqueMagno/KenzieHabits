import TextField from '@mui/material/TextField';

const Inputs = ({text}) =>{
    return (
        <TextField fullWidth color='primary' variant='outlined' label={text} />
    );
};

export default Inputs;

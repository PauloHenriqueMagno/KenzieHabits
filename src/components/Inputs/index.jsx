import TextField from '@mui/material/TextField';

const Inputs = ({text, value}) =>{
    return (
        <TextField color='primary' variant='outlined' label={text} value={value} />
    );
};

export default Inputs;

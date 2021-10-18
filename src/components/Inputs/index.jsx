import TextField from "@material-ui/core/TextField";

const Inputs = ({ text, register, name, error = null, ...rest }) => {
  return (
    <TextField
      fullWidth
      color="primary"
      variant="outlined"
      label={text}
      {...register(name)}
      error={!!error}
      helperText={error}
      {...rest}
    />
  );
};

export default Inputs;

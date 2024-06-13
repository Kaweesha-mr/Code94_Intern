import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Textfield({...props}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={props.value}  onChange={props.onChange} multiline={props.multiline} maxRows={props.maxRows} className={("mt-3" + props.className)} id="outlined-basic" label={props.label} placeholder={props.placeholder} variant="outlined" />
    </Box>
  );
}

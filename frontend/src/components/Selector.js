import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selector() {
  const [Category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const categories = [
    { label: 'Chinese', value: 'chinese' },
    { label: 'Sri Lankan', value: 'sri-lankan' },
    { label: 'Italian', value: 'italian' },
    { label: 'Mexican', value: 'mexican' },
    { label: 'Indian', value: 'indian' },
    { label: 'Japanese', value: 'japanese' },
    { label: 'Thai', value: 'thai' },
    { label: 'French', value: 'french' },
  ];

  return (
    <Box className='mt-2' sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Category}
          label="Category"
          onChange={handleChange}
        >
          {categories.map((category) => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

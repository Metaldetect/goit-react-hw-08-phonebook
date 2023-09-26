import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsFilter } from 'redux/constacts/selectors';
import { setFilter } from 'redux/constacts/filterSlice';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function FilterComponent() {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value.trim()));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 3,
        mb: 5,
      }}
    >
      <FormControl>
        <Typography variant="h5" align="center" gutterBottom>
          Filter contacts:
        </Typography>
        <InputLabel htmlFor="filter"></InputLabel>
        <TextField
          type="text"
          placeholder="Enter a name"
          id="filter"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
          sx={{ width: '100%', marginTop: '16px', mt: 1 }}
        />
      </FormControl>
    </Box>
  );
}

export default FilterComponent;

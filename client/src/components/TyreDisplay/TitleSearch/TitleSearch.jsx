import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function TitleSearch(props) {
  return (
    <Autocomplete
       
        options={props.tyres}
        onSelect={props.getSelectedTyre}
        groupBy={(option) => option.brand}
        getOptionLabel={(option) => option.title}
        getOptionSelected={(option, value) => option.title === value.title}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search For A Tyre" variant="outlined" />}
    />
  );
}
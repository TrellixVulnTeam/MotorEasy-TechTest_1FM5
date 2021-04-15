import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



export default function BrandSearch(props) {
    return (
      <Autocomplete
         
          options={props.brands}
          onSelect={props.getSelectedBrand}
          getOptionLabel={(option) => option.title}
          getOptionSelected={(option, value) => option.title === value.title}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Search By Brand" variant="outlined" />}
      />
    );
  }



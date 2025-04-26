import {FormControl, InputAdornment, OutlinedInput} from "@mui/material"

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export function Search({value, onChange}) {
    return (
      <FormControl variant="outlined">
        <OutlinedInput
          id="search"
          size="small"
          placeholder="Search…"
          sx={{ flexGrow: 1 }}
          startAdornment={
            <InputAdornment position="start" sx={{ color: 'text.primary' }}>
              <SearchRoundedIcon fontSize="small" />
            </InputAdornment>
          }
          inputProps={{
            'aria-label': 'search',
          }}
          value={value}
          onChange={onChange}
        />
      </FormControl>
    );
  }
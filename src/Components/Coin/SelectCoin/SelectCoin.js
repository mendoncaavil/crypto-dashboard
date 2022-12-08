import React from 'react'
import './styles.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

 

function SelectCoin({coin, handleChange, allCoins}) {
  return (
    <div>
        <Select value={coin}  onChange={handleChange}
        sx={{
            height: "2.5rem",
            color: "var(--white)",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--white)",
            },
            "& .MuiSvgIcon-root": {
              color: "var(--white)",
            },
            "&:hover": {
              "&& fieldset": {
                borderColor: "#3a80e9",
              },
            },
          }}
      >     
        {
            allCoins.map((item, index)=>(
                <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
            ))
        }
      </Select>
    </div>
  )
}

export default SelectCoin
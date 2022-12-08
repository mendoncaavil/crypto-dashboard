import React from 'react'
import './styles.css'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function TogglePrice({priceType, handleChange}) {
  return (
    <div className='toggle-div'>
        <ToggleButtonGroup
      color="primary"
      value={priceType}
      onChange={handleChange}
      sx={{
        "&.Mui-selected, &.Mui-selected:hover": {
          color: "#3a80e9 !important",
          backgroundColor: "#3a80e9",
        },
        borderColor: "#3a80e9",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid !important",
          borderColor: "unset",
          color: "#3a80e9",
        },
        "& .MuiToggleButton-standard": {
          color: "#3a80e9",
        },
      }}
      
    >
      <ToggleButton value="prices">Price</ToggleButton>
      <ToggleButton value="market_caps">Market Cap</ToggleButton>
      <ToggleButton value="total_volumes">Total Volume</ToggleButton>
    </ToggleButtonGroup>
    </div>
  )
}

export default TogglePrice;
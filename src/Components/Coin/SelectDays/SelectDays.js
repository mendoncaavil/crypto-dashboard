import React from "react";
import "./styles.css";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';


function SelectDays({noText, days, handleChange}) { 
    

  return (
    <div className="select-div">
    {!noText ? <p>Price change in the last</p> : <></> } 
      <Select value={days}  onChange={handleChange}
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
        <MenuItem value={7}>7 days</MenuItem>
        <MenuItem value={30}>30 days</MenuItem>
        <MenuItem value={60}>60 days</MenuItem>
        <MenuItem value={90}>90 days</MenuItem>
        <MenuItem value={120}>120 days</MenuItem>
      </Select>
    </div>
  );
}

export default SelectDays;

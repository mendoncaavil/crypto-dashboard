import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import Grid from "../GridComponent/Grid"
import './styles.css'
import List from '../ListComponent/List'

export default function Tabs({ data, isWatchList }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "inter",
    textTransform: "capitalize",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3A80E9",
      },
    },
  });

  return (
    <div style={{ width: "100%" }}>
      <ThemeProvider theme={theme}>
        <TabContext value={value} sx={{ color: "var(--white)" }}>
          <div style={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList variant="fullWidth" onChange={handleChange}>
              <Tab label="Grid" value={"grid"} sx={style} />
              <Tab label="List" value={"list"} sx={style} />
            </TabList>
          </div>
          <TabPanel value={"grid"}>
            <div className="grid-flex">
              {data.map((item, i) => (
                <Grid coin={item} key={i} delay={i * 0.1 / i} isWatchList={isWatchList}/>
              ))}
            </div>
          </TabPanel>
          
          <TabPanel value={"list"}  >
          <table className="list-flex">
              {data.map((item, i) => (
                <List coin={item}  key={i} delay={i * 0.1 / i} isWatchList={isWatchList}/>
              ))}
            </table> 
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    </div>
  );
}

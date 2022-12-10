import React,{useState} from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import styles from './styles.module.css'

export default function MobileDrawer() {
    const[open, setOpen] = useState(false);

    const setDark = () => {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    };
  
    const setLight = () => {
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
    };
  
    const storedTheme = localStorage.getItem("theme");
  
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  
    const defaultDark =
      storedTheme === "dark" || (storedTheme === null && prefersDark);
  
    if (defaultDark) {
      setDark();
    }
  
    const [mode, setMode] = useState(defaultDark ? true : false);
  
    const toggleTheme = (e) => {
      if (!mode) {
        setDark();
      } else {
        setLight();
      }
      setMode(!mode);
    };
  
  return (
    <div className={styles.drawerDiv}> 
        <MenuRoundedIcon style={{color: "white"}} onClick={()=>setOpen(true)}/> 
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
        <div className={styles.drawer}>
        <a href='/'> <p className={styles.link}>Home</p> </a>
        <a href='/compare'> <p className={styles.link}>Compare</p> </a>
        <a href='/dashboard'> <p className={styles.link}>Dashboard</p> </a> 
        </div>   
          </Drawer>
    </div>
  );
}
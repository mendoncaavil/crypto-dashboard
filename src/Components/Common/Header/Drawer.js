import React,{useState} from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import styles from './styles.module.css'
import Button from '../Button/Button';

export default function MobileDrawer() {
    const[open, setOpen] = useState(false);
  
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
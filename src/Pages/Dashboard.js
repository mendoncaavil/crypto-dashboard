import React, { useEffect, useState } from "react";
import axios from "axios";
import { DASHBOARD_API_URL } from "../Constants";
import Tabs from "../Components/Dashboard/Tabs/Tabs";
import Header from "../Components/Common/Header/Index";
import Search from "../Components/Dashboard/Search/Search";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Loading from '../Components/Common/Loading/Loading'

function Dashboard() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(DASHBOARD_API_URL).then((response) => {
      if (response.status == 200) {
        // console.log(response.data);
        setData(response.data);
        setLoading(false);
      } else {
        console.log("Error");
      }
    });
  }, []);

  const filterCoins =
    data.filter((item) =>
      item.name.toLowerCase().includes(search)
     || item.symbol.toLowerCase().includes(search)
     )



     function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      };


      let mybutton = document.getElementById("myBtn");

      window.onscroll = function() {
        scrollFunction()};
    
      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "flex";
        } else {
          mybutton.style.display = "none";
        }
      }
      
      // // When the user clicks on the button, scroll to the top of the document
      // function topFunction() {
      //   document.body.scrollTop = 0;
      //   document.documentElement.scrollTop = 0;
      // }

  return (
    <div>
      <Header />
      <Search search={search} setSearch={setSearch} />
      {
        loading ? (
        <Loading/>  
      ) : (
        <>
      <Tabs data={filterCoins} />
      <div onClick={()=>topFunction()} id="myBtn" className="top-btn" > <KeyboardDoubleArrowUpIcon sx={{color: "var(--blue)"}}/> </div>
      </>
      )}
    </div>  
  );
}

export default Dashboard;

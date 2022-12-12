import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header/Index";
import { DASHBOARD_API_URL } from "../Constants";
import Tabs from "../Components/Dashboard/Tabs/Tabs";

function WatchList() {
  const watchlist = localStorage.getItem("watchlist");
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(DASHBOARD_API_URL)
      .then((response) => {
        console.log("Response data >>", response.data);

        const myCoins = response.data.filter((coins) =>
          watchlist.includes(coins.id)
        );
        console.log(myCoins);
        setCoins(myCoins);
      })
      .catch((error) => {
        console.log("Error>>> ", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <Tabs data={coins} isWatchList={true} />
      </div>
    </div>
  );
}

export default WatchList;

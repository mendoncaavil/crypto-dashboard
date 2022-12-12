import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header/Index";
import { DASHBOARD_API_URL } from "../Constants";
import Tabs from "../Components/Dashboard/Tabs/Tabs";

function WatchList() {
  const watchlist = localStorage.getItem("watchlist")
    ? localStorage.getItem("watchlist").split(",")
    : [];
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    console.log("watchlist was changed");
  }, [watchlist]);

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
        {coins.length > 0 ? (
          <Tabs data={coins} isWatchList={true} />
        ) : (
          <div>
           
            <h1 className="watchlist-empty-text">Your watchlist is currently empty</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default WatchList;

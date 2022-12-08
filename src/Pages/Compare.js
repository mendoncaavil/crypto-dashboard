import axios from "axios";
import React, { useEffect, useState } from "react";
import SelectCoin from "../Components/Coin/SelectCoin/SelectCoin";
import SelectDays from "../Components/Coin/SelectDays/SelectDays";
import Header from "../Components/Common/Header/Index";
import Loading from "../Components/Common/Loading/Loading";
import { DASHBOARD_API_URL } from "../Constants";
import { getCoinData } from "../Functions/GetCoinData";
import List from "../Components/Dashboard/ListComponent/List";
import Info from '../Components/Coin/Info/Info'

function ComparePage() {
  const [coin1, setCoin1] = useState("bitcoin");
  const [coin2, setCoin2] = useState("ethereum");
  const [days, setDays] = useState(120);

  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const [coinData1, setCoinData1] = useState({});
  const [coinData2, setCoinData2] = useState({});

  useEffect(() => {
    axios
      .get(DASHBOARD_API_URL)
      .then((response) => {
        console.log("response data >>> " + response.data);
        setAllCoins(response.data);
      })
      .catch((error) => {
        console.log("Error>>>" + error);
      });

    getCoinsData();
  }, []);

  const getCoinsData = async () => {
    const data1 = await getCoinData(coin1);
    const data2 = await getCoinData(coin2);

    if (data1) {
      console.log("data1 >>>", data1);
      setCoinData1({
        id: data1.id,
        name: data1.name,
        symbol: data1.symbol,
        image: data1.image.large,
        desc: data1.description.en,
        price_change_percentage_24h:
          data1.market_data.price_change_percentage_24h,
        total_volume: data1.market_data.total_volume.usd,
        current_price: data1.market_data.current_price.usd,
        market_cap: data1.market_data.market_cap.usd,
      });
    }

    if (data2) {
      console.log("data2 >>>", data2);
      setCoinData2({
        id: data2.id,
        name: data2.name,
        symbol: data2.symbol,
        image: data2.image.large,
        desc: data2.description.en,
        price_change_percentage_24h:
          data2.market_data.price_change_percentage_24h,
        total_volume: data2.market_data.total_volume.usd,
        current_price: data2.market_data.current_price.usd,
        market_cap: data2.market_data.market_cap.usd,
      });
    }
    setLoading(false);
  };

  const handleCoinChange1 = async (e) => {
    setCoin1(e.target.value);
    const data1 = await getCoinData(e.target.value);
    if (data1) {
      console.log("data1 >>>", data1);
      setCoinData1({
        id: data1.id,
        name: data1.name,
        symbol: data1.symbol,
        image: data1.image.large,
        desc: data1.description.en,
        price_change_percentage_24h:
          data1.market_data.price_change_percentage_24h,
        total_volume: data1.market_data.total_volume.usd,
        current_price: data1.market_data.current_price.usd,
        market_cap: data1.market_data.market_cap.usd,
      });
    }
  };

  const handleCoinChange2 = async (e) => {
    setCoin2(e.target.value);
    const data2 = await getCoinData(e.target.value);
    if (data2) {
      console.log("data2 >>>", data2);
      setCoinData2({
        id: data2.id,
        name: data2.name,
        symbol: data2.symbol,
        image: data2.image.large,
        desc: data2.description.en,
        price_change_percentage_24h:
          data2.market_data.price_change_percentage_24h,
        total_volume: data2.market_data.total_volume.usd,
        current_price: data2.market_data.current_price.usd,
        market_cap: data2.market_data.market_cap.usd,
      });
    }
  };

  return (
    <>
      <Header />
      <div className="div-flex">
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <p>Crypto 1</p>
          <SelectCoin
            coin={coin1}
            handleChange={(e) => handleCoinChange1(e)}
            allCoins={allCoins.filter((coin) => coin.id != coin2)}
          />

          <p>Crypto 2</p>
          <SelectCoin
            coin={coin2}
            handleChange={(e) => handleCoinChange2(e)}
            allCoins={allCoins.filter((coin) => coin.id != coin1)}
          />
        </div>
        <SelectDays
          noText={true}
          days={days}
          handleChange={(e) => setDays(e.target.value)}
        />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="grey-container">
            <List coin={coinData1} />
          </div>
          <div className="grey-container">
            <List coin={coinData2} />
          </div>
          <div className="grey-container">
            <Info name={coinData1.name} desc={coinData1.desc} />
          </div>
          <div className="grey-container">
            <Info name={coinData2.name} desc={coinData2.desc} />
          </div>
        </>
      )}
    </>
  );
}

export default ComparePage;

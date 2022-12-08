import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Common/Header/Index";
import axios from "axios";
import Loading from "../Components/Common/Loading/Loading";
import List from "../Components/Dashboard/ListComponent/List";
import Info from "../Components/Coin/Info/Info";
import { getCoinData } from "../Functions/GetCoinData";
import { getCoinPrices } from "../Functions/GetCoinPrices";
import LineChart from "../Components/Coin/Chart/index";
import { getDaysArray } from "../Functions/GetDaysArray";
import { getDate } from "../Functions/GetDate";
import SelectDays from "../Components/Coin/SelectDays/SelectDays";
import TogglePrice from "../Components/Coin/ToggleComponent/Toggle";

function CoinPage() {
  const { id } = useParams();

  const [coin, setCoin] = useState({});
  const [days, setDays] = useState(7);
  const [loading, setLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");


  const today = new Date();
  const priorDate = new Date(new Date().setDate(today.getDate() - days));

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "My First Dataset",
        data: [],
        fill: false,
        borderColor: "#fff",
        tension: 0.1,
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    const data = await getCoinData(id);
    const prices = await getCoinPrices(id, days, priceType);

    if (data) {
      console.log("data >>>", data);
      setCoin({
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        image: data.image.large,
        desc: data.description.en,
        price_change_percentage_24h:
          data.market_data.price_change_percentage_24h,
        total_volume: data.market_data.total_volume.usd,
        current_price: data.market_data.current_price.usd,
        market_cap: data.market_data.market_cap.usd,
      });
      setLoading(false);
    }
    if (prices) {
      console.log(prices);
      setChartData({
        labels: prices?.map((data) => getDate(data[0])),
        datasets: [
          {
            label: "Prices",
            data: prices?.map((data) => data[1]),
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            backgroundColor: "transparent",
            borderColor: "#3a80e9",
            pointRadius: 0,
          },
        ],
      });
    }
  };

  const handleDaysChange = async (event) => {
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices) {
      console.log(prices);
      setChartData({
        labels: prices?.map((data) => getDate(data[0])),
        datasets: [
          {
            label: "Prices",
            data: prices?.map((data) => data[1]),
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            backgroundColor: "transparent",
            borderColor: "#3a80e9",
            pointRadius: 0,
          },
        ],
      });
    }
    setDays(event.target.value);
  };

  const handlePriceChange = async (event) => {
    setPriceType(event.target.value);
    const prices = await getCoinPrices(id, days, event.target.value);
    if (prices) {
      console.log(prices);
      setChartData({
        labels: prices?.map((data) => getDate(data[0])),
        datasets: [
          {
            label: "Prices",
            data: prices?.map((data) => data[1]),
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            backgroundColor: "transparent",
            borderColor: "#3a80e9",
            pointRadius: 0,
          },
        ],
      });
    }
  }

  return (
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="grey-container">
            <List coin={coin} />
          </div>
          <SelectDays
            days={days}
            setDays={setDays}
            handleChange={handleDaysChange}
          />

          <TogglePrice priceType={priceType} handleChange={handlePriceChange}/>
          <LineChart chartData={chartData} options={options} />
          <p className="grey-container">
            <Info name={coin.name} desc={coin.desc} />
          </p>
        </>
      )}
    </div>
  );
}

export default CoinPage;

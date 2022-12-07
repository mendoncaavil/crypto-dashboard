import axios from "axios";

export const getCoinPrices = async (id, days) => {
    const data = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    .then((response) =>{
        return response.data.prices;
    })
    .catch((error)=>{
        console.log("Error>>>"+ error);
    })

    return data;
}
import axios from "axios";

export const getCoinData = async (id) => {
    const data = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) =>{
        return response.data;
    })
    .catch((error)=>{
        console.log("Error>>>"+ error);
    })

    return data;
}
import React, { useEffect, useState } from "react";
import "./styles.css";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { ConvertNumber } from "../../../Functions/ConvertNumber";
import { motion } from "framer-motion";
import Tooltip from "@mui/material/Tooltip";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { removeFromWatchlist } from "../../../Functions/RemoveFromWatchlist";
import { addToWatchlist } from "../../../Functions/AddToWatchlist";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import IconButton from '@mui/material/IconButton';


function List({ coin, delay }) {
  const isWatchList = localStorage.getItem("watchlist").includes(coin.id);

  const [volume, setVolume] = useState("");
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    setVolume(ConvertNumber(parseInt(coin.total_volume)));
  }, []);

  return (
      <motion.tr
        className="list-row"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: delay }}
      >
      <a href={`/coin/${coin.id}`}>
        <td className="td-image">
          <Tooltip title="symbol" arrow>
            <img src={coin.image} className="coin-logo" />
          </Tooltip>
        </td>
        </a>
        <a href={`/coin/${coin.id}`}>
        <td className="td-name-flex">
          <div className="name-flex">
            <p className="coin-symbol">{coin.symbol}-USD</p>

            <p className="coin-name">{coin.name}</p>
          </div>
        </td>
        </a>
        <a href={`/coin/${coin.id}`}>
        <td className="td-chip-flex">
          <Tooltip title="Percentage change in 24 hours" arrow>
            {coin.price_change_percentage_24h > 0 ? (
              <div className="chip-flex">
                <div className="coin-chip">
                  {coin.price_change_percentage_24h.toFixed(2) + "%"}
                </div>
                <TrendingUpIcon className="icon chip-icon" />
              </div>
            ) : (
              <div className="chip-flex">
                <div className="coin-chip chip-red">
                  {coin.price_change_percentage_24h.toFixed(2) + "%"}
                </div>

                <TrendingDownIcon className="icon icon-red chip-icon" />
              </div>
            )}
          </Tooltip>
        </td>
        </a>

        <a href={`/coin/${coin.id}`}>
        <td>
          <Tooltip title="Price" placement="bottom-start">
            <p
              className="coin-price name-text"
              style={{
                color:
                  coin.price_change_percentage_24h < 0
                    ? "var(--red)"
                    : "var(--green)",
              }}
            >
              {"$ " + coin.current_price.toLocaleString()}
            </p>
          </Tooltip>
        </td>
        </a>
        <a href={`/coin/${coin.id}`}>
        <td className="td-mkt-cap">
          <Tooltip title="Total Volume" arrow>
            <p>{" $" + coin.total_volume.toLocaleString()}</p>
          </Tooltip>
        </td>
        </a>

        <a href={`/coin/${coin.id}`}>
        <td className="td-mkt-cap">
          <Tooltip title="Coin Market Capital" arrow>
            <p>{" $" + coin.market_cap.toLocaleString()}</p>
          </Tooltip>
        </td>
        </a>

        <a href={`/coin/${coin.id}`}>
        <td className="td-vol-cap">
          <Tooltip title="Volume" arrow>
            <p> {"$" + volume} </p>
          </Tooltip>
        </td>
        </a>

        <td>
          {isWatchList || isAdded ?  (
            <div
              className="bookmark-icon-div"
              onClick={() => {
                setIsAdded(false);
                removeFromWatchlist(coin.id)}}
            >
              <IconButton>
              <BookmarkIcon className="bookmark-icon" />
              </IconButton>
            </div>
          ) : (
            <div
              className="bookmark-icon-div"
              onClick={() => {
                setIsAdded(true);
                addToWatchlist(coin.id)
                }
              }
            >
             <IconButton>
              <TurnedInNotIcon className="bookmark-icon" />
              </IconButton>
            </div>
          )}
        </td>
      </motion.tr>
  );
}

export default List;

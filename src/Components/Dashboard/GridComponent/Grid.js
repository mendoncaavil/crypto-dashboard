import React from "react";
import "./styles.css";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { motion } from "framer-motion";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { addToWatchlist } from "../../../Functions/AddToWatchlist";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { removeFromWatchlist } from "../../../Functions/RemoveFromWatchlist";

function Grid({ coin, delay, isWatchList }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay }}
      className={`grid-box ${
        coin.price_change_percentage_24h < 0 && "grid-box-red"
      }`}
    >
      <div className="info-flex">
        <a href={`/coin/${coin.id}`}>
          <img src={coin.image} className="coin-logo" />
        </a>
        <a href={`/coin/${coin.id}`}>
          <div className="name-flex">
            <p className="coin-symbol">{coin.symbol}-USD</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </a>

        {isWatchList ? (
          <div
            className="bookmark-icon-div"
            onClick={() => removeFromWatchlist(coin.id)}
          >
            <BookmarkIcon className="bookmark-icon" />
          </div>
        ) : (
          <div
            className="bookmark-icon-div"
            onClick={() => addToWatchlist(coin.id)}
          >
            <TurnedInNotIcon className="bookmark-icon" />
          </div>
         )}
      </div>

      <a href={`/coin/${coin.id}`}>
        <div>
          {coin.price_change_percentage_24h > 0 ? (
            <div className="chip-flex">
              <div className="coin-chip">
                {coin.price_change_percentage_24h.toFixed(2) + "%"}
              </div>
              <TrendingUpIcon className="icon" />
            </div>
          ) : (
            <div className="chip-flex">
              <div className="coin-chip chip-red">
                {coin.price_change_percentage_24h.toFixed(2) + "%"}
              </div>
              <TrendingDownIcon className="icon icon-red" />
            </div>
          )}
        </div>

        <p
          className="coin-price"
          style={{
            color:
              coin.price_change_percentage_24h < 0
                ? "var(--red)"
                : "var(--green)",
          }}
        >
          {"$ " + coin.current_price.toLocaleString()}
        </p>

        <div>
          <p className="volume-text">
            <strong>Total Volume : </strong>
            {" $" + coin.total_volume.toLocaleString()}
          </p>

          <p className="volume-text">
            <strong>Total market Cap :</strong>
            {" $" + coin.market_cap.toLocaleString()}
          </p>
        </div>
      </a>
    </motion.div>
  );
}

export default Grid;

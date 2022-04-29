import React from "react";

function Coin({ name, icon, price, symbol, rank, marketCap, websiteUrl, twitterUrl }) {
  return (
    <div className="coin">
        <h1> Name: {name}</h1>
        <img src={icon} />
        <h3> Price: {price}</h3>
        <h3> Symbol: {symbol}</h3>
        <h3> Rank: {rank}</h3>
        <h3> Market Cap: {marketCap}</h3>
        <h3> Website Url: {websiteUrl}</h3>
        <h3> Twitter Url: {twitterUrl}</h3>
    </div>
  );
}

export default Coin;
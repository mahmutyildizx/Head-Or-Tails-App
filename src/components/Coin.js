import React from 'react';
import "./CoinStyles.css";
import CoinTura from "../1-lira-tura.png";
import CoinYazi from "../1-lira-yazi.png";

const Coin = (props) => {
    const { currentStatus, donuyor } = props;
    return (
        <div className="Coin-container">
            <div className={`Coin ${donuyor && "Coin-rotate"}`}>
                <img src={CoinTura} alt="tura"
                    className={
                        currentStatus === "Tura" ? "Coin-front" : "Coin-back"
                    }
                />
                <img src={CoinYazi} alt="yazi" className={
                        currentStatus === "Yazi" ? "Coin-front" : "Coin-back"
                } />
            </div>
        </div>
    );
};

export default Coin;
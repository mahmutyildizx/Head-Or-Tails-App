import React, {Component} from 'react';
import "./CoinFlipperStyles.css";
import Coin from "./Coin";

const options = ["Yazi", "Tura" ];

const getRandomElFromArr = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem =  arr[randomIndex];
  return randomItem;
};

class CoinFlipper extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentStatus: options[0],
            gelenler: [],
            donuyor: false,
            yaziGelenToplam: 0,
            turaGelenToplam: 0,
            toplamAtis: 0
        }
    }

    atisYap = () => {
        this.setState({
            donuyor: true
        });
        const rastgeleEleman = getRandomElFromArr(options);
        setTimeout(() => {
            this.setState({
                currentStatus: rastgeleEleman,
                gelenler: [...this.state.gelenler, rastgeleEleman],
                donuyor: false
            })
        }, 1000);

        if (rastgeleEleman === options[0]) {
            this.setState({
                yaziGelenToplam: this.state.yaziGelenToplam + 1 
            });
        } else if(rastgeleEleman === options[1]) {
            this.setState({
                turaGelenToplam: this.state.turaGelenToplam + 1
            });
        }
        this.setState({toplamAtis: this.state.toplamAtis +1})
    }

    render() {
        const {currentStatus, donuyor, gelenler, yaziGelenToplam, turaGelenToplam, toplamAtis} = this.state;
        return (
            <div>
                <h1>
                    Yazı ya da Tura
                </h1>
                <Coin currentStatus={currentStatus} donuyor={donuyor}/>
                <button onClick={this.atisYap} className="btn">Atış yap</button>
                {
                    gelenler.length > 0 && !donuyor && <h3>{currentStatus} geldi</h3>
                }
                <h3>Toplam atış: {toplamAtis} </h3>
                <h3>Toplam yazı: {yaziGelenToplam} </h3>
                <h3>Toplam tura: {turaGelenToplam} </h3>
            </div>
        );
    }
}



export default CoinFlipper;
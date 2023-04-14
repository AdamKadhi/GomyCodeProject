import React from 'react'
import coin from "../Images/coin.png"
const DashBuy = () => {
  return (
    <div className='dash_buy'>
      <h1>Select Coins:</h1>
      <div className="dash_buy_cards">
        <div className="dash_buy_card">
            <h3>5$</h3>
            <img src={coin} alt="" />
            <p>15 coin</p>
            <span>+0 bonus coin</span>
            <button>Buy</button>
        </div>
        <div className="dash_buy_card">
            <h3>10$</h3>
            <img src={coin} alt="" />
            <p>30 coin</p>
            <span>+5 bonus coin</span>
            <button>Buy</button>
        </div>
        <div className="dash_buy_card">
            <h3>20$</h3>
            <img src={coin} alt="" />
            <p>60 coin</p>
            <span>+10 bonus coin</span>
            <button>Buy</button>
        </div>
        <div className="dash_buy_card">
            <h3>50$</h3>
            <img src={coin} alt="" />
            <p>150 coin</p>
            <span>+50 bonus coin</span>
            <button>Buy</button>
        </div>
        <div className="dash_buy_card">
            <h3>100$</h3>
            <img src={coin} alt="" />
            <p>300 coin</p>
            <span>+100 bonus coin</span>
            <button>Buy</button>
        </div>
        <div className="dash_buy_card">
            <h3>500$</h3>
            <img src={coin} alt="" />
            <p>1500 coin</p>
            <span>+200 bonus coin</span>
            <button>Buy</button>
        </div>
        
      </div>
    </div>
  )
}

export default DashBuy

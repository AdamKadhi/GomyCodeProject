import React, { useEffect, useState } from 'react'
import credt from "../Images/T.png"
import {useDispatch, useSelector } from "react-redux";
import { updateuser } from '../JS/userSlice/userSlice';

const BuyCoins = ({setshow,index}) => {
  const dispatch=useDispatch()
  const user=useSelector((store)=>store.user?.user)
  const coinet=[15,35,70,200,400,1700];
  const [updatedu, setupdatedu] = useState({
    coins:user?.coins+coinet[index],
  })
  
  const handleRefresh = () => {
    window.location.reload();
  }
  return (
    <div className='buycoins'>
      <div className="payement">
      <i class="fa-solid fa-x" onClick={()=>setshow(false)}></i>
        <h1>Confirm Purchase</h1>
        <div className="payment_forms">
        <div className="form_labelinput owner">
            <label htmlFor="">Card Holder</label>
            <input type="text" name="" id=""  />
        </div>
        <div className="form_labelinput cvv">
            <label htmlFor="">CVV</label>
            <input type="number" name="" id="" />
        </div>
        <div className="form_labelinput num">
            <label htmlFor="">Card Number</label>
            <input type="number" name="" id="" />
        </div>
        <div className="form_labelinput exp">
            <label htmlFor="">Expiration Date</label>
            <span>
            <select>
                    <option value="01">January</option>
                    <option value="02">February </option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <select>
                    <option value="16"> 2016</option>
                    <option value="17"> 2017</option>
                    <option value="18"> 2018</option>
                    <option value="19"> 2019</option>
                    <option value="20"> 2020</option>
                    <option value="21"> 2021</option>
                </select>
            </span>
        </div>
        <img src={credt} alt="" />
        <div className="buy_buttons">
          <button>Cancel</button>
          <button onClick={()=>(dispatch(updateuser({id:user?._id,user:updatedu}))&&handleRefresh())}>Confirm</button>
        </div>
        </div>
        
      </div>
    </div>
    
  )
}

export default BuyCoins

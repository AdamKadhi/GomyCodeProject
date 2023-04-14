import React, { useEffect, useState } from "react";
import coin from "../Images/coin.png";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../JS/userSlice/userSlice";
import Lobby from "./Lobby";
import { updatetournoi } from "../JS/tournoiSlice/tournoiSlice";
import {  useNavigate } from "react-router-dom";


const Card = ({key,el}) => {
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const user=useSelector((store)=>store.user?.user)
  const tournoi=useSelector((store)=>store.tournoi?.tournoi)
  const [updateparticipant, setupdateparticipant] = useState({
    gamename:el?.gamename,
    mode:el?.mode,
    money:el?.money,
    description:el?.description,
    owner:el?.owner,
    participant:"",
    partpdp:"",
  })
  
  const [modalcard, setmodalcard] = useState(false)
  return (
    
      <div className="dash_card">

      <div className="dash_card_top">

        <div className="dash_card_top_left">
          <img src={el?.owpdp} alt="" id="dash_pdp" />
          <span>{el?.owner}</span>
        </div>

        <div className="dash_card_top_right">
          <img src={coin} alt="" id="dash_card_coin" />
          <span>{el?.money}</span>
        </div>

        </div>

        <h3>{el?.gamename}</h3>
        <div className="dash_card_desc">
          <h1>Description:</h1>
          <p>{el?.description}</p>
          </div>
          <div className="dash_card_bot">
          <span>{el?.mode}</span>
          <button 
            id="dash_card_bot_right" 
            onClick={() => (setupdateparticipant ({...updateparticipant, participant: user?.nickname,partpdp:user?.image}),setmodalcard(true))}
          >
            Join
          </button>
          
          </div>
          <div>
          {modalcard?
          <div className="card_modal">
            <h1>Join {el?.owner}'s room ?</h1>
            <div>
            <button onClick={()=>(dispatch(updatetournoi({id:el?._id,tournoi:updateparticipant}))&& navigate(`/partie/${el?._id}`))}>Confirm</button>
            <button onClick={()=>setmodalcard(false)}>Cancel</button>
            </div></div>:null}
          
          
          </div>
          
      
    
    </div>
    


  );
};

export default Card;


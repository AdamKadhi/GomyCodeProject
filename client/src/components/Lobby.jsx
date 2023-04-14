import React, { useEffect, useState } from "react";
import coin from "../Images/coin.png";
import { useNavigate, useParams } from "react-router-dom";
import { deletetournoi, getbyidtournoi } from "../JS/tournoiSlice/tournoiSlice";
import { useDispatch, useSelector } from "react-redux";
import pdp from "../Images/pdp.jpg";

const Lobby = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(getbyidtournoi(params.id));
  }, []);
  const tournoipartie = useSelector((state) => state.tournoi?.tournoi);
  const navigate = useNavigate();
  const handleRefresh = () => {
    window.location.reload();
  };

  const [countdown, setCountdown] = useState(10);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let countdownTimeout;

    if (isStarted && countdown > 0) {
      countdownTimeout = setTimeout(() => setCountdown(countdown - 1), 1000);
    }

    return () => clearTimeout(countdownTimeout);
  }, [countdown, isStarted]);

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const user=useSelector((store)=>store.user?.user)

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (inputValue) {
      setMessages((prevMessages) => [...prevMessages, inputValue]);
      setInputValue("");
    }
  };
  return (
    <div className="lobby">
      <h1>My Lobby:</h1>
      <div className="lobby_cont">
        <div className="lobby_left">
          <h1>1vs1 Valorant</h1>
          <div className="lobby_users">
            <div className="lobby_user1">
              <img src={tournoipartie?.owpdp} alt="" />
              <span>{tournoipartie?.owner}</span>
              <button>I'M READY</button>
            </div>
            <div className="lobby_betmoney">
              <span>{tournoipartie?.money}</span>
              <img src={coin} alt="" />
            </div>
            <div className="lobby_user1">
              <img src={tournoipartie?.partpdp} alt="" />
              <span>{tournoipartie?.participant}</span>
              <button>I'M READY</button>
            </div>
          </div>
          <div className="lobby_start_countdown">
            <h1>GAME WILL START IN</h1>
            <span>{isStarted && countdown > 0
          ?  countdown 
          : isStarted}</span>
          </div>
          <div className="lobby_buttons">
            <button
              onClick={() => (
                navigate("/dashboard"),
                handleRefresh(),
                dispatch(deletetournoi(tournoipartie?._id))
              )}
            >
              Delete
            </button>
            <button onClick={()=>setIsStarted(true)}>Start</button>
          </div>
        </div>
        <div className="lobby_chat">
          <h1>Chat:</h1>
          <div className="lobby_texts">
          
          {messages.map((message, index) => (
          <div className="lobby_text" key={index}><img src={user?.image} alt="" />{message}</div>
        ))}
            
          </div>
          <div className="lobby_chat_typing">
            <form onSubmit={handleFormSubmit}>
            <input
              readonly
              type="text"
              name=""
              id=""
              placeholder="Type something..."
              value={inputValue} onChange={handleInputChange}
            />
            <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobby;

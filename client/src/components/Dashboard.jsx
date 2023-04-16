import React, { useState } from 'react'
import coins from "../Images/coins.png"
import logo from "../Images/ty.png"
import pdp from "../Images/pdp.jpg"
import DashHome from './DashHome'
import DashBuy from './DashBuy'
import JoinCode from './JoinCode'
import Lobby from './Lobby'
import CreateLobby from './CreateLobby'
import Settings from './Settings'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../JS/userSlice/userSlice'
const Dashboard = () => {

const [lien, setlien] = useState(1)
const [joinmodal, setjoinmodal] = useState(0)
const [search, setsearch] = useState("")
const user=useSelector((store)=>store.user?.user)
const dispatch = useDispatch()
const navigate = useNavigate()
const [teste, setteste] = useState({})
const handleget=(x)=>{
  setteste(x)
}

  return (
    <div className='dash'>

      <nav>
        <img src={logo} alt="" id='dash_logo' onClick={()=>setlien(1)} />
        <div className='dash_left_nav'>
          <span><img src={coins} alt="" id='dash_coins'/><div>{user?.coins}</div></span>
          <img src={user?.image?user.image : pdp} alt="" id='dash_pdp' />
        </div>
      </nav>
      <div className="dash_container">
      <div className="dash_sidebar">
        <span>
          <img src={user?.image?user.image : pdp} alt="" id='dash_pdp' />
          <div>{user?.nickname}</div>
        </span>
        <input type="text" name="" id="" placeholder='Search' onChange={(e)=>setsearch(e.target.value)} />
        <ul>
         <li onClick={()=>setlien(1)}>Home</li>
          <li onClick={()=>setlien(3)}>Launch Game</li>
          <li onClick={()=>setjoinmodal(1)}>Join Game</li>
          <li onClick={()=>setlien(4)} >Buy Coins</li>
          <li onClick={()=>setlien(5)}>Settings</li>
        </ul>
        <div className="dash_sidebar_logout" onClick={()=>dispatch(logout(), navigate("/login"))}>
        <i className="fa-solid fa-right-from-bracket"></i>
        <button   >Logout</button>
        
        </div>
      </div>
      {
        joinmodal===1?<JoinCode setjoinmodal={setjoinmodal}/> :null
      }
      <div className="dash_content">
         {
        lien===1?<DashHome  setlien={setlien} pdp={pdp} search={search} fnc={handleget}/> : lien===3? <CreateLobby setlien={setlien} />:lien===4? <DashBuy/>:lien===5?<Settings pdp={pdp}/>:null

         }
      </div>
     
      
      </div>
    </div>
  )
}

export default Dashboard

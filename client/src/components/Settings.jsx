import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChangePass from "./ChangePass";
import { updateuser } from "../JS/userSlice/userSlice";

const Settings = ({ pdp }) => {
  const user=useSelector((store)=>store.user?.user)
  const [updatedu, setupdatedu] = useState({
    fullname:user?.fullname,
    nickname:user?.nickname,
    email:user?.email,
    password:"",
    image:user?.image
  })
 const [changepass, setchangepass] = useState(0)
 const dispatch=useDispatch()
 const handleRefresh = () => {
  window.location.reload();
}
  return (
    <div className="settings">
      <h1>Settings</h1>
      <div className="settings_box">
        <div className="settings_pdp">
          <img src={user?.image?user.image : pdp} alt="" /> 
          <span>
          <input type="text" name="" placeholder="Image URL" id="" onChange={(e)=>setupdatedu({...updatedu,image:e.target.value})}/>
          <button>Change</button>
          </span>
        </div>

        <table className="settings_forms">
          <tr>
            <td><label htmlFor="">FullName:</label></td>
            <td>
              
              <input type="text" name="" id="" value={updatedu.fullname} onChange={(e)=>setupdatedu({...updatedu,fullname:e.target.value})} />
              <button >Edit</button>
            </td>
            <td><label htmlFor="">Nickname:</label></td>
            <td>
              
              <input type="text" name="" id="" value={updatedu.nickname} onChange={(e)=>setupdatedu({...updatedu,nickname:e.target.value})} />
              <button>Edit</button>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="">Email:</label></td>
            <td>
              
              <input type="text" name="" id="" value={updatedu.email} readOnly />
            </td>
            <td><label htmlFor="">Password:</label></td>
            <td>
              
              <input type="text" name="" id="" value={"**********"} readOnly />
            </td>
          </tr>
          
          {
            changepass===1? <ChangePass setupdatedu={setupdatedu} updatedu={updatedu}/>
            :null
          }
          
          
          
        </table>

        <div className="settings_paym_pwd">
          <button>Payement Method</button>
          <button onClick={()=>setchangepass(1)}>Change Password</button>
        </div>
        <div className="settings_buttons">
          <button>Discard</button>
          <button onClick={()=>(dispatch(updateuser({id:user?._id,user:updatedu}))&&handleRefresh())}>Save Changes</button>
          
        </div>
      </div>
    </div>
  );
};

export default Settings;

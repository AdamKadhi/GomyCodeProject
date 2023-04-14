import React from 'react'

const ChangePass = ({setupdatedu,updatedu}) => {
  return (
    <tr className='change_pass'>
        <td></td><td></td>
      <td>
            <label htmlFor="">New Password:</label></td>
            <td><input type="password" name="" id="" onChange={(e)=>setupdatedu({...updatedu,password:e.target.value})}  /></td>
            
    </tr>
  )
}

export default ChangePass

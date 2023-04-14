// import React, { useEffect } from 'react'
// import Card from './Card'
// import { useDispatch, useSelector } from 'react-redux';
// import { gettournoi } from '../JS/tournoiSlice/tournoiSlice';


// const DashHome = ({pdp,search}) => {
//   const dispatch = useDispatch();
// //   useEffect(() => {
// // dispatch(gettournoi())
// //   }, [])
// useEffect(() => {
//   dispatch(gettournoi())
// }, [dispatch])

//   const tournoii=useSelector((store)=>store.tournoi?.tournoi)
//   return (
//     <div className='dash_home'>
//       {/* {tournoii?.filter((el) => el.gamename.toLowerCase().includes(search.toLowerCase())).map((el)=><Card pdp={pdp} el={el}/>)} */}
//       {tournoii?.filter((el) => el.gamename.toLowerCase().includes(search.toLowerCase())).map((el) => <Card key={el.id} pdp={pdp} el={el}/>)}

//     </div>
//   )
// }

// export default DashHome
import React, { useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux';
import { gettournoi } from '../JS/tournoiSlice/tournoiSlice';
import JoinCode from './JoinCode';

const DashHome = ({setlien,pdp,search}) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(gettournoi())
  }, [dispatch])

  const tournoii=useSelector((store)=>store.tournoi?.tournoi)
  
  return (
    <div className='dash_home'>
      {tournoii?.filter((el) => el.gamename.toLowerCase().includes(search.toLowerCase())).map((el) => (
        <Card  setlien={setlien} key={el.id} pdp={pdp} el={el} />
      ))}

    </div>
  )
}

export default DashHome

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gettournoi, updatetournoi } from "../JS/tournoiSlice/tournoiSlice";
import { useNavigate } from "react-router-dom";

const JoinCode = ({ setjoinmodal }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gettournoi());
  }, [dispatch]);
  const navigate = useNavigate();
  const tournoii = useSelector((store) => store.tournoi?.tournoi);
  const user = useSelector((store) => store.user?.user);
  const [codee, setcodee] = useState("");
  const [updateparticipant, setupdateparticipant] = useState({
    participant: "",
    partpdp: "",
  });
  const handleJoinClick = () => {
    // check if the entered code matches any of the codes in the tournoii array
    const match = tournoii?.find((el) =>
      el.code === codee
        ? (setupdateparticipant({
            ...updateparticipant,
            participant: user?.nickname,
            partpdp: user?.image,
          })&&
          dispatch(updatetournoi({id:el?._id,tournoi:updateparticipant})),
          navigate(`/partie/${el?._id}`))
        : null
    );
  };
  return (
    <div className="modal_join">
      <div className="modal_join_rect">
        <i className="fa-solid fa-x" onClick={() => setjoinmodal(0)}></i>
        <h1>Copy Code And Paste It Here:</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Code"
          onChange={(e) => setcodee(e.target.value)}
        />
        <button onClick={handleJoinClick()}>Join</button>
      </div>
    </div>
  );
};

export default JoinCode;

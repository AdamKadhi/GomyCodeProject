import "./css/App.css";
import { Routes, Route} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  userCurrent } from "./JS/userSlice/userSlice";
import PrivateRoute from "./routes/PrivateRoute";
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Lobby from "./components/Lobby";
function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      

      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/partie/:id" element={<Lobby />} />

        <Route element={<PrivateRoute />}>
        <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>{" "}
      </Routes>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import { useDispatch } from "react-redux";
import { userLogin, userRegister } from "../JS/userSlice/userSlice";
const Login = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };
 

  const navigate = useNavigate();
  const [newuser, setnewuser] = useState({
    fullname: "",
    nickname: "",
    email: "",
    password: "",
    image: "",
  });
  const [loginuser, setloginuser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();


  return (
    <div className="login-page">
      <div
        className={`container ${isSignUpActive ? "right-panel-active" : ""}`}
      >
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) =>
                setnewuser({ ...newuser, fullname: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Nickname"
              onChange={(e) =>
                setnewuser({ ...newuser, nickname: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setnewuser({ ...newuser, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setnewuser({ ...newuser, password: e.target.value })
              }
            />
<input 
          type="file"
          lable="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) =>
            convertToBase64(e.target.files[0]).then((base64String) => {
              setnewuser({ ...newuser, image: base64String });
            })
          }
         />
            <button onClick={() => dispatch(userRegister(newuser))}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setloginuser({ ...loginuser, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setloginuser({ ...loginuser, password: e.target.value })
              }
            />
            <span className="forget-pass">Forgot your password? </span>
            <button
              onClick={(e) =>
                dispatch(userLogin(loginuser)) && navigate("/dashboard")
              }
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}
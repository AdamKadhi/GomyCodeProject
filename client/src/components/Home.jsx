import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import l from "../Images/pp.png";
import lob from "../Images/lobb.PNG";
import buy from "../Images/buy.PNG";
const Home = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 150) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <nav className={`nav_bar ${scroll ? "scroll" : ""}`}>
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button onClick={() => navigate("/login")}>Get Started</button>
      </nav>

      <div className="container">
        <div className="home">
          <div>
            <h1>
              The Ultimate <br /> Competitive <br /> Gaming Platform.
            </h1>
            <button>Learn More</button>
          </div>
        </div>

        <div className="about">
          <div className="join_players">
            <h1>Compete With Players Arround The World</h1>
            <div>
              <span>
                <h2>15K+</h2>
                <p>Page view</p>
              </span>
              <span>
                <h2>120K+</h2>
                <p>Users</p>
              </span>
              <span>
                <h2>10K+</h2>
                <p>Money spent</p>
              </span>
            </div>
          </div>
          <div className="about_1 abt1">
            <img src={buy} alt="" />
            <span>
              <h1>Buy Your Coins</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                ex officia itaque odit ipsum, aut saepe, illo ratione dolore qui
                accusamus.
              </p>
            </span>
          </div>
          <div className="about_1 abt2">
            <span>
              <h1>Create Your Lobby</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                ex officia itaque odit ipsum, aut saepe, illo ratione dolore qui
                accusamus.
              </p>
            </span>
            <img src={l} alt="" />
          </div>
          <div className="about_1 abt1">
            <img src={lob} alt="" />
            <span>
              <h1>Wait Others And Start</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                ex officia itaque odit ipsum, aut saepe, illo ratione dolore qui
                accusamus.
              </p>
            </span>
          </div>
          <div className="get_started">
            <div>
              <h1>Earn Money By Winning Games. </h1>
              <button onClick={() => navigate("/login")}>Join Now</button>
            </div>
          </div>

          <div className="contact">

            <div className="left_contact">
              <h1>Contact Us</h1>
              <p>Fill up the form and our team will get back to you.</p>
            </div>

            <div className="right_contact">
              <input type="text" name="" id="" placeholder="Name" />
              <input type="number" name="" id="" placeholder="Phone Number" />
              <input type="email" name="" id="" placeholder="Email" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="Description"
              ></textarea>
              <button>Send</button>
            </div>

          </div>
          <footer>
            <div className="social_media">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-google"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-twitch"></i>
            </div>
            <p>TERMS & CONDITION / PRIVACY POLICY / RETURN POLICY/ ACCOUNT</p>
              <span></span>
        </footer>
        </div>

       
      </div>
    </div>
  );
};

export default Home;

import React from "react";
// import Header from "../../components/Header/Header";
// import Typewriter from "typewriter-effect";
import "./Home.css";
import Hello from "../../components/Hello/Hello";
import NameText from "../../components/NameText/NameText";

const Home = () => {
  return (
    <>
     
      
        <div className="main">
          <h1>
          <Hello></Hello> <br />
          <NameText></NameText>



           
          </h1>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
          <button>Projects</button>
        </div>
        <div className="social-media">
          <div className="social">
            <a href="https://www.linkedin.com/in/aqib-khan-0539b3196/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="social">
            <a href="https://twitter.com/its_aqib_khan">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <div className="social">
            <a href="https://www.instagram.com/its_aqib_khan_yousufzaii/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100012331595444">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className="social">
            <a href="https://github.com/aqibwasikhan43">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      
    </>
  );
};

export default Home;
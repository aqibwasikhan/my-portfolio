import React from "react";
import Header from "../../components/Header/Header";
import Home from "../Home/Home";
import "./Main.css"
const Main = () => {
  return (
    <>
      <Header></Header>
      <section className="home">
        <Home></Home>

      </section>
    </>
  );
};

export default Main;

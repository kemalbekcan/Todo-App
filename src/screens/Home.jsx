import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";
import AddItem from "../Components/AddItem";
import Table from "../Components/Table";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <AddItem />
      <Table />
      <Footer />
    </Fragment>
  );
};

export default Home;

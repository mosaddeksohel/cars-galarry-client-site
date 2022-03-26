import React from "react";
import { useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";

const Home = () => {
  const { cars } = useSelector((state) => state.carsReducrs);
  return (
    <DefaultLayout>
      <h1>Home Page</h1>
      <h2>Total Cars are : {cars.length}</h2>
    </DefaultLayout>
  );
};

export default Home;

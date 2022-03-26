import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import getAllCars from "../redux/actions/carsAction";

const Home = () => {
  const { cars, loading } = useSelector((state) => state.carsReducrs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars);
  }, []);

  return (
    <DefaultLayout>
      <h1>Home Page</h1>
      <h2>Total Cars are : {cars.length}</h2>
    </DefaultLayout>
  );
};

export default Home;

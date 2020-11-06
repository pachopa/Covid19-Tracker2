import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import Cards from "./functional-components/cards";
import CountryPicker from "./class-components/countrypicker";

import { fetchDataByCountries, fetchCountries } from "./api";

import styles from "./app.module.css";
import covidImage from "../src/images/covid.png";
//
//
const App = () => {
  // const fetchedDataByCountries = fetchDataByCountries();
  const [fetchedCovidCasesData, setfetchedCovidCasesData] = useState({});

  useEffect(() => {
    const fetchedDataByCountries = async () => {
      const initialFetchedData = await fetchDataByCountries();
      setfetchedCovidCasesData(initialFetchedData);
    };
    fetchedDataByCountries();
  }, []);

  const handleCountryChange = async () => {};

  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={covidImage} alt="COVID-19" />
        <Cards fetchedCovidCasesData={fetchedCovidCasesData} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
      </div>
=======

import { fetchDataByCountries } from "./api";

import useStyles from "./styles";
import covidImage from "../src/images/covid.png";
//
//
function App() {
  const fetchedDataByCountries = fetchDataByCountries();

  return (
    <>
      <div className></div>
>>>>>>> c519879037ff3c8bdd89b6e44798111e960682a7
    </>
  );
};

export default App;

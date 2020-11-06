import React, { useState, useEffect } from "react";
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
    </>
  );
};

export default App;

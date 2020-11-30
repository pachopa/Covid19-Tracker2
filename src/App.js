//import react and react-hooks
import React, { useState, useEffect } from "react";

//import components
import Cards from "./functional-components/cards";
import CountryPicker from "./class-components/countrypicker";
import Chart from "./class-components/chart";

//import API
import { fetchDataByCountries } from "./api";
// import { fetchCountries } from "./api";

import styles from "./app.module.css";
import covidImage from "../src/images/covid.png";

/**
 *  What this does: This is a main functional component that controls all API data and structurs all components
 *  Feature: 1. Fetch and transfer data to child components as prop
 *           2. Handle 'country' data when a user select a specific country
 */
const App = () => {
  /**
   *  What this does: Used a react useState() hook to treate data as state
   *  Feature: 1. The setState function is used to update the state
   *
   */
  const [fetchedCovidCasesData, setfetchedCovidCasesData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    /**
     *  What this does: same as componentDidMount(), this fetches Covid cases data just after rendering
     *  Feature: 1. The setState function is used to update the state
     *           2. Used Async/Await to allows an asynchronous
     *
     */
    const fetchedDataByCountries = async () => {
      const initialFetchedData = await fetchDataByCountries();
      setfetchedCovidCasesData(initialFetchedData);
    };
    fetchedDataByCountries();
  }, []);

  const handleCountryChange = async (country) => {
    /**
     *  What this does:
     *  Feature: 1. The setState function is used to update the state
     *           2. Used Async/Await to allows an asynchronous
     *
     */
    const fetchedDataByCountries = await fetchDataByCountries(country);

    setfetchedCovidCasesData(fetchedDataByCountries);
    setCountry(country);
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={covidImage} alt="COVID-19" />
        <Cards fetchedCovidCasesData={fetchedCovidCasesData} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart
          fetchedCovidCasesData={fetchedCovidCasesData}
          country={country}
        />
      </div>
    </>
  );
};

export default App;

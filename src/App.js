//import react and react-hooks
import React, { useState, useEffect } from "react";

//import components
import Cards from "./functional-components/cards";
import CountryPicker from "./class-components/countrypicker";
import Chart from "./class-components/chart";

//import API
import { fetchDataByCountries, fetchCountries } from "./api";

import styles from "./app.module.css";
import covidImage from "../src/images/covid.png";

//
const App = () => {
  const [fetchedCovidCasesData, setfetchedCovidCasesData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchedDataByCountries = async () => {
      const initialFetchedData = await fetchDataByCountries();
      setfetchedCovidCasesData(initialFetchedData);
    };
    fetchedDataByCountries();
  }, []);

  const handleCountryChange = async (country) => {
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

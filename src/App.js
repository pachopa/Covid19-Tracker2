import React, { useState, useEffect } from "react";

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
    </>
  );
}

export default App;

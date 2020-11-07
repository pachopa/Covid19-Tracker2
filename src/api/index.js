import axios from "axios";

const url = "http://covid19.mathdro.id/api";

export const fetchDataByCountries = async (country) => {
  try {
    if (country) {
      const {
        data: { confirmed, recovered, deaths, lastUpdate },
      } = await axios.get(`${url}/countries/${country}`);
      console.log(confirmed, "testestset");
      return { confirmed, recovered, deaths, lastUpdate };
    }
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (e) {
    console.log("error from the fetchDataByCountries function: ", e);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    return error;
  }
};

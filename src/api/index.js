import axios from "axios";

export default axios.create({
  baseURL: "http://covid19.mathdro.id/api",
});

export const fetchDataByCountries = async (country) => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get("http://covid19.mathdro.id/api");

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (e) {
    console.log("error from the fetchDataByCountries function: ", e);
  }
};

export const fetchCountries = async () => {
  try {
    const test = await axios.get("http://covid19.mathdro.id/api/countries");

    console.log(test);
  } catch (error) {
    console.log(error.message);
  }
};

// import axios from 'axios';

// const url = 'https://covid19.mathdro.id/api';

// export const fetchData = async (country) => {
//   let changeableUrl = url;
//   if(country) {
//     changeableUrl = `${url}/countries/${country}`
//   }

//   try {
//     const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

//     return { confirmed, recovered, deaths, lastUpdate }

//   } catch (e) {
//     console.log(e)
//   }
// }

// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(`${url}/daily`);

//     return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
//   } catch (error) {
//     return error;
//   }
// };

// export const fetchCountries = async () => {
//   try {
//     const { data : {countries}} = await axios.get(`${url}/countries`);

//     return countries.map((country) => country.name);
//   } catch(e) {

//   }
// }

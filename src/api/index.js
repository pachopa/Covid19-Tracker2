/** What this does: Import Axios to have a promised-based HTTP GET request
 */
import axios from "axios";

//base API URL
const url = "http://covid19.mathdro.id/api";

export const fetchDataByCountries = async (country) => {
  /**
   *  What this does: Request GET api to fetch corona cases data
   *              such as confirmed, recovered, deaths cases and the update time
   */

  try {
    /**
     *  What this does: Fetch data based on the API url
     *  Condition: if there is a country data, the GET request will receive only the specific country corona cases
     *             Other than that, the code will receive all countries corona cases data
     */

    if (country) {
      const {
        data: { confirmed, recovered, deaths, lastUpdate },
      } = await axios.get(`${url}/countries/${country}`);

      return { confirmed, recovered, deaths, lastUpdate };
    }
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (e) {
    /**
     * if an error occurs in the try block, this console.log will display the error message in the dev tools
     */
    console.log("error from the fetchDataByCountries function: ", e.message);
  }
};

export const fetchCountries = async () => {
  /**
   *  What this does: Request GET api to fetch all countries name over the world
   *
   */
  try {
    /**
     *  What this does: Fetch data based on the API url
     */
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchDailyData = async () => {
  /**
   *  What this does: Request GET api to fetch all corona cases by a country
   *
   */
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

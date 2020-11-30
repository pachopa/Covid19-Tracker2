import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../api/index";
import styles from "./countryPicker.module.css";

/**
 *  What this does: this class component enables a user to pick a specific country to view the country Covid cases
 *  Feature: 1. Drop down lists have created that displays all countries in the world
 *           2.
 */
class CountryPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      fetchedCountries: [],
    };
  }

  async componentDidMount() {
    /**
     *  What this does: Fetch Covid cases data and set the value using setState()
     */
    const fetchedAllCountries = await fetchCountries();

    const fetchedCountries = fetchedAllCountries.map((result) => {
      return result.name;
    });
    this.setState({ fetchedCountries: fetchedCountries });
  }

  render() {
    const { fetchedCountries } = this.state;

    return (
      /**
       *  What this does: Dropdown lists are created for the user that can choose one country
       */
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => {
            console.log("e.target.value:", e.target.value);
            this.props.handleCountryChange(e.target.value);
          }}
        >
          <option value="">Global</option>
          {fetchedCountries.length
            ? fetchedCountries.map((country, i) => (
                <option key={i} value={country}>
                  {" "}
                  {country}{" "}
                </option>
              ))
            : null}
        </NativeSelect>
      </FormControl>
    );
  }
}

export default CountryPicker;

import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../api/index";
import styles from "./CountryPicker.module.css";

class CountryPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      fetchedCountries: [],
    };
  }

  async componentDidMount() {
    const fetchedAllCountries = await fetchCountries();

    const fetchedCountries = fetchedAllCountries.map((result) => {
      return result.name;
    });
    this.setState({ fetchedCountries: fetchedCountries });
  }

  render() {
    const { fetchedCountries } = this.state;

    return (
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

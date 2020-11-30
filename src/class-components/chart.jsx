import React from "react";
import { Line, Bar } from "react-chartjs-2";

import styles from "./chart.module.css";

import { fetchDailyData } from "./../api/index";

/**
 *  What this does: this class component is for displaying charts with Covid-19 cases data
 *  Feature: 1. Two different charts show in the web page
 *           2. Fetch Covid cases data depending on a specific country
 */
class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //initilize the state
      fetchedDailyDataByCountry: {},
    };
  }

  async componentDidMount() {
    /**
     *  What this does: Fetch Covid cases data and set the value using setState()
     */
    const fetchedDailyDataByCountry = await fetchDailyData();
    this.setState({ fetchedDailyDataByCountry });
  }

  barChart() {
    /**
     *  What this does: display a bar chart using Covid-19 cases data
     *
     */
    const { confirmed, recovered, deaths } = this.props.fetchedCovidCasesData;
    const { country } = this.props;

    if (confirmed) {
      return (
        <Bar
          data={{
            labels: ["Infected", "Recovered", "Deaths"],
            datasets: [
              {
                label: "People",
                backgroundColor: [
                  "rgba(0, 0, 255, 0.5)",
                  "rgba(0, 255, 0, 0.5)",
                  "rgba(255, 0, 0, 0.5)",
                ],
                data: [confirmed.value, recovered.value, deaths.value],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}` },
          }}
        />
      );
    }

    return null;
  }

  lineChart() {
    /**
     *  What this does: display a line chart using Covid-19 cases data
     *
     */
    const dailyData = this.state.fetchedDailyDataByCountry;

    if (dailyData[0]) {
      // What this does: This If statement checks when dailyData has a value in it
      return (
        <Line
          data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [
              {
                data: dailyData.map((data) => data.confirmed),
                label: "Infected",
                borderColor: "#3333ff",
                fill: true,
              },
              {
                data: dailyData.map((data) => data.deaths),
                label: "Deaths",
                borderColor: "red",
                backgroundColor: "rgba(255, 0, 0, 0.5)",
                fill: true,
              },
            ],
          }}
        />
      );
    }
    return null;
  }

  render() {
    /**
     * Conditional Rendering
     * What this does: For the landing page, the line chart will be displayed but once the user clicks
     *                 the specific country, the bar chart will be displayed
     *
     */
    const { country } = this.props;
    return (
      <div className={styles.container}>
        {/* {country ? this.barChart() : this.lineChart()} */}
        {this.barChart()}
      </div>
    );
  }
}

export default Chart;

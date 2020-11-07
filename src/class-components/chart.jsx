import React from "react";
import { Line, Bar } from "react-chartjs-2";

import styles from "./chart.module.css";
import { fetchDailyData } from "./../api/index";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedDailyDataByCountry: {},
    };
  }

  async componentDidMount() {
    const fetchedDailyDataByCountry = await fetchDailyData();

    this.setState({ fetchedDailyDataByCountry });
  }

  barChart() {
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
    const dailyData = this.state.fetchedDailyDataByCountry;

    if (dailyData[0]) {
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
    const { country } = this.props;
    console.log(country, "fetchedCovidCasesData");
    return (
      <div className={styles.container}>
        {country ? this.barChart() : this.lineChart()}
      </div>
    );
  }
}

export default Chart;

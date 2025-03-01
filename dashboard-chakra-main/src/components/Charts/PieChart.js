import React, { Component } from "react";
import { Box } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: {
        chart: {
          type: "pie",
          toolbar: {
            show: false,
          },
        },
        labels: this.props.labels || [],
        colors: this.props.colors || ["#4318FF", "#6AD2FF", "#EFF4FB"],
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 0,
        },
        tooltip: {
          enabled: true,
          theme: "dark",
          y: {
            formatter: function(value) {
              return value;
            },
            title: {
              formatter: function(seriesName) {
                return seriesName;
              },
            },
          },
        },
        plotOptions: {
          pie: {
            donut: {
              size: "65%",
              labels: {
                show: false,
                total: {
                  show: false,
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "#1B2559",
                },
                value: {
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "#6AD2FF",
                },
              },
            },
          },
        },
      },
    });
  }

  render() {
    return (
      <Box width="100%" height="100%">
        <ReactApexChart
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="pie"
          width="100%"
          height="100%"
        />
      </Box>
    );
  }
}

export default PieChart;
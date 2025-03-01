import React, { Component } from "react";
import { Box } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";

class LineChart extends Component {
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
        chart: { type: "line" }, 
        stroke: { curve: "Straingth", width: 2 }, 
        markers: { size: 4 }, 
        xaxis: {
          categories: this.props.chartOptions?.categories || [],
        },
        title: {
          text: this.props.title || "Line Chart", 
        },
        tooltip: {
          theme: "dark", 
        },
      },
    });
  }

  render() {
    return (
      <Box width="100%" height="400px">
        <ReactApexChart
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="line"
          width="100%"
          height="100%"
        />
      </Box>
    );
  }
}

export default LineChart;

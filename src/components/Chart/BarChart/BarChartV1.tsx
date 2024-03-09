import React, { useEffect, useState } from "react";
// import * as echarts from "echarts";
import ReactEcharts from "echarts-for-react";

interface BarChartV1Props {
  xAxisData: string[];
  yAxisData: string[];
  title: string;
  color: string;
}

const BarChartV1: React.FC<BarChartV1Props> = (props) => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    if (props.xAxisData.length > 0 && props.yAxisData.length > 0) {
      const option = {
        title: {
          text: props.title,
          textStyle: {
            fontSize: "24px",
            fontWeight: "330",
            color: "#012970",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "1%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: props.xAxisData,
            axisTick: {
              alignWithLabel: true,
            },
            axisLabel: { interval: 0, rotate: 30 },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: { interval: 0, rotate: 0 },
          },
        ],
        series: [
          {
            name: "Popularity",
            type: "bar",
            barWidth: "60%",
            data: props.yAxisData,
            itemStyle: {
              color: props.color,
            },
          },
        ],
      };
      setChartData(option);
    }
  }, [props.xAxisData, props.yAxisData]);

  // console.log(chartData);

  return <div>{chartData && <ReactEcharts option={chartData} />}</div>;
};

export default BarChartV1;

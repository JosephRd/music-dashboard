import React, { useEffect, useState } from "react";
// import * as echarts from "echarts";
import ReactEcharts from "echarts-for-react";

interface PieChartV1Props {
  data: string[];
  title: string;
}

const PieChartV1: React.FC<PieChartV1Props> = (props) => {
  const [chartData, setChartData] = useState<any>(null);

  //   console.log(props.data);

  const formattedData = props.data.map((item: any) => ({
    value: parseInt(item.popularity),
    name: item.title,
  }));

  //   console.log(formattedData);

  useEffect(() => {
    if (props.data.length > 0) {
      const option = {
        title: {
          text: props.title,
          textStyle: {
            fontSize: "24px",
            fontWeight: "330",
            color: "#012970",
          },
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [50, 250],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: formattedData,
          },
        ],
      };

      setChartData(option);
    }
  }, [props.data]);

  return (
    <div style={{ width: "850px", height: "667px" }}>
      {chartData && <ReactEcharts style={{ width: "100%", height: "100%" }} option={chartData} />}
    </div>
  );
};

export default PieChartV1;

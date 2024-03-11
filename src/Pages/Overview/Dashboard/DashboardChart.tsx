import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import BarChartV1 from "../../../components/Chart/BarChart/BarChartV1";
import PieChartV1 from "../../../components/Chart/PieChart/PieChartV1";
import TableV1 from "../../../components/Table/TableV1";

interface DashboardChartProps {
  filter: string;
}

const DashboardChart: React.FC<DashboardChartProps> = (props) => {
  const [artistData, setArtistData] = useState<string[]>([]);
  const [popularityData, setPopularityData] = useState<string[]>([]);
  const [titleData, setTitleData] = useState<string[]>([]);
  const [popularityData2, setPopularityData2] = useState<string[]>([]);
  const [pieChartData, setPieChartData] = useState<string[]>([]);
  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, [props.filter]);

  const fetchData = () => {
    Axios.get(`http://localhost:3001/artist-by-genre/${props.filter}`)
      .then((res) => {
        setArtistData(res.data.map((item: any) => item.artist));
        setPopularityData(res.data.map((item: any) => item.popularity));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    Axios.get(`http://localhost:3001/title-by-genre/${props.filter}`)
      .then((res) => {
        setPieChartData(res.data);
        setTitleData(res.data.map((item: any) => item.title));
        setPopularityData2(res.data.map((item: any) => item.popularity));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    Axios.get(`http://localhost:3001/get-table-data/${props.filter}`)
      .then((res) => {
        setTableData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  console.log(tableData);

  return (
    <>
      <Row className="mt-5" gutter={20}>
        <Col className="gutter-row" span={12}>
          <Row>
            <Col span={24}>
              <div className="card">
                <div className="card-body">
                  <div>
                    <BarChartV1 title={"Artist by Genre"} xAxisData={artistData} yAxisData={popularityData} color={"blue"} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "2rem" }}>
            <Col span={24}>
              <div className="card">
                <div className="card-body">
                  <div>
                    <BarChartV1 title={"Song by Genre"} xAxisData={titleData} yAxisData={popularityData2} color={"orange"} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className="card">
            <div className="card-body">
              <div>
                <PieChartV1 title={"Song by Genre Distribution"} data={pieChartData} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5" span={24}>
          <div className="card">
            <div className="card-body">
              <h1 style={{ fontSize: "24px", fontWeight: "400", color: "#012970" }}>List of Song per Genre</h1>
              <div style={{ padding: "1rem" }}>
                <TableV1 data={tableData} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default DashboardChart;

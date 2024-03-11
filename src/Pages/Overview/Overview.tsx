import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import DashboardCard from "./Dashboard/DashboardCard";
import DashboardChart from "./Dashboard/DashboardChart";
import { Col, Row, Select, Typography } from "antd";
import Axios from "axios";
import Footer from "../../components/Footer/Footer";

function Overview() {
  const [genre, setGenre] = useState("pop");
  const [genreList, setGenreList] = useState([]);
  const { Title } = Typography;

  function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleChange = (value: string) => {
    setGenre(value);
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/get-genre")
      .then((res) => {
        setGenreList(
          res.data.map((item: any) => ({
            value: item.genre,
            label: capitalizeFirstLetter(item.genre),
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <main id="main" className="main">
      <PageTitle title="Overview" />
      <DashboardCard />
      <Row style={{ marginTop: "2rem" }}>
        <Col span={24}>
          <h1 style={{ fontSize: "24px", fontWeight: "400", color: "#012970", marginBottom: "15px" }}>Filter</h1>
          <Title level={5}>Genre:</Title>
          <Select value={genre} style={{ width: 200 }} onChange={handleChange} options={genreList} />
        </Col>
      </Row>
      <DashboardChart filter={genre} />
      {/* <Footer /> */}
    </main>
  );
}

export default Overview;

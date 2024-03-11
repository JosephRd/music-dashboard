import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import CardV1 from "../../../components/Card/CardV1";
import Axios from "axios";

const Dashboard = () => {
  const [pop, setPop] = useState<string[]>([]);
  const [kpop, setKpop] = useState<string[]>([]);
  const [hiphop, setHiphop] = useState<string[]>([]);
  const [rb, setRb] = useState<string[]>([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/top-pop")
      .then((response) => {
        setPop(response.data.map((item: any) => [item.artist, item.popularity, item.title]));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    Axios.get("http://localhost:3001/top-kpop")
      .then((response) => {
        setKpop(response.data.map((item: any) => [item.artist, item.popularity, item.title]));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    Axios.get("http://localhost:3001/top-hiphop")
      .then((response) => {
        setHiphop(response.data.map((item: any) => [item.artist, item.popularity, item.title]));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    Axios.get("http://localhost:3001/top-rb")
      .then((response) => {
        setRb(response.data.map((item: any) => [item.artist, item.popularity, item.title]));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Row gutter={20}>
        <Col className="gutter-row" span={6}>
          <div>
            <CardV1 data={pop} title="Pop" />
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div>
            <CardV1 data={kpop} title="K-Pop" />
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div>
            <CardV1 data={hiphop} title="Hip Hop" />
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div>
            <CardV1 data={rb} title="R&B" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;

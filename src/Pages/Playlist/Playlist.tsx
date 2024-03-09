import { useEffect, useState } from "react";
import React from "react";
// import { Col, Row } from "antd";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Button, Col, Row, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

function Playlists() {
  const [playlistList, setPlaylistList] = useState([]);
  const [header, setHeader] = useState(false);
  const [judul, setJudul] = useState(false);

  // const getPlaylists = () => {
  useEffect(() => {
    Axios.get("http://localhost:3001/show").then((response) => {
      setPlaylistList(response.data);
    });
  }, []);

  // };

  console.log(playlistList);

  useEffect(() => {
    if (playlistList.length > 0) {
      setHeader(true);
      setJudul(true);
    }
  }, [playlistList]);

  return (
    <>
      {judul ? (
        <Row>
          <Col style={{ padding: "10px" }} span={12}>
            <h2>My Playlist</h2>
          </Col>
          <Col style={{ textAlign: "end", padding: "10px" }} span={12}>
            <Link to="/playlists/create-playlist">
              <Button icon={<CaretRightOutlined />}>Add more playlist</Button>
            </Link>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col span={8}></Col>
          <Col span={8} style={{ textAlign: "center" }}>
            <h1>Sorry you don't have any Playlist</h1>
            <h3>
              <Link to="/playlists/create-playlist">
                <Button>Click here to create Playlist</Button>
              </Link>
            </h3>
          </Col>
          <Col span={8}></Col>
        </Row>
      )}

      {header && (
        <Row
          style={{
            margin: "1rem",
            borderBottom: "1px solid #ccc",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(4px)",
            borderRadius: "0.5rem",
          }}
        >
          <Col style={{ padding: "10px" }} span={24}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6}>
                <Typography.Text strong>Artist</Typography.Text>
              </Col>
              <Col className="gutter-row" span={6}>
                <Typography.Text strong>Album</Typography.Text>
              </Col>
              <Col className="gutter-row" span={6}>
                <Typography.Text strong>Date Release</Typography.Text>
              </Col>
              <Col className="gutter-row" span={6}>
                <Typography.Text strong>Total Tracks</Typography.Text>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
      {playlistList.map((val, key) => {
        return (
          <Row
            style={{
              margin: "1rem",
              border: "1px solid #ccc",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(4px)",
              borderRadius: "0.5rem",
            }}
          >
            <Col style={{ padding: "10px" }} span={24}>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                  <div>{val["artist"]}</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div>{val["album"]}</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div>{val["year"]}</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div>{val["total_tracks"]}</div>
                </Col>
              </Row>
            </Col>
          </Row>
          // <div>
          //   <div>
          //     <h3>Artist: {val["artist"]}</h3>
          //     <h3>TotalTracks: {val["total_tracks"]}</h3>
          //     <h3>Album: {val["album"]}</h3>
          //     <h3>Year: {val["year"]}</h3>
          //   </div>
          //   {/* <div>
          //       <input
          //         type="text"
          //         placeholder="2000..."
          //         onChange={(event) => {
          //           setNewWage(event.target.value);
          //         }}
          //       />
          //       <button
          //         onClick={() => {
          //           updateEmployeeWage(val.id);
          //         }}
          //       >
          //         {" "}
          //         Update
          //       </button>

          //       <button
          //         onClick={() => {
          //           deleteEmployee(val.id);
          //         }}
          //       >
          //         Delete
          //       </button>
          //     </div> */}
          // </div>
        );
      })}
    </>
  );
}

export default Playlists;

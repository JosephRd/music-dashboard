import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Button, Col, Row, Typography } from "antd";
import { CaretRightOutlined, DeleteOutlined } from "@ant-design/icons";

function Playlists() {
  const [playlistList, setPlaylistList] = useState([]);
  const [header, setHeader] = useState(false);
  const [judul, setJudul] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/show").then((response) => {
      setPlaylistList(response.data);
    });
  }, [playlistList]);

  const deleteEmployee = (id: any) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setPlaylistList(
        playlistList.filter((val: any) => {
          return val.id != id;
        })
      );
    });
  };

  // console.log(playlistList);

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
              <Col className="gutter-row" span={5}>
                <Typography.Text strong>Date Release</Typography.Text>
              </Col>
              <Col className="gutter-row" span={5}>
                <Typography.Text strong>Total Tracks</Typography.Text>
              </Col>
              <Col className="gutter-row" span={2}>
                <Typography.Text strong>Action</Typography.Text>
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
                <Col className="gutter-row" span={5}>
                  <div>{val["year"]}</div>
                </Col>
                <Col className="gutter-row" span={5}>
                  <div>{val["total_tracks"]}</div>
                </Col>
                <Col className="gutter-row" span={2}>
                  <Button
                    icon={<DeleteOutlined style={{ color: "white" }} />}
                    style={{ backgroundColor: "red" }}
                    onClick={() => {
                      deleteEmployee(val["playlist_id"]);
                    }}
                  ></Button>
                </Col>
              </Row>
            </Col>
          </Row>
        );
      })}
    </>
  );
}

export default Playlists;

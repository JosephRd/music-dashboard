import { useEffect, useState } from "react";
import { Button, Col, Input, Row, Space, Card, Typography, message } from "antd";
import Axios from "axios";
import Meta from "antd/es/card/Meta";
import { HeartTwoTone, LeftCircleOutlined } from "@ant-design/icons";
import "./CreatePlaylist.css";
import { Link } from "react-router-dom";

function CreatePlaylist() {
  const [searchArtist, setSearchArtist] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albumList, setAlbumList] = useState<any[]>([]);

  const CLIENT_ID = "173388348b7f4d0786f34a0979c32f2c";
  const CLIENT_SECRET = "b72803d07fa7403dabafe608068fcb1d";

  useEffect(() => {
    //API token
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((res) => res.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  async function search() {
    //request using search to get artist ID
    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    var artistID = await fetch("https://api.spotify.com/v1/search?q=" + searchArtist + "&type=artist", searchParameters)
      .then((res) => res.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    //get request with artist id to take all the album's artist
    var albums = await fetch("https://api.spotify.com/v1/artists/" + artistID + "/albums" + "?include_groups=single&limit=50", searchParameters)
      // var albums = await fetch("https://api.spotify.com/v1/artists/" + artistID + "/top-tracks?country=US", searchParameters)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAlbumList(data.items);
      });
  }

  const runInOrder = async (artistName: string, albumName: string, releaseDate: string, totalTracks: number, covers: string) => {
    try {
      await Axios.post("http://localhost:3001/create", {
        artist: artistName,
        total_tracks: totalTracks,
        album: albumName,
        year: releaseDate,
        cover: covers,
      });

      console.log("Data sent successfully");
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <>
      <Row>
        <Col span={8}>
          <h1>
            <Link to="/playlists">
              <Button icon={<LeftCircleOutlined />}>Back to my playlist</Button>
            </Link>
          </h1>
        </Col>
        <Col span={8} style={{ textAlign: "center" }}>
          <h1>Search for the artist</h1>
        </Col>
        <Col span={8}></Col>
      </Row>

      <Row style={{ textAlign: "center" }}>
        <Col span={8}></Col>
        <Col span={8}>
          <h1>
            <Space.Compact
              style={{
                width: "100%",
              }}
            >
              <Input
                type="input"
                placeholder="Search For Artist"
                onChange={(event) => {
                  setSearchArtist(event.target.value);
                }}
              />
              <Button onClick={search} type="primary">
                Search
              </Button>
            </Space.Compact>
          </h1>
        </Col>
        <Col span={8}></Col>
      </Row>

      <Row wrap={true} gutter={20} style={{ marginLeft: "4rem" }}>
        {albumList.map((album, i) => {
          return (
            <Col style={{ padding: "1rem" }} className="gutter-row" span={6}>
              <Card
                hoverable
                style={{
                  width: 240,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(4px)",
                  borderRadius: "0.5rem",
                  padding: "1rem",
                  borderColor: "grey",
                }}
                cover={<img src={album.images[0].url} />}
              >
                <Meta title={album.name} description={album.artists[0].name} />
                <Typography style={{ color: "grey" }}>{album.total_tracks + " Tracks"}</Typography>
                <Button
                  id="button-add"
                  icon={<HeartTwoTone className="addButton" twoToneColor="#eb2f96" />}
                  onClick={() => {
                    runInOrder(album.artists[0].name, album.name, album.release_date, album.total_tracks, album.images[0].url);
                    message.info("Added to your playlist");
                  }}
                >
                  Add to my playlist
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default CreatePlaylist;

const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.listen(3001, () => {
  console.log("your server running");
});

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "music-dashboard",
});

app.post("/create", (req, res) => {
  const artist = req.body.artist;
  const total_tracks = req.body.total_tracks;
  const album = req.body.album;
  const year = req.body.year;
  const cover = req.body.cover;

  db.query(
    "INSERT INTO playlist (artist, total_tracks, album, year, cover) VALUES (?,?,?,?,?)",
    [artist, total_tracks, album, year, cover],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM playlist where playlist_id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  });
});

app.get("/show", (req, res) => {
  db.query("SELECT * FROM playlist", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/top-pop", (req, res) => {
  db.query(
    "select artist, popularity, title from best_song where genre = 'pop' and year = '2023' order by popularity desc limit 1",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/top-kpop", (req, res) => {
  db.query(
    "select artist, popularity, title from best_song where genre = 'k-pop girl group' and year = '2023' order by popularity desc limit 1",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/top-hiphop", (req, res) => {
  db.query(
    "select artist, popularity, title from best_song where genre = 'canadian hip hop' and year = '2023' order by popularity desc limit 1",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/top-rb", (req, res) => {
  db.query(
    "select artist, popularity, title from best_song where genre = 'canadian contemporary r&b' and year = '2023' order by popularity desc limit 1",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/artist-by-genre/:genre", (req, res) => {
  const genre = req.params.genre;
  db.query("select artist, popularity from best_song where genre = ? and year = '2023' order by popularity desc", [genre], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/title-by-genre/:genre", (req, res) => {
  const genre = req.params.genre;
  db.query("select title, popularity from best_song where genre = ? and year = '2023' order by popularity desc", [genre], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/get-genre", (req, res) => {
  db.query("select DISTINCT(genre) from best_song where year = '2023'", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/get-table-data/:genre", (req, res) => {
  const genre = req.params.genre;
  db.query(
    "select artist, title, genre, popularity from best_song where genre = ? and year = '2023' order by popularity desc",
    genre,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

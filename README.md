# Getting Started with my Music 2023 Dashboard

This project was created using React Js, MySQL, and Node Js.
For the library I'm using Ant Design for the layout, structure, and styling, E-charts for visualizing data, and Bootstrap for additional styling.

## Feature

In this project, there are some feature such as:

### `Home`

![home 1](https://github.com/JosephRd/music-dashboard/assets/75560390/966ae9bd-24e1-49d8-ab07-98761d0dcafc)

On the left of the page, there is a sidebar to display some menus on this website, there are Home/Dashboard and My Playlist.
Let's move on to the content side of things. There are some Card components at the top of the screen that feature popular genres including R&B, Pop, K-Pop, and Hip Hop. Each card shows the number of popularity artists, their names, and the names of their songs.


![home 2](https://github.com/JosephRd/music-dashboard/assets/75560390/7a7622b4-82cd-4b84-b93b-eefb7a51ef96)

![home 3](https://github.com/JosephRd/music-dashboard/assets/75560390/bfbbae1d-5501-4895-ac1d-9214bcfc1001)


I'm doing some data analysis and creating some charts to help visualize the data underneath the cards component, for example Artist by Genre, Song by Genre, Song by Genre Distribution, and also a table that shows a list of the song including the artist name, song name, genre, and popularity.

There is a dropdown option at the top of the charts that allows you to filter the data by genre.


### `My Playlist`

![my playlist](https://github.com/JosephRd/music-dashboard/assets/75560390/cd1a1682-998d-4747-9967-729c53bba585)

This page displays the playlist that we previously created on the "Create my Playlist" page, including name of the artist, album, data release, and total tracks. There is a delete option in the right corner to remove any playlists that we no longer enjoy.

![dont have playlist](https://github.com/JosephRd/music-dashboard/assets/75560390/339069fb-7385-4dfa-8f31-c0af9eebbb00)

There is some notice when we don't have a playlist. If you click the button to create a playlist, it will direct you to the "Create my Playlist" page.


### `Create my Playlist`

![create-playlist](https://github.com/JosephRd/music-dashboard/assets/75560390/18b984c0-0720-43b9-8699-db0037b10805)
On this page, we can create a playlist by searching for the artist using the form at the top. The list of songs was generated using the Spotify API. After that, you can select the artist by clicking the button underneath the card, and the song will be saved to your playlist.












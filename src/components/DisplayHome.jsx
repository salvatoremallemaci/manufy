import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { albumsData, songsData, songsManuData } from "../assets/assets";
import AlbumItems from "./AlbumItems";
import SongItems from "./SongItems";

// Funzione per mescolare un array
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const DisplayHome = () => {
  const [shuffledAlbums, setShuffledAlbums] = useState([]);
  const [shuffledSongs, setShuffledSongs] = useState([]);

  useEffect(() => {
    setShuffledAlbums(shuffle(albumsData));
    setShuffledSongs(shuffle(songsManuData)); // randomizza SOLO qui
  }, []);

  return (
    <>
      <Navbar />
      <div className="mb-4">
        {/* <h1 className="my-5 font-bold text-2xl">Chi è?<em> I chierichetti!</em></h1> */}
        <h1 className="my-5 font-bold text-2xl">✨ <em>best colleagues ever</em> ✨</h1>
        <div className="flex overflow-auto">
          {shuffledAlbums.map((item, index) => (
            <AlbumItems
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl"><em>Contenuti extra</em></h1>
        <div className="flex overflow-auto">
          {shuffledSongs.map((item, index) => (
            <SongItems
              key={index}
              name={item.name}
              desc={item.desc}
              id={index}
              image={item.image}
              playlist={shuffledSongs}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
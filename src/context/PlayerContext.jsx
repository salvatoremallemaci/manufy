import { createContext, useEffect, useRef, useState } from "react";
import { songsManuData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  // Stato per la playlist attiva
  const [playlist, setPlaylist] = useState(songsManuData);
  const [track, setTrack] = useState(songsManuData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: " --",
      minute: "-- ",
    },
    totalTime: {
      second: " --",
      minute: "-- ",
    },
  });

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          ((audioRef.current.currentTime / audioRef.current.duration) * 100) + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  // Modificato: accetta anche la playlist
  const playWithId = async (id, playlistArg = playlist) => {
    if (!playlistArg[id] || playlistArg[id].outro) return;

    setPlaylist(playlistArg);
    await setTrack(playlistArg[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const before = async () => {
    const currentIndex = playlist.indexOf(track);
    let prevIndex = currentIndex - 1;

    while (prevIndex >= 0 && playlist[prevIndex]?.outro) {
      prevIndex--;
    }

    if (prevIndex >= 0) {
      await setTrack(playlist[prevIndex]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const after = async () => {
    const currentIndex = playlist.indexOf(track);
    let nextIndex = currentIndex + 1;

    while (nextIndex < playlist.length && playlist[nextIndex]?.outro) {
      nextIndex++;
    }

    if (nextIndex < playlist.length) {
      await setTrack(playlist[nextIndex]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const seekBgClick = (e) => {
    const newTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;

    audioRef.current.currentTime = newTime;

    // Se il video è attivo, aggiorna anche il video
    const video = document.querySelector("video");
    if (video) {
      video.currentTime = newTime;
    }
  };

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    playStatus,
    time,
    setTrack,
    setPlayStatus,
    setTime,
    play,
    pause,
    playWithId,
    before,
    after,
    seekBgClick,
    setPlaylist,
    playlist,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
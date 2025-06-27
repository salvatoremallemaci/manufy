import { createContext, useEffect, useRef, useState } from "react";
import { songsData, songsManuData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsManuData[4]);
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
        seekBar.current.style.width = ((audioRef.current.currentTime / audioRef.current.duration) * 100) + "%"
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        })
      }
    }, 1000)
  }, [audioRef])

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  }
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  }

  const playWithId = async (id) => {
    await setTrack(songsManuData[id])
    await audioRef.current.play();
    setPlayStatus(true);
  }

  const before = async () => {
    if (track.id > 0) {
      await setTrack(songsManuData[track.id - 1])
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }
  const after = async () => {
    if (track.id < songsManuData.length - 1) {
      await setTrack(songsManuData[track.id + 1])
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }

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
    seekBgClick
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;

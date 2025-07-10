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

  const waitForCanPlay = (audio) => {
    return new Promise((resolve) => {
      const onCanPlay = () => {
        audio.removeEventListener('canplaythrough', onCanPlay);
        resolve();
      };
      audio.addEventListener('canplaythrough', onCanPlay);
    });
  };

  const after = async () => {
    const currentIndex = playlist.indexOf(track);
    let nextIndex = currentIndex + 1;

    // Salta le outro
    while (nextIndex < playlist.length && playlist[nextIndex]?.outro) {
      nextIndex++;
    }

    if (nextIndex < playlist.length) {
      const nextTrack = playlist[nextIndex];

      // Metti pausa tra una canzone e l'altra
      setPlayStatus(false);          // disattiva visualmente il play
      audioRef.current.pause();      // pausa hard (non necessario ma sicuro)
      audioRef.current.currentTime = 0;

      await new Promise((resolve) => setTimeout(resolve, 700)); // 700ms di pausa

      setTrack(nextTrack);           // imposta la nuova traccia
      const audio = audioRef.current;

      await waitForCanPlay(audio);   // aspetta che sia pronta
      await audio.play();            // avvia
      setPlayStatus(true);           // aggiorna stato
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

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      seekBar.current.style.width =
        ((audio.currentTime / audio.duration) * 100) + "%";
      setTime({
        currentTime: {
          second: Math.floor(audio.currentTime % 60),
          minute: Math.floor(audio.currentTime / 60),
        },
        totalTime: {
          second: Math.floor(audio.duration % 60),
          minute: Math.floor(audio.duration / 60),
        },
      });
    };

    const handleEnded = () => {
      after(); // vai al brano successivo
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [after]);

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
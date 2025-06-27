// Player.jsx (aggiornato per mantenere stato video tra le tracce)

import React, { useContext, useRef, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    seekBar,
    seekBg,
    play,
    pause,
    playStatus,
    track,
    time,
    after,
    before,
    seekBgClick,
    audioRef,
    setPlayStatus,
  } = useContext(PlayerContext);

  const [showVideo, setShowVideo] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [wasVideoOpen, setWasVideoOpen] = useState(false);
  const videoRef = useRef(null);
  const previousTrackId = useRef(track.id);

  const handlePlay = () => {
    setUserInteracted(true);
    if (showVideo && videoRef.current) {
      videoRef.current.play();
    } else {
      play();
    }
    setPlayStatus(true);
  };

  const handlePause = () => {
    if (showVideo && videoRef.current) {
      videoRef.current.pause();
    } else {
      pause();
    }
    setPlayStatus(false);
  };

  const handleBefore = async () => {
    pause();
    if (videoRef.current) videoRef.current.pause();
    setWasVideoOpen(showVideo);
    setShowVideo(false);
    await before();
  };

  const handleAfter = async () => {
    pause();
    if (videoRef.current) videoRef.current.pause();
    setWasVideoOpen(showVideo);
    setShowVideo(false);
    await after();
  };

  useEffect(() => {
    const audio = audioRef.current;
    const video = videoRef.current;
    if (!audio || !userInteracted) return;

    if (track.id !== previousTrackId.current) {
      previousTrackId.current = track.id;
      if (wasVideoOpen && track.video) {
        setShowVideo(true);
      } else {
        setShowVideo(false);
        audio.currentTime = 0;
        audio.play();
        setPlayStatus(true);
      }
    }

    const syncFromAudio = () => {
      if (showVideo && video && Math.abs(audio.currentTime - video.currentTime) > 0.3) {
        video.currentTime = audio.currentTime;
      }
    };

    const handleVideoPlay = () => setPlayStatus(true);
    const handleVideoPause = () => setPlayStatus(false);

    audio.addEventListener("timeupdate", syncFromAudio);
    video?.addEventListener("play", handleVideoPlay);
    video?.addEventListener("pause", handleVideoPause);

    if (showVideo && video) {
      video.currentTime = audio.currentTime;
      video.play();
      audio.pause();
    }

    return () => {
      audio.removeEventListener("timeupdate", syncFromAudio);
      video?.removeEventListener("play", handleVideoPlay);
      video?.removeEventListener("pause", handleVideoPause);
    };
  }, [showVideo, audioRef, track, userInteracted, wasVideoOpen]);

  const handleVideoTimeUpdate = () => {
    if (audioRef.current && videoRef.current) {
      audioRef.current.currentTime = videoRef.current.currentTime;
    }
  };

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4 relative">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12 rounded" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 32) + "..."}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
          <img onClick={handleBefore} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
          {playStatus ? (
            <img onClick={handlePause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="" />
          ) : (
            <img onClick={handlePlay} className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
          )}
          <img onClick={handleAfter} className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>

        <div className="flex items-center gap-5">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div
            ref={seekBg}
            onClick={seekBgClick}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>

        {showVideo && track.video && (
          <div className="absolute bottom-full mb-4 w-full flex justify-center z-40">
            <div className="relative w-[90%] sm:w-[80%] md:w-full max-w-sm md:max-w-md aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900">
              <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-10" />
              <button
                className="absolute top-2 right-2 text-white hover:text-black bg-white/10 hover:bg-white transition px-2 py-1 rounded-full text-sm z-20"
                onClick={() => {
                  setShowVideo(false);
                  handlePause();
                }}
              >
                ✕
              </button>
              <video
                ref={videoRef}
                controls
                className="w-full h-full object-cover rounded-xl"
                onTimeUpdate={handleVideoTimeUpdate}
              >
                <source src={track.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>

      <div className="hidden lg:flex items-center gap-2 opacity-75">
        {track?.video && time.totalTime.minute !== "-- " && time.totalTime.second !== " --" &&
          <button
            disabled={!track.video}
            className={`flex items-center gap-1 px-3 py-1 border rounded-full text-xs font-bold transition ${!track.video
              ? "border-gray-600 text-gray-600 cursor-not-allowed"
              : showVideo
                ? "bg-white text-black border-white"
                : "border-white text-white hover:bg-white hover:text-black"
              }`}
            style={{ fontFamily: '"Circular", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            onClick={() => setShowVideo(true)}
          >
            Video Player
          </button>}
        <img className="w-4" src={assets.play_icon} alt="" />
        <img className="w-4" src={assets.mic_icon} alt="" />
        <img className="w-4" src={assets.queue_icon} alt="" />
        <img className="w-4" src={assets.speaker_icon} alt="" />
        <img className="w-4" src={assets.volume_icon} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="" />
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>
      {/* Bottone "Video Player" mobile migliorato */}
      {track?.video && time.totalTime.minute !== "-- " && time.totalTime.second !== " --" && (
        <div className="fixed bottom-14 right-3 z-50 lg:hidden">
          <button
            disabled={!track.video}
            className={`px-4 py-2 rounded-full text-sm font-semibold shadow-md backdrop-blur-md transition-all duration-300 ${!track.video
              ? "bg-gray-600 text-white cursor-not-allowed"
              : showVideo
                ? "bg-white text-black"
                : "bg-white/10 text-white border border-white hover:bg-white hover:text-black"
              }`}
            style={{ fontFamily: '"Circular", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            onClick={() => setShowVideo(true)}
          >
            Video
          </button>
        </div>
      )}
    </div>
  );
};

export default Player;
import bell_icon from "./bell.png";
import home_icon from "./home.png";
import like_icon from "./like.png";
import loop_icon from "./loop.png";
import mic_icon from "./mic.png";
import next_icon from "./next.png";
import play_icon from "./play.png";
import pause_icon from "./pause.png";
import plays_icon from "./plays.png";
import prev_icon from "./prev.png";
import search_icon from "./search.png";
import shuffle_icon from "./shuffle.png";
import speaker_icon from "./speaker.png";
import stack_icon from "./stack.png";
import zoom_icon from "./zoom.png";
import plus_icon from "./plus.png";
import arrow_icon from "./arrow.png";
import mini_player_icon from "./mini-player.png";
import queue_icon from "./queue.png";
import volume_icon from "./volume.png";
import arrow_right from "./right_arrow.png";
import arrow_left from "./left_arrow.png";
import spotify_logo from "./spotify_logo.png";
import clock_icon from "./clock_icon.png";
import switch_to_video from "./switch_to_video.png";

import aadukalam from "./img/song-thumb/aadukalam.webp";
import david from "./img/song-thumb/david.png";
import dhaamdhoom from "./img/song-thumb/dhaam_dhoom.png";
import enpt from "./img/song-thumb/enpt.jpeg";
import guru from "./img/song-thumb/guru.png";
import kodi from "./img/song-thumb/kodi.png";
import manithan from "./img/song-thumb/manithan.png";
import oh_manapenne from "./img/song-thumb/oh-manapennae.png";

import tensromance from "./img/10s-romance-tamil.jpg";
import arrmix from "./img/arr-mix.jpg";
import hiphopradio from "./img/hip-hop-radio.jpg";
import kollychill from "./img/kolly-chill-out.jpg";
import munpanikaadhal from "./img/munpani-kaadhal.jpg";
import purelykaadhal from "./img/purely-kaadhal.jpg";
import romanticanirudh from "./img/romantic-anirudh.jpg";
import yuvan from "./img/yuvan.jpg";

import aaruyire from "./songs/Aaruyire.mp3";
import naanpilaipeno from "./songs/Naan-Pizhaippeno.mp3";
import kanavekanavae from "./songs/Kanave Kanave.mp3";
import othasollala from "./songs/Otha-Sollaala.mp3";
import anbeenanbe from "./songs/Anbe-En-Anbe.mp3";
import poivalva from "./songs/Poi-Vazhva.mp3";
import sirukkivaasasm from "./songs/Sirukki-Vaasam.mp3";
import bodhaikaname from "./songs/Bodhai-Kaname.mp3";


// Manu playlist thumb
import salvo_thumb from "./img/manu-playlist-thumb/playlist_salvo_thumb.png";
import thumb from "./img/manu-playlist-thumb/playlist_thumb.png";

// Da S assets
import da_s_thumb from "./da-s/da_s_thumb.jpg";
import da_s_mp3 from "./da-s/da_s.mp3";
import da_s_mp4 from "./da-s/da_s.mp4";

// Manu songs
import unonoveottoquattro_mp3 from "./manu-songs/1984_salmo.mp3";
import fuoricontrollo_mp3 from "./manu-songs/fuori_controllo_salmo.mp3";
import nientepanico_mp3 from "./manu-songs/niente_panico_ghali.mp3";
import laureaadhonorem_mp3 from "./manu-songs/laurea_ad_honorem_marracash.mp3";
// Manu videos
import unonoveottoquattro_mp4 from "./manu-videos/1984_salmo.mp4";
import fuoricontrollo_mp4 from "./manu-videos/fuori_controllo_salmo.mp4";
import nientepanico_mp4 from "./manu-videos/niente_panico_ghali.mp4";
import laureaadhonorem_mp4 from "./manu-videos/laurea_ad_honorem_marracash.mp4";
// Manu songs thumb
import unonoveottoquattro_thumb from "./img/manu-songs-thumb/1984_salmo.png";
import fuoricontrollo_thumb from "./img/manu-songs-thumb/fuori_controllo_salmo.png";
import nientepanico_thumb from "./img/manu-songs-thumb/niente_panico_ghali.png";
import laureaadhonorem_thumb from "./img/manu-songs-thumb/laurea_ad_honorem_marracash.png";

export const assets = {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  volume_icon,
  queue_icon,
  pause_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  clock_icon,
  switch_to_video
};

export const albumsData = [
  {
    id: 0,
    name: "This is Salvo",
    image: salvo_thumb,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#800020",
  },
  {
    id: 1,
    name: "This is ?",
    image: thumb,
    desc: "Your weekly update of the most played tracks",
    bgColor: "##632043",
  },
  {
    id: 2,
    name: "This is ?",
    image: thumb,
    desc: "Your weekly update of the most played tracks",
    bgColor: "##632043",
  },
  {
    id: 3,
    name: "This is ?",
    image: thumb,
    desc: "Your weekly update of the most played tracks",
    bgColor: "##632043",
  },
  {
    id: 4,
    name: "This is ?",
    image: thumb,
    desc: "Your weekly update of the most played tracks",
    bgColor: "##632043",
  },
  /*
  {
    id: 5,
    name: "This is Salvo",
    image: salvo_thumb,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#800020",
  },
  {
    id: 6,
    name: "This is Salvo",
    image: salvo_thumb,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#800020",
  },
  {
    id: 7,
    name: "This is Salvo",
    image: salvo_thumb,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#800020",
  },
  */
];

export const songsData = [
  {
    id: 0,
    name: "Otha Solala",
    image: aadukalam,
    file: othasollala,
    desc: "Happy tunes from Dhanush na!!",
    duration: "3:59",
  },
  {
    id: 1,
    name: "Kanave kanave",
    image: david,
    file: kanavekanavae,
    desc: "Dive into anirudh sad zone",
    duration: "4:44",
  },
  {
    id: 2,
    name: "Naan Pizhaipeno",
    image: enpt,
    file: naanpilaipeno,
    desc: "Crazy Love from Dhanush",
    duration: "6:12",
  },
  {
    id: 3,
    name: "Aaruyire",
    image: guru,
    file: aaruyire,
    desc: "Mesmerizing hits A.R.R > anything",
    duration: "5:10",
  },
  {
    id: 4,
    name: "Anbe en Anbe",
    image: dhaamdhoom,
    file: anbeenanbe,
    desc: "Put a smile on your face with these happy tunes",
    duration: "5:40",
  },
  {
    id: 5,
    name: "Poi Vazhva",
    image: manithan,
    file: poivalva,
    desc: "Dont ever feel down listen this",
    duration: "3:59",
  },
  {
    id: 6,
    name: "Sirukki Vaasam",
    image: kodi,
    file: sirukkivaasasm,
    desc: "Put a smile on your face with these happy tunes",
    duration: "4:35",
  },
  {
    id: 7,
    name: "Bodhai Kaname",
    image: oh_manapenne,
    file: bodhaikaname,
    desc: "Put a smile on your face with these happy tunes",
    duration: "4:22",
  },
];

export const songsManuData = [
  {
    id: 0,
    name: "uNa DiReZioNe giUsTa",
    image: da_s_thumb,
    file: da_s_mp3,
    video: da_s_mp4,
    desc: "Manu feat. S, 2024",
    duration: "0:30",
  },
  {
    id: 1,
    name: "Niente Panico",
    image: nientepanico_thumb,
    file: nientepanico_mp3,
    video: nientepanico_mp4,
    desc: "Ghali, 2024",
    duration: "3:09",
  },
  {
    id: 2,
    name: "1984",
    image: unonoveottoquattro_thumb,
    file: unonoveottoquattro_mp3,
    video: unonoveottoquattro_mp4,
    desc: "Salmo, 2015",
    duration: "4:17",
  },
  {
    id: 3,
    name: "FUORI CONTROLLO",
    image: fuoricontrollo_thumb,
    file: fuoricontrollo_mp3,
    video: fuoricontrollo_mp4,
    desc: "Salmo, 2025",
    duration: "3:38",
  },
  {
    id: 4,
    name: "LAUREA AD HONOREM",
    image: laureaadhonorem_thumb,
    file: laureaadhonorem_mp3,
    video: laureaadhonorem_mp4,
    desc: "Marracash feat. Calcutta, 2021",
    duration: "3:15",
  },
  /*
  {
    id: 5,
    name: "1984",
    image: unonoveottoquattro_thumb,
    file: unonoveottoquattro_mp3,
    video: unonoveottoquattro_mp4,
    desc: "Salmo, Hellvisback, 2015",
    duration: "4:17",
  },
  {
    id: 6,
    name: "Niente Panico",
    image: nientepanico_thumb,
    file: nientepanico_mp3,
    video: nientepanico_mp4,
    desc: "Ghali, Chill, 2024",
    duration: "3:09",
  },
  {
    id: 7,
    name: "1984",
    image: unonoveottoquattro_thumb,
    file: unonoveottoquattro_mp3,
    video: unonoveottoquattro_mp4,
    desc: "Salmo, Hellvisback, 2015",
    duration: "4:17",
  },
  */
];

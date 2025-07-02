import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import {
    albumsData,
    assets,
    songsManuData,
    songsFedeData,
    songsSimoData,
    songsCarlottaData
} from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumDatalocal = albumsData[id];
    const { playWithId } = useContext(PlayerContext);

    let songsData = [];

    switch (Number(id)) {
        case 0:
            songsData = songsManuData;
            break;
        case 1:
            songsData = songsFedeData;
            break;
        case 2:
            songsData = songsSimoData;
            break;
        case 3:
            songsData = songsCarlottaData;
            break;
        default:
            songsData = songsManuData;
            break;
    }

    // Funzione per sommare le durate
    const getTotalDuration = (songs) => {
        let totalSeconds = 0;
        songs.forEach(song => {
            const [min, sec] = song.duration.split(':').map(Number);
            totalSeconds += min * 60 + sec;
        });
        const totalMin = Math.floor(totalSeconds / 60);
        const totalSec = totalSeconds % 60;
        return `${totalMin} min ${totalSec} sec (me)`;
    };

    return (
        <>
            <Navbar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumDatalocal.image} alt="" />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='text-4xl font-bold mb-4 md:text-6xl'>
                        {albumDatalocal.name}
                    </h2>
                    <h4>{albumDatalocal.desc}</h4>
                    <p className='mt-2'>
                        <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                        <b> Manufy</b> Un botto di likes |
                        <b> {songsData.length} songs </b>| {getTotalDuration(songsData)}                    </p>
                </div>
            </div>

            {/* HEADER */}
            <div className='hidden md:grid grid-cols-[3fr_1.5fr_1.5fr_1fr] mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p className='ml-4'><b className='mr-4'>#</b>Title</p>
                <p>Playlist</p>
                <p>Date Added</p>
                <img className='m-auto w-4 mr-4' src={assets.clock_icon} alt="Duration" />
            </div>

            {/* MOBILE HEADER */}
            <div className='flex justify-between items-center md:hidden mt-10 mb-4 pl-2 pr-4 text-[#a7a7a7]'>
                <p><b className='mr-4'>#</b>Title</p>
                <img className='w-4' src={assets.clock_icon} alt="Duration" />
            </div>

            <hr />

            {/* SONGS */}
            {
                songsData.map((item, index) => (
                    <div
                        onClick={() => playWithId(item.id, songsData)}
                        key={index}
                        className='md:grid md:grid-cols-[3fr_1.5fr_1.5fr_1fr] gap-3 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer flex justify-between'
                    >
                        {/* IMMAGINE + TITOLO + NUMERO */}
                        <div className='flex items-center'>
                            {/* Numero su mobile */}
                            <span className='inline-block md:hidden text-[13px] w-4 mr-2 text-[#a7a7a7]'>
                                {index + 1}
                            </span>

                            {/* Numero su desktop */}
                            <span className='hidden md:inline-block w-6 text-right mr-4 text-[#a7a7a7]'>
                                {index + 1}
                            </span>

                            {/* Immagine */}
                            <img className='w-10 h-10 mr-4 rounded' src={item.image} alt="" />

                            {/* Titolo */}
                            <div className='flex flex-col'>
                                <p className='text-white text-sm'>{item.name}</p>
                                {/* Album su mobile */}
                                <p className='text-xs text-gray-400 md:hidden'>{item.desc}</p>
                            </div>
                        </div>

                        {/* Playlist solo desktop */}
                        <p className='hidden md:block text-[15px]'>{albumDatalocal.name}</p>

                        {/* Date added solo desktop */}
                        <p className='hidden md:block text-[15px] ml-2'>3 days ago</p>

                        {/* Durata */}
                        <p className='text-[15px] ml-auto md:ml-0 justify-self-end'>{item.duration}</p>
                    </div>
                ))
            }

        </>
    )
}

export default DisplayAlbum
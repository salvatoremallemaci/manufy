import React, { useState } from "react";
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { people } from "../assets/assets";

const Sidebar = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const nav = useNavigate();

    const handleButtonClick = () => {
        const randomIndex = Math.floor(Math.random() * people.length);
        setSelectedPerson(people[randomIndex]);
    };

    const handleButtonClose = () => {
        setSelectedPerson(null);
    };

    return (
        <>
            {selectedPerson && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="bg-[#121212] rounded-xl shadow-2xl px-6 py-8 text-center max-w-xs w-full border-2 border-white/30">
                        <p className="text-lg font-semibold mb-4 text-white">
                            <i>{selectedPerson.name}</i> ti sta pensando 💬
                        </p>
                        <button
                            onClick={() => {
                                const message = encodeURIComponent(`Ciao ${selectedPerson.name}, pensandoti!`);
                                window.open(`https://wa.me/${selectedPerson.phone}?text=${message}`, '_blank');
                            }}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mb-2 shadow"
                        >
                            Contatta {selectedPerson.name}
                        </button>
                        <br />
                        <button
                            onClick={handleButtonClose}
                            className="text-sm text-gray-400 hover:text-white underline transition"
                        >
                            Chiudi
                        </button>
                    </div>
                </div>
            )}

            <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
                <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
                    <div onClick={() => nav('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                        <img className='w-6' src={assets.home_icon} alt="" />
                        <p className='font-bold'>Home</p>
                    </div>
                    <div onClick={handleButtonClick} className='flex items-center gap-3 pl-8 cursor-pointer'>
                        <img className='w-6' src={assets.search_icon} alt="" />
                        <p className='font-bold'>Search</p>
                    </div>
                </div>
                <div className='bg-[#121212] h-[85%] rounded'>
                    <div className='p-4 flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <img className='w-8' src={assets.stack_icon} alt="" />
                            <p className='font-semibold'>Your Library</p>
                        </div>
                        <div onClick={handleButtonClick} className='flex items-center gap-3'>
                            <img className='w-5' src={assets.arrow_icon} alt="" />
                            <img className='w-5' src={assets.plus_icon} alt="" />
                        </div>
                    </div>
                    <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                        <h1>Create your first Playlist</h1>
                        <p className='font-light'>it's easy we will help you</p>
                        <button onClick={handleButtonClick} className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create playlist</button>
                    </div>
                    <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                        <h1>Find some Podcasts to Follow</h1>
                        <p className='font-light'>we'll keep you update on new episodes</p>
                        <button onClick={handleButtonClick} className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcasts</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
import React, { useState } from "react";
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { people } from "../assets/assets";


const Navbar = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const nav = useNavigate()

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

            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img onClick={() => nav(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
                    <img onClick={() => nav(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
                </div>
                <div className='flex items-center gap-4'>
                    <p onClick={handleButtonClick} className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
                    <p onClick={handleButtonClick} className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
                    <p onClick={handleButtonClick} className='bg-orange-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>M</p>
                </div>

            </div>
            <div className='flex items-center gap-2 mt-4'>
                <p onClick={handleButtonClick} className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
                <p onClick={handleButtonClick} className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
                <p onClick={handleButtonClick} className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
            </div>
        </>
    )
}

export default Navbar
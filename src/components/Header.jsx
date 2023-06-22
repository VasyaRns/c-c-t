import React,{useState} from "react";   
import {FaBars,FaTimes} from 'react-icons/fa';

const Header = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <>
            <header className="flex justify-between items-center px-4 w-full h-[80px]">
                <div className="flex gap-2">
                    <img className="max-md:w-[80px]" src="./image.svg" alt="logo" />
                    <h1 className="uppercase max-md:text-md">Центр <br /> коммуникационных <br /> технологий</h1>
                </div>
                {/* menu */}
                <ul className="hidden lg:flex gap-2">
                    <li>О компании</li>
                    <li>Наши продукты</li>
                    <li>Отзывы</li>
                    <li>Центр</li>
                </ul>
                <div className="hidden lg:flex gap-2">
                    <div>
                        +7 (999) 807 0637 <br />
                        c 9:00-19:00 Пн-Пт
                    </div>
                    <button className="border-blue border-2 text-blue rounded-full px-2">Связаться с нами</button>
                </div>

                <div onClick={handleClick} className="lg:hidden z-20">
                       {!nav ? <FaBars/> : <FaTimes/>} 
                </div>

                {/* menu mobile */}
                <div className={!nav ? "hidden" :"absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#F1F3F5] z-10"}>
                    <ul className="flex flex-col">
                        <li className="py-4 text-3xl">О компании</li>
                        <li className="py-4 text-3xl">Наши продукты</li>
                        <li className="py-4 text-3xl">Отзывы</li>
                        <li className="py-4 text-3xl">Центр</li>
                    </ul>
                    <div className="flex flex-col text-xl gap-2 py-10">
                        <div>
                            +7 (999) 807 0637 <br />
                            c 9:00-19:00 Пн-Пт
                        </div>
                        <button className="border-blue border-2 text-blue rounded-full px-2">Связаться с нами</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (pathname) => location.pathname === pathname;

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header className=''>
                <div className='flex items-center justify-between p-4 bg-mainColor text-stone-100'>
                    <Link to='/' className='text-xl font-bold ease-out duration-500'>Lynn</Link>
                    <div className="block cursor-pointer ease-out duration-500 " onClick={toggleMenu}>
                        <div className="w-8 h-0.5 bg-stone-100 m-2"></div>
                        <div className="w-8 h-0.5 bg-stone-100 m-2"></div>
                        <div className="w-8 h-0.5 bg-stone-100 m-2"></div>
                    </div>
                </div>
                <ul className={`pesquisa absolute top-[7vh] w-[30vw] h-[65vh] flex flex-col items-end pr-32 justify-around ${menuOpen ? "activate-mobile" : "disable"}`}>
                    <li>
                        <Link to="/" className={`${isActive("/") ? "active" : ""}`} onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/portifolio" className={`${isActive("/portifolio") ? "active" : ""}`} onClick={closeMenu}>
                            Portifólio
                        </Link>
                    </li>
                    <li>
                        <Link to="/sobre" className={`${isActive("/sobre") ? "active" : ""}`} onClick={closeMenu}>
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link to="/contato" className={`${isActive("/contato") ? "active" : ""}`} onClick={closeMenu}>
                            Contato
                        </Link>
                    </li>
                </ul>
            </header>
        </>
    );
}
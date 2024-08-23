'use client';

import { useUIStore } from '@/store';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5';

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
  const closeMenu = useUIStore(state => state.closeSideMenu);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isSideMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSideMenuOpen, closeMenu]);

  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && (
        <>
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
        </>
      )}
      
      {/* Sidemenu */}
      <nav
        ref={menuRef}
        className={clsx(
          "fixed top-0 right-0 w-[300px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 overflow-y-auto",
          {
            "translate-x-full": !isSideMenuOpen,
            "translate-x-0": isSideMenuOpen
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeMenu()}
        />

        {/* Input search */}
        <div className='relative mt-20'>
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-sm border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menu */}
        <div className="p-5">
          <Link
            href={"/"}
            className="flex items-center mt-6 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoPersonOutline size={24} aria-label="Perfil" />
            <span className="ml-3 text-lg">Perfil</span>
          </Link>

          <Link
            href={"/"}
            className="flex items-center mt-6 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoTicketOutline size={24} aria-label="Ordenes" />
            <span className="ml-3 text-lg">Ordenes</span>
          </Link>

          <Link
            href={"/"}
            className="flex items-center mt-6 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoLogInOutline size={24} aria-label="Ingresar" />
            <span className="ml-3 text-lg">Ingresar</span>
          </Link>

          <Link
            href={"/"}
            className="flex items-center mt-6 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoLogOutOutline size={24} aria-label="Salir" />
            <span className="ml-3 text-lg">Salir</span>
          </Link>

          {/* Line Separator */}
          <div className="w-full h-px bg-gray-200 my-6" />

          <Link
            href={"/"}
            className="flex items-center mt-6 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoShirtOutline size={24} aria-label="Productos" />
            <span className="ml-3 text-lg">Productos</span>
          </Link>

          <Link
            href={"/"}
            className="flex items-center mt-6 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoPeopleOutline size={24} aria-label="Clientes" />
            <span className="ml-3 text-lg">Clientes</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

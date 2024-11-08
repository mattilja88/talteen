// menu.js

'use client';

import Link from 'next/link';
import { useMenu } from '../context/MenuContext';

const HamburgerMenu = () => {
  const { isOpen, toggleMenu } = useMenu();

  return (
    <div className="relative">
      <button
        className="flex flex-col items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-md focus:outline-none dark:bg-gray-200 dark:text-gray-900"
        onClick={toggleMenu}
      >
        <div
          className={`w-6 h-0.5 bg-white mb-1 transition-transform dark:bg-gray-900 ${
            isOpen ? ' rotate-45 translate-y-1.5' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white mb-1 transition-opacity dark:bg-gray-900 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-transform dark:bg-gray-900 ${
            isOpen ? ' -rotate-45 -translate-y-1.5' : ''
          }`}
        ></div>
      </button>
      <nav
        className={`fixed left-1/2 transform -translate-x-1/2 w-64 bg-white shadow-lg rounded-lg dark:bg-gray-800 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col items-center p-4">
          <li className="py-2" onClick={toggleMenu}>
            <Link href="/" className="hover:underline dark:text-white">
              Minun tarinani
            </Link>
          </li>
          <li className="py-2" onClick={toggleMenu}>
            <Link href="/opetus" className="hover:underline dark:text-white">
              Laulun- ja soitonopetus
            </Link>
          </li>
          <li className="py-2" onClick={toggleMenu}>
            <Link href="/esiintyja" className="hover:underline dark:text-white">
              Esiintyjäksi
            </Link>
          </li>
          <li className="py-2" onClick={toggleMenu}>
            <Link href="/keikat" className="hover:underline dark:text-white">
              Tulevat keikat
            </Link>
          </li>
          <li className="py-2" onClick={toggleMenu}>
            <Link href="/yhteystiedot" className="hover:underline dark:text-white">
              Yhteystiedot
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;

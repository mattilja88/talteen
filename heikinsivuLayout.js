// Layout.js

'use client'


import localFont from "next/font/local";
import "./globals.css";
import HamburgerMenu from './menu/menu';
import Link from 'next/link';
import { MenuProvider } from './context/MenuContext';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {

  return (
    <html lang="fi">
      <body className="min-h-screen flex flex-col font-serif">
        <MenuProvider>
          <header className="w-full flex flex-row md:flex-row justify-center py-4 bg-gray-800">
            <div className="relative z-50 flex justify-center items-center md:hidden"> {/* z-50 added here */}
              <HamburgerMenu />
            </div>
            <nav className="hidden md:flex text-white">
              <ul className="flex flex-row gap-8 justify-between w-[50vw]">
                <li><Link href="/" className="hover:underline">Minun tarinani</Link></li>
                <li><Link href="/opetus" className="hover:underline">Laulun- ja soitonopetus</Link></li>
                <li><Link href="/esiintyja" className="hover:underline">Esiintyjäksi</Link></li>
                <li><Link href="/keikat" className="hover:underline">Tulevat keikat</Link></li>
                <li><Link href="/yhteystiedot" className="hover:underline">Yhteystiedot</Link></li>
              </ul>
            </nav>
          </header>
          <div>
            <div className="relative w-full h-[35vh] group">
              <img
                src="/pics/truba_pic.jpeg"
                alt="Heikki Mustakallio esiintyy kitaransa kanssa"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }}
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
                Kuvaaja: Pekka Tyni
              </div>
            </div>

          </div>
          <main className="flex-1">{children}</main>
          <footer className="w-full flex flex-col justify-center items-center py-4 bg-gray-800 gap-8 md:flex-col w-[75vw] md:w-[50]">
            <div className="flex flex-col gap-8 items-center md:flex-row">
              <p className="text-white flex gap-4">040-5776136</p>
              <p className="text-white flex gap-4">heikki_mustakallio@yahoo.com</p>
              <p className="text-white flex gap-4">Y-TUNNUS: 3479730-2</p>
              <p className="text-white flex gap-4"><a href={`https://www.instagram.com/heikinmusajataide`} target="_blank" rel="noopener noreferrer">heikinmusajataide</a></p>
            </div>
          </footer>
        </MenuProvider>
      </body>
    </html>
  );
}

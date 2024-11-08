// keikat page.js

'use client'

import { useMenu } from '../context/MenuContext';

export default function TulevatKeikat() {
    const { isOpen } = useMenu();

    const topMargin = isOpen ? '32px' : '32px';

    return (
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100  dark:bg-gray-900 dark:text-white">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-8" style={{ marginTop: topMargin }}>Tulevat keikat</h1>
        <div className="flex flex-col items-center justify-center w-[75vw] md:w-[50vw]" >
            <p className="mt-4 mb-4">ke 27.11 klo 18 Hyvinkään kirjasto, &quot;Valoa pimeään&quot;. Omia biisejä, pop/rock-covereita ja joululauluja.</p>
            <p className="mt-4 mb-4">su 15.12 klo 14 Hyvinkäänkylän Marttojen koko perheen pikkujoulut (yksityistilaisuus), Hyvinkää</p>
        </div>
        <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mt-8" style={{ marginTop: topMargin }}>Menneet keikat:</h3>
        <p className="mb-8 italic">(Syksystä 2024 alkaen)</p>
        <div className="flex flex-col items-center justify-center w-[75vw] md:w-[50vw]">
            <p className="mt-4 mb-4">ma 7.10 viulu/näyttelijäkeikka, Turku</p>
            <p className="mt-4 mb-4">la 5.10 yksityistilaisuus, Helsinki </p>
            <p className="mt-4 mb-4">la 7.9 yksityistilaisuus, Hyvinkää</p>
        </div>
      </div>
    );
}

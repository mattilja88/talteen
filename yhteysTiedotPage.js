// yhteystiedot page.js

'use client'

import { useMenu } from '../context/MenuContext';

export default function ContactsPage() {
    const { isOpen } = useMenu();

    const topMargin = isOpen ? '32px' : '32px';

    return (
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-8" style={{ marginTop: topMargin }}>Yhteystiedot</h1>
        <div className="flex flex-col items-center justify-center">
            <p className="mt-4 mb-4">040-5776136</p>
            <p className="mt-4 mb-4">heikki_mustakallio@yahoo.com</p>
            <p className="mt-4 mb-4">Y-TUNNUS: 3479730-2</p>
            <p className="mt-4 mb-4">
              Instagram: <a href={`https://www.instagram.com/heikinmusajataide`} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">heikinmusajataide</a>
            </p>
        </div>
      </div>
    );
}

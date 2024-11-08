// settilista page.js

'use client'

import { useMenu } from '../context/MenuContext';

export default function SettilistaPage() {
    const { isOpen } = useMenu();

    // Kovakoodattu settilista
    const kappaleet = [
        "2080-luvulla (Sanni)",
        "Aicha (Outlandish)",
        "Aikuinen nainen (Paula Koivuniemi)",
        "Antaudun (Reino Nordin)",
        "Bad Moon Rising (CCR)",
        "Ces't la vie (Anna Puu)",
        "Don't Worry Be Happy (Bobby McFerrin)",
        "Dreamer (Ozzy Osbourne)",
        "Eight Days a Week (The Beatles)",
        "Hallelujah (Leonard Cohen)",
        "Hengaillaan (Kirka)",
        "Hetken tie on kevyt (Tehosekoitin)",
        "Hiljaisuus (Irina)",
        "Jos mun pokka pettää (Haloo Helsinki)",
        "Jos tahdot tietää (Maarit)",
        "Kaikki nuoret tyypit (Tehosekoitin)",
        "Kaunis rietas onnellinen (Kaija Koo)",
        "Kolme Cowboyta (J.Karjalainen)",
        "Kolme hyvää vinkkiä (Vesterinen yhtyeineen)",
        "Kolmekymppinen (Frederik)",
        "Kuussa tuulee (Haloo Helsinki)",
        "Lähtisitkö (Pave Maijanen)",
        "Mamma mia (Abba)",
        "Matkustaja (Egotrippi)",
        "Muotitietoinen (Leevi and the Leavings)",
        "Nyt reppu jupiset riimisi rupiset (Eppu Normaali)",
        "Paratiisi (Badding)",
        "Puuttuva Palanen (Robin)",
        "Sankarit (J.Karjalainen)",
        "Stay with me (Sam Smith)",
        "Sun puolella (Antti Kleemola)",
        "Todella kaunis (Zen Cafe)",
        "Valot pimeyksien reunoilla (Apulanta)",
        "Ylivoimainen (Kuumaa)"
    ];

    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
            <div className="w-[75vw] md:w-[50vw] flex flex-col items-center text-justify">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-8">
                    Settilista
                </h2>
                {kappaleet.length > 0 ? (
                    kappaleet.map((kappale, index) => (
                        <div key={index} className="flex flex-col items-center gap-4 w-full mb-4">
                            <p className="text-lg text-center">{kappale}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 dark:text-gray-400">Kysy settilistasta</p>
                )}
            </div>
        </div>
    );
}

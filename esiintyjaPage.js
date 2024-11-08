// esiintyjä page.js

'use client'

import { useMenu } from '../context/MenuContext';
import Link from 'next/link';
import Head from 'next/head';

export default function EsiintyjaPage() {
    const { isOpen } = useMenu();

    const topMargin = isOpen ? '32px' : '32px';

    return (
        <div className="flex flex-col items-center text-justify min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
            <Head>
                <title>Esiintyjä</title>
                <meta name="description" content="Heikki Mustakallion kuvaus esiintymispalveluista" />
                <meta name="keywords" content="soitonopetus, hinnasto, musiikkiopetus, Heikki Mustakallio, kitara, trubaduuri, Hyvinkää, keikat" />
                <meta property="og:title" content="Esiintyjä - Heikki Mustakallio" />
                <meta property="og:description" content="Katso Heikki Mustakallion tarjoamat trubaduuripalvelut" />
                <meta property="og:url" content="https://www.heikkimustakallio.fi/hinnasto" />
            </Head>

            <div className="w-[75vw] md:w-[50vw] flex flex-col items-center justify-start">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-8" style={{ marginTop: topMargin }}>Esiintyjäksi</h2>

                <div className="w-[75vw] mt-8 text-justify hyphens-auto md:w-[50vw]">

                    <p className="mb-6">Haluatko tehdä yrityksesi tilaisuudesta tyylikkään ja mieleenpainuvan? Tilaa trubaduuri paikalle ja juhlatunnelma on taattu! Hyvä tunnelma muodostuu mm. yhteislaulusta ja vuorovaikutuksesta yleisön kanssa.</p>

                    <p className="mb-6">Vietätkö tai suunnitteletko läheisesi syntymäpäiviä tai muita juhlia? Livemusiikki on niin päivänsankarille kuin vieraillekin jotain, mikä muistetaan.</p>

                    <p className="mb-6">Esiinnyn säestäen itseäni kitaralla ja tuon oman kevyen äänentoiston paikalle.</p>

                    <p className="mb-6">Trubaduurikeikan hinnat yksityishenkilöille alkaen 200 euroa + matkakulut ja yrityksille 300 euroa + matkakulut. Alimpaan hintaan sisältyy 45 min keikka linkistä löytyvän settilistan kappaleista.</p>

                    <p className="mb-6">Ole rohkeasti yhteydessä. Yleensä neuvottelemalla saadaan asiat kuntoon ;)</p>

                    <p className="mb-6">Heikki</p>
                </div>

                <div className="flex items-center justify-center mt-4 mb-8 w-full">
                    <Link
                        href="/settilista"
                        className="text-blue-300 hover:text-blue-500 dark:hover:text-blue-400 hover:text-xl transition-all duration-1000"
                    >
                        SETTILISTA
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center space-y-8 mb-16">


                    <blockquote className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-6 w-[70vw] md:w-[40vw] shadow-2xl">
                        <p className="italic text-center">
                            &quot;Vietin tuossa syyskuussa synttäreitä ja saatiin Heikki keikalle. Hyvällä kappalevalinnalla ja taidokkaalla esiintymisellä saimme kokea onnistuneen ja mukavan tuokion. Voin suositella Heikkiä vastaavanlaisiin tilaisuuksiin&quot;
                        </p>
                        <footer className="mt-4 text-right text-sm font-semibold">- Yksityisasiakas, 70-vuotisjuhlat, 9/2024</footer>
                    </blockquote>

                    <blockquote className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-6 w-[70vw] md:w-[40vw] shadow-2xl">
                        <p className="italic text-center">
                            &quot;Heikki esiintyi kitaran kanssa syntymäpäiväjuhlissa, ja esitys oli yksi illan kohokohtia ja sai aikaan hyvän tunnelman juhlissa! Tutut kappaleet vuosien takaa innostivat mukavaan yhteislauluun.&quot;
                        </p>
                        <footer className="mt-4 text-right text-sm font-semibold">- Yksityisasiakas, 30-vuotisjuhlat, 10/2024</footer>
                    </blockquote>

                </div>


            </div>
        </div>
    );
}

// opetus page.js

'use client'

import { useMenu } from '../context/MenuContext';
import Head from 'next/head';

export default function HinnastoPage() {
    const { isOpen } = useMenu();

    const topMargin = isOpen ? '32px' : '32px';

    return (
        <>
            <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white gap-8">
                <Head>
                    <title>Soitonopetus ja Hinnasto - Heikki Mustakallio</title>
                    <meta name="description" content="Heikki Mustakallion soitonopetuksen ja esiintymisten hinnasto. Tutustu hänen opetustarjontaansa ja palveluihin." />
                    <meta name="keywords" content="soitonopetus, hinnasto, musiikkiopetus, Heikki Mustakallio, kitara, trubaduuri" />
                    <meta property="og:title" content="Soitonopetus ja Hinnasto - Heikki Mustakallio" />
                    <meta property="og:description" content="Katso Heikki Mustakallion tarjoamat soitonopetuspalvelut ja hinnasto. Laadukasta musiikkiopetusta ja esiintymisiä." />
                    <meta property="og:url" content="https://www.heikkimustakallio.fi/hinnasto" />
                </Head>

                <div className="flex flex-col text-justify items-center w-[75vw] md:w-[50vw]">
                    <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-8">Laulun- ja soitonopetus</h3>
                    <div className="w-[75vw] mt-8 text-justify hyphens-auto md:w-[50vw]">
                        <p className="mb-6">Tarjoan tällä hetkellä henkilökohtaista opetusta laulussa, kitarassa, ja ukulelessa kaiken tasoisille oppijoille. Kysy myös muita mahdollisuuksia, jos sinulla on kiinnostusta esim. biisintekoon, räppiin tai pianonsoittoon. Tunnit räätälöidään aina sinun tarpeidesi ja tavoitteidesi mukaan – olitpa sitten vasta-alkaja tai kokenut muusikko.</p>
                        <p className="mb-6">Syksystä 2024 lähtien minulla on jälleen ollut yksityisopetusta laulussa ja kitarassa ja olen kokenut oppilaiden kanssa työskentelyn antoisana. Minulle on tärkeää rohkaista toisia ylittämään itsensä ja valaa uskoa siihen, että musiikkia voi oppia, jos on kiinnostusta. Yleensä suurin este oppimiselle on oma pää - sikäli musiikin oppiminen on yhteydessä myös ihmisen psyykkiseen puoleen. Ihminen on kokonaisuus ja monella hyvinvoivalla ihmisellä musiikki on osa sitä kokonaisuutta :)</p>
                        <p className="mb-6">Omia lauluopettajiani ovat olleet Rauno Keltanen, Anneli Hynninen, Anu Ontronen, Elina Paajanen ja Mari Leppävuori. Arvostan heitä kaikkia ja jokaiselta olen saanut elämäni ja laulajani matkalle mukaan jonkin tärkeän asian.</p>
                        <p className="mb-6">Laulutunnilla tehdään hengitys- ja ääniharjoituksia sekä harjoitellaan valittua kappaletta. Parhaiten kehitystä tapahtuu, jos oppilas harjoittelee tunnilla käsiteltyä myös kotona.</p>
                        <p className="mb-6">Kitara- ja ukuleletunneilla opetellaan muun muassa sointuja ja tabulatuureja. Nuotit ja perustiedot musiikista tulevat tutuksi soittamisen lomassa.</p>
                        <p className="mb-6">Tunnit pidetään työhuoneessani, joka sijaitsee kotini yhteydessä. Pääasiassa tunnit pyritään pitämään lauantaisin.</p>
                    </div>
                </div>

                <h4 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mt-8" style={{ marginTop: topMargin }}>Hinnasto</h4>

                <div className="w-[75vw] flex flex-col justify-center items-center mb-16 md:w-[50vw]">
                    <p className="text-center">Työssäkäyvät aikuiset:</p>
                    <p className="text-center">60 min 50 €</p>
                    <p className="text-center">45 min 40 €</p>

                    <p className="text-center mt-4">Opiskelijat / työttömät / eläkeläiset / lapset / nuoret:</p>
                    <p className="text-center">60 min 40 €</p>
                    <p className="text-center">45 min 30 €</p>

                    <p className="text-center mt-4 text-xs italic">Hintoihin ei lisätä arvonlisäveroa, sillä en ole arvonlisäverovelvollinen. Tunnit maksetaan kuukauden  viimeisen tunnin jälkeen sähköpostiin tulevalla laskulla, jonka maksuaika on 14 vuorokautta.</p>
                </div>
            </div>
        </>
    );
}

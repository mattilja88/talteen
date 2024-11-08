// pääsivu page.js

'use client';

import Head from 'next/head';

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 bg-gray-100 dark:bg-gray-900 dark:text-white">
      <Head>
        <title>Heikki Mustakallio - Laulun- ja Soitonopettaja sekä Trubaduuri</title>
        <meta name="description" content="Heikki Mustakallio on kokenut laulun- ja soitonopettaja sekä trubaduuri. Tutustu hänen palveluihinsa ja musiikkitaustaansa." />
        <meta name="keywords" content="Heikki Mustakallio, laulunopettaja, soitonopettaja, trubaduuri, musiikki, esiintyjä, opetus, Hyvinkää" />
        <meta property="og:title" content="Heikki Mustakallio - Laulun- ja Soitonopettaja sekä Trubaduuri" />
        <meta property="og:description" content="Tutustu Heikki Mustakallion musiikkiopetukseen ja trubaduurikeikkoihin." />
        <meta property="og:url" content="https://www.heikkimustakallio.fi/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <h1 className="text-3xl w-[75vw] mt-8 mb-8 font-bold text-gray-800 dark:text-gray-100 md:w-[50vw]">
        Heikki Mustakallio, laulun- ja soitonopettaja sekä trubaduuri
      </h1>
      <div className="relative group w-[75vw] md:w-[50vw]">
        <img
          src="/pics/heikki_levea.jpg"
          alt="Heikki Mustakallio"
          style={{ width: '100%', height: 'auto' }}
          className="dark:opacity-90"
        />
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
          Kuvaaja: Johanna Lehtonen
        </div>
      </div>
      <div className="w-[75vw] mt-8 mb-8 md:w-[50vw] text-justify hyphens-auto">
        <p className="mb-6">Hei! Olen Heikki Mustakallio, 36-vuotias musiikin ammattilainen. Olen valmistunut musiikinopettajaksi Oulun yliopistosta vuonna 2016 ja opiskellut klassista laulua Joensuun konservatoriolla musiikin ammattitutkinnossa. Olen toiminut musiikinopettajana niin peruskoulussa, lukiossa kuin kansalaisopistossakin. Tämän lisäksi olen toiminut luokanopettajana sekä varhaiskasvatuksen opettajana. Kohderyhmäni musiikin parissa toimimiseen on siis ollut laaja: vauvasta vaariin ja mummoon!</p>

        <p className="mb-6">Musiikinopettajaopinnoissa suoritin syventäviä opintoja muun muassa musiikkiliikunnasta, musiikkiteknologiasta ja vapaasta säestyksestä. Pro gradu -työni (2016) kirjoitin vanhoillislestadiolaisten nuorten aikuisten kokemuksista koulun musiikinopetuksessa.</p>

        <p className="mb-6">Parhaimmat työmuistoni ovat Taivalkosken kansalaisopistosta, jossa sain kehittyä pedagogina ja olla luomassa uudenlaisia kursseja kuten yksinlaulua ryhmässä -kurssia. Draamakasvatuksen aineenopettajaksi opiskelin Jyväskylän avoimessa yliopistossa 2020-2023. Tällä hetkellä opiskelen Helsingin yliopistossa teologiaa ja teen musiikkialan töitä opintojen ohella.</p>

        <p className="mb-6">Olen esiintynyt pienestä pitäen ja tehnyt myös omaa musiikkia varhaisnuoresta lähtien. Musiikki on ollut minulle keino käsitellä tunteita, ilmaista itseä ja olla kontaktissa niin yleisöön kuin soittokavereihinkin. Tämänkaltaiselle polulle - toki oman näköisellesi -  haluan sinuakin johdatella.</p>
      </div>
    </div>
  );
}

import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import data from '../components/Data';
import { Dimensions } from 'react-native';
import RistikkoSanat from '../components/RistikkoSanat';
import SelitysModal from '../components/SelitysModal';
import PreviewModal from '../components/PreviewModal';
import SekaRistikko from '../components/SekaRistikko';

const horizontalPadding = 20;

export default function Ristikko() {
  const [sana, setSana] = useState("");
  const [selitys, setSelitys] = useState([])
  const [sanat, setSanat] = useState([]);
  const [naytaKirjaimet, setNaytaKirjaimet] = useState(true)
  const [ekaKirjainLista, setEkaKirjainLista] = useState([])
  const [sanaIndexLista, setSanaIndexLista] = useState([])
  const [pystySanaIndex, setPystySanaIndex] = useState(0)
  const [maxWidth, setMaxWidth] = useState(10)
  const [boxWidth, setBoxWidth] = useState(32)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false)
  const [pystyRistikko, setPystyRistikko] = useState(false)

  const lisaaSana = () => {
    if (sana.trim()) {
      setSanat([...sanat, sana.toLowerCase()]);
      setSana("");
    }
  };

  const sekoitaLista = () => {
    if (sanat.length > 1) {
      const shuffledSanat = shuffle([...sanat]); // Create a shallow copy
      setSanat(shuffledSanat); // Update state with a new array reference
    }
  };

  const piilotaKirjaimet = () => {
    setNaytaKirjaimet(prev => !prev);
  };

  const calculateBoxWidth = () => {
    const screenWidth = Dimensions.get('window').width;
    const max = Math.max(...sanat.map((sana, i) => (sanaIndexLista[i] || 0) + sana.length));
    const availableWidth = screenWidth - horizontalPadding * 2; // Deduct padding from both sides
    const newBoxWidth = max > 0 ? availableWidth / max : 32;
    setBoxWidth(newBoxWidth);
  };

  useEffect(() => {
    calculateBoxWidth();
    // Add listener for orientation change
    const subscription = Dimensions.addEventListener('change', calculateBoxWidth);
    return () => subscription.remove();
  }, [sanat, sanaIndexLista]);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Pick a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    if (sanat.length > 0) {
      let apuLista = [];
      let edellinenSet = new Set();

      // Käy sanat läpi, riippuen siitä, mikä kirjainpaikka halutaan tarkastaa (1. sana, 2. sana jne.)
      sanat.forEach((sana, index) => {
        let yhteisetSanat = [];
        const nykyinenKey = `data_${index + 1}`; // Käytä dynaamista data-näppäintä (data_1, data_2, data_3 jne.)

        for (const kirjain of sana) {
          if (data[nykyinenKey][kirjain.toLowerCase()]) {
            const sanatFiltered = data[nykyinenKey][kirjain.toLowerCase()]
              .filter(item => (index === 0 || edellinenSet.has(item)) && (item.length === index + 1 || sanat.length > index + 1));

            yhteisetSanat.push(...sanatFiltered);
          }
        }

        // Päivitä apuSet seuraavan sanan vertailua varten
        edellinenSet = new Set(yhteisetSanat);

        // Tallenna tulokset ensimmäiseen listaan (ekan kirjaimen jälkeen) ja jatka toisen jne. kirjainpaikan analyysillä
        if (index === 0) {
          apuLista = [...yhteisetSanat];
        } else if (index === sanat.length - 1) {
          console.log(`apuLista_${index + 1}`, yhteisetSanat);
          apuLista = [...yhteisetSanat]
        }
      });

      // Päivitä tila yhdistettynä listana kaikista valituista sanoista
      setEkaKirjainLista(apuLista);
    }
  }, [sanat]);

  useEffect(() => {
    let apuIndexLista = [];
    const pisinSana = sanat.reduce((pisin, sana) => {
      return sana.length > pisin.length ? sana : pisin;
    }, "");
    console.log("ekakirjainlista: ", ekaKirjainLista)
    for (let i = 0; i < sanat.length; i++) {
      if (sanat[i] && ekaKirjainLista[pystySanaIndex] && ekaKirjainLista[pystySanaIndex][i]) {
        const indexOfLetter = sanat[i].indexOf(ekaKirjainLista[pystySanaIndex][i].toLowerCase());
        apuIndexLista.push(pisinSana.length - indexOfLetter);
      } else {
        apuIndexLista.push(-1);
      }
    }
    const pieninNumero = Math.min(...apuIndexLista);
    let pienimmatIndexit = []
    for (const nro of apuIndexLista) {
      pienimmatIndexit.push(nro - pieninNumero)
    }
    console.log("apuIndexilista: ", apuIndexLista)
    console.log("pienimmatIndexit: ", pienimmatIndexit)
    let max = 0;
    for (let i = 0; i < pienimmatIndexit.length; i++) {
      if (pienimmatIndexit[i] + sanat[i].length > max) {
        max = pienimmatIndexit[i] + sanat[i].length
      }
    }
    setSanaIndexLista(pienimmatIndexit);
    console.log("max: ", max)
    setMaxWidth(max)
  }, [ekaKirjainLista, pystySanaIndex]);

  const selaaPystysanoja = () => {
    if (pystySanaIndex < ekaKirjainLista.length - 1) {
      setPystySanaIndex(prev => prev + 1)
    } else {
      setPystySanaIndex(0)
    }
  }

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const openSecondModal = () => {
    setSecondModalVisible(true);
  };

  const closeSecondModal = () => {
    setSecondModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text>Ristikko</Text>
      <View style={styles.asetaSana}>
        <TextInput
          placeholder={`Anna ${sanat.length + 1}. sana`} // Käytä takamerkkejä (``) string interpolointiin
          value={sana}
          onChangeText={text => setSana(text)}
          style={styles.textInput}
        />
        <Button style={styles.lisaaButton} title="Lisää" onPress={lisaaSana} />
      </View>

      {pystyRistikko ? 
      <RistikkoSanat
        sanat={sanat}
        setSanat={setSanat}
        sanaIndexLista={sanaIndexLista}
        boxWidth={boxWidth}
        ekaKirjainLista={ekaKirjainLista}
        pystySanaIndex={pystySanaIndex}
        maxWidth={maxWidth}
        naytaKirjaimet={naytaKirjaimet}
      /> : 
      <SekaRistikko 
        sanat={sanat}
        setSanat={setSanat}
        sanaIndexLista={sanaIndexLista}
        boxWidth={boxWidth}
        ekaKirjainLista={ekaKirjainLista}
        pystySanaIndex={pystySanaIndex}
        maxWidth={maxWidth}
        naytaKirjaimet={naytaKirjaimet}
      />}
      

      <View>
        <Button title="shuffle" onPress={sekoitaLista} />
      </View>
      <View>
        <Button title={naytaKirjaimet ? "Piilota kirjaimet" : "Näytä kirjaimet"} onPress={piilotaKirjaimet} />
      </View>
      <View>
        <Button title="selaa pystysanoja" onPress={selaaPystysanoja} />
      </View>
      <View>
        <Button title="lisää selitykset" onPress={openModal} />
      </View>

      <SelitysModal
        closeModal={closeModal}
        isModalVisible={isModalVisible}
        sanat={sanat}
        selitys={selitys}
        setSelitys={setSelitys}
        openSecondModal={openSecondModal}
      />

      <PreviewModal
        secondModalVisible={secondModalVisible}
        closeSecondModal={closeSecondModal}
        sanat={sanat}
        setSanat={setSanat}
        sanaIndexLista={sanaIndexLista}
        boxWidth={boxWidth}
        ekaKirjainLista={ekaKirjainLista}
        pystySanaIndex={pystySanaIndex}
        maxWidth={maxWidth}
        naytaKirjaimet={naytaKirjaimet}
        piilotaKirjaimet={piilotaKirjaimet}
        selitys={selitys}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
  },
  asetaSana: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  textInput: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 8,
    marginRight: 8,
    width: 200,
  },
  lisaaButton: {
    justifyContent: "center",
    alignContent: "center"
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    height: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  secondModalContainer: {
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 10,
    width: '100%',
  },
  textInputModal: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 8,
    marginRight: 8,
    width: '100%',
  },
});


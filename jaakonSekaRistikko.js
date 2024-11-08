import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function SekaRistikko({sanat, setSanat, sanaIndexLista, boxWidth, 
    ekaKirjainLista, pystySanaIndex, maxWidth,
    naytaKirjaimet}) {

        const [sanaMatriisi, setSanaMatriisi] = useState(
            Array.from({ length: 10 }, () => Array(10).fill(''))
          );
          
    

  return (
    <View style={styles.matriisi}>
      {sanaMatriisi.map((row, index_a) => (
        <View key={index_a} style={styles.rivi}>
          {row.map((kirjain, index_b) => (
            <View key={index_b} style={styles.kirjainLaatikko}>
              <Text style={styles.kirjain}>{kirjain ? kirjain : " "}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    matriisi: {
        flexDirection: "column"
    },
    rivi: {
        flexDirection: "row"
    },
    kirjainLaatikko: {
        borderWidth: 1,
        borderColor: "black",
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    kirjain: {
        fontSize: 16,
    }
});

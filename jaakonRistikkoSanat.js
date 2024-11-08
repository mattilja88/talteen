import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function RistikkoSanat({sanat, setSanat, sanaIndexLista, boxWidth, 
                                        ekaKirjainLista, pystySanaIndex, maxWidth,
                                        naytaKirjaimet}) {
    const poistaSana = (index) => {
        const apuPoisto = [...sanat]
        apuPoisto.splice(index, 1)
        setSanat(apuPoisto)
      }
    
    return (
        <View style={styles.sanatList}>
        {sanat.length > 0 &&
          sanat.map((item, index) => {
            // Ensure sanaIndexLista[index] is a valid positive integer
            const emptyBoxCount = Number.isInteger(sanaIndexLista[index]) && sanaIndexLista[index] > 0 ? sanaIndexLista[index] : 0;

            // Create an array of empty boxes up to emptyBoxCount
            const emptyBoxes = Array(emptyBoxCount).fill("");
            let used = false
            return (
              <TouchableOpacity key={index} style={styles.sanaContainer} onPress={() => { poistaSana(index) }}>
                {/* Render empty boxes */}
                {emptyBoxes.map((_, emptyIndex) => (
                  <View style={[styles.kirjainLaatikkoTyhja, { width: boxWidth, height: boxWidth }]} key={`empty-${emptyIndex}`}>
                    <Text style={styles.kirjainLaatikkoKirjain}></Text>
                  </View>
                ))}

                {/* Render actual characters in the word */}
                {item.split('').map((kirjain, index_b) => {
                  // Check if ekaKirjainLista and its nested elements exist

                  const isHighlighted =
                    ekaKirjainLista[pystySanaIndex] &&
                    ekaKirjainLista[pystySanaIndex][index] && !used &&
                    kirjain === ekaKirjainLista[pystySanaIndex][index];

                  if (isHighlighted) used = true;

                  return (
                    <View style={[styles.kirjainLaatikko, { backgroundColor: isHighlighted ? "lightgrey" : "white", width: boxWidth, height: boxWidth }]} key={`kirjain-${index_b}`}>
                      <Text
                        style={[{ fontSize: maxWidth > 16 ? 10 : 20 }]}
                      >
                        {naytaKirjaimet ? kirjain.toUpperCase() : ""}
                      </Text>
                    </View>
                  );
                })}
              </TouchableOpacity>
            );
          })}
      </View>
    )
}

const styles = StyleSheet.create({
    sanatList: {
      marginTop: 16,
    },
    sanaContainer: {
      flexDirection: "row",
      marginBottom: 1,
    },
    kirjainLaatikkoTyhja: {
      alignItems: "center",
      justifyContent: "center",
      borderStyle: "solid",
      borderColor: "black",
      marginRight: 1,
    },
    kirjainLaatikko: {
      borderWidth: 1,
      borderColor: "black",
      alignItems: "center",
      justifyContent: "center",
      borderStyle: "solid",
      marginRight: 1,
    },
  });
  

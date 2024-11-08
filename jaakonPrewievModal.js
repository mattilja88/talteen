import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef } from 'react';
import RistikkoSanat from './RistikkoSanat';
import ViewShot, { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';

export default function PreviewModal({
    secondModalVisible,
    closeSecondModal,
    sanat,
    setSanat,
    sanaIndexLista,
    boxWidth,
    ekaKirjainLista,
    pystySanaIndex,
    maxWidth,
    naytaKirjaimet,
    selitys,
    piilotaKirjaimet,
}) {

    const viewShotRef = useRef();

    const tallennaJaJaaKuva = async () => {
        try {
            const uri = await captureRef(viewShotRef, {
                format: "jpg",
                quality: 0.8
            });

            // Tarkista, että sharing on saatavilla
            if (await Sharing.isAvailableAsync()) {
                await Sharing.shareAsync(uri, {
                    mimeType: 'image/jpeg', // MIME-tyyppi kuvaksi
                    dialogTitle: 'Jaa PDF',  // Näytön otsikko, kun jaetaan tiedostoa
                });
            } else {
                alert('Jakaminen ei ole saatavilla tällä laitteella');
            }
        } catch (error) {
            console.error("Error capturing or sharing the view:", error);
        }
    };

    return (
        <Modal
            transparent={true}
            visible={secondModalVisible}
            animationType="slide"
            onRequestClose={closeSecondModal}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.secondModalContainer}>
                    <ViewShot ref={viewShotRef} style={{
                        aspectRatio: 210 / 297, // A4-kokoisten suhteiden säilyttäminen
                        width: '100%',          // Voit asettaa leveyden tai korkeuden, ja aspectRatio ylläpitää suhteet
                        backgroundColor: 'white',
                    }}>
                        <RistikkoSanat
                            sanat={sanat}
                            setSanat={setSanat}
                            sanaIndexLista={sanaIndexLista}
                            boxWidth={boxWidth}
                            ekaKirjainLista={ekaKirjainLista}
                            pystySanaIndex={pystySanaIndex}
                            maxWidth={maxWidth}
                            naytaKirjaimet={naytaKirjaimet}
                        />
                        {selitys.map((sana, index) => (
                            <View key={index} style={styles.vihjeteksti}>
                                <Text>{index + 1}. {sana}</Text>
                            </View>
                        ))}
                    </ViewShot>
                    <View>
                        <Button title={naytaKirjaimet ? "Piilota kirjaimet" : "Näytä kirjaimet"} onPress={piilotaKirjaimet} />
                    </View>
                    <TouchableOpacity onPress={tallennaJaJaaKuva} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Jaa PDF:nä</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={closeSecondModal} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>sulje</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
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
    vihjeteksti: {
        marginBottom: 10,
        width: '100%',
        paddingHorizontal: 10,
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
});

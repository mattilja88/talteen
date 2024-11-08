import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function SelitysModal({isModalVisible, closeModal, sanat, selitys, setSelitys, openSecondModal, }) {
  return (
    <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Lisää selitykset!</Text>
            {sanat.map((sana, index) => (
              <View key={index} style={styles.inputContainerModal}>
                <TextInput
                  placeholder={`Anna selitys: ${sana}`}
                  style={styles.textInput}
                  value={selitys[index] || ''} // Ensures a value is present even if undefined
                  onChangeText={(text) => {
                    const newSelitys = [...selitys];
                    newSelitys[index] = text; // Update only the specific index
                    setSelitys(newSelitys); // Update state with the new array
                  }}
                />
              </View>
            ))}
            <TouchableOpacity onPress={openSecondModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Avaa esikatselu</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>sulje</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
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
    modalText: {
      fontSize: 18,
      marginBottom: 15,
    },
    textInput: {
      borderColor: '#000',
      borderWidth: 1,
      padding: 8,
      marginRight: 8,
      width: 200,
    },
    inputContainerModal: {
      marginBottom: 10,
      width: '100%',
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


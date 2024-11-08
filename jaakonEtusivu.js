import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Etusivu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tervetuloa ristikkosovellukseen</Text>
      <TouchableOpacity
        style={styles.ristikkoNappi}
        onPress={() => navigation.navigate('Ristikko')} // Navigoi "Ristikko"-näkymään
      >
        <Text>Ristikko</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ristikkoNappi: {
    width: 128,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 30,
    backgroundColor: 'lightgreen',
  },
});

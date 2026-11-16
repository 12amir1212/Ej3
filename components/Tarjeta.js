
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Targeta = (props) => {
  return (
    <View style={styles.targeta}>

      <Text style={styles.nomUsuari}>
        {props.nombre}
      </Text>

      <Text style={styles.rolUsuari}>
        {props.rol}
      </Text>

      <Text style={styles.data}>
        Membre des de: {props.data}
      </Text>

      {props.premium && (
        <Image
          source={require('../assets/premium.png')}
          style={styles.imatgePremium}
        />
      )}

      <Text style={props.online ? styles.online : styles.offline}>
        {props.online ? '● Online' : '● Offline'}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  targeta: {
    width: '90%',
    maxWidth: 360,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    margin: 10,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  nomUsuari: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1565c0',
  },

  rolUsuari: {
    fontSize: 15,
    color: '#555555',
    marginTop: 4,
  },

  data: {
    fontStyle: 'italic',
    color: '#888888',
    marginTop: 4,
  },

  imatgePremium: {
    width: 100,
    height: 100,
  },

  online: {
    color: 'green',
    fontSize: 12,
    marginTop: 10,
  },

  offline: {
    color: 'red',
    fontSize: 12,
    marginTop: 10,
  },
});

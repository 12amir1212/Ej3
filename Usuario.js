import { View, Text,StyleSheet } from 'react-native';

export default function Usuario(props) {
  return (
    <View style={styles.container}>
      <Text>Nombre: {props.nombre}</Text>
      <Text>Edad: {props.edad}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    textAlign: 'center',
  }
});
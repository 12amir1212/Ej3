import { View, Text,StyleSheet } from 'react-native';
export default function Usuario(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nombre: {props.nombre}</Text>
      <Text style={styles.texto}>Precio: {props.precio} €</Text>
    </View>
  );
}const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
},
 
 texto:{
    textAlign: 'center',
  }
});
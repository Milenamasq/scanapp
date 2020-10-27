import React from 'react';
import {  StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';


import scan from'../../assets/scan.png';




export default function Firstela( {navigation} ) {

    const [selectedImage, setSelectedImage] = React.useState(null);


    function TirarFoto(){
        navigation.navigate('Tire sua foto')
    }
    function EscolherFoto(){
        navigation.navigate('Escolha sua foto')
    }

    


    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.logo}
                    source={scan}
                />
                <Text style={styles.texto}>Projeto App Scan 3D</Text>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={TirarFoto}
                >
                    <Text>Tirar foto</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={EscolherFoto}
                >
                    <Text>Selecionar imagem da galeria</Text>
                </TouchableOpacity>
            </View>

      
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d3142',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    
    color: 'white',
    fontSize: 30,
    marginBottom: 15,
    textAlign: "center"

  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 15,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
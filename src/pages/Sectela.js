import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';



export default function Sectela(){

    const [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert('É necessario sua permissão para acesso à câmera!');
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
        if (pickerResult.cancelled === true) {
          return;
        }
    
        setSelectedImage({ localUri: pickerResult.uri });
    };
  
    if (selectedImage !== null) {
        return (
            <View style={styles.container}>
              <Image
                source={{ uri: selectedImage.localUri }}
                style={styles.photo}
              />
            </View>
        );
    }
        

      return(
          <View style={styles.container}>
              <View>
                  <TouchableOpacity style={styles.buttonsec} onPress={openImagePickerAsync}>
                    <Text style={styles.textbutton}>Clique aqui para escolher</Text>
                  </TouchableOpacity>
              </View>
          </View>
      )
}
const styles = StyleSheet.create({
    photo:{
        width: 300,
        height: 300,
        resizeMode: "contain",
    },
    container: {
        flex: 1,
        backgroundColor: '#2d3142',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: "center",
        backgroundColor: "white",
        padding: 20,
        marginBottom: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonsec: {
        alignItems: "center",
        backgroundColor: "white",
        padding: 50,
        marginBottom: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    textbutton:{
        color: 'black',
        fontSize: 20,
        textAlign: 'center'
        
    }

});
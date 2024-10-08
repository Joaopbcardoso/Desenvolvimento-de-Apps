import { useState, useRef } from "react";
import { View, SafeAreaView, StyleSheet, Image, Pressable, Text, Button, Modal, Linking } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from 'expo-media-library'; 

export default function Camera() {
  const [permissao, pedirPermissao] = useCameraPermissions(); // responsável por definir a permissão para o uso da camera
  const [mediaPermissao, pedirMediaPermissao] = MediaLibrary.usePermissions(); //permissão para salvar foto no dispositivo
  const [foto, setFoto] = useState(null); // definir a foto tirada
  const [ladoCamera, setLadoCamera] = useState("back"); // definir a câmera padrão para a câmera traseira
  const [modalVisible, setModalVisible] = useState(false); // define o estado da modal (inicialmente false)
  const [linkQRCode, setLinkQRCode] = useState(null); // capta o link que o QRCode pegou
  const cameraRef = useRef(null);

  if (!permissao) {
    return <View></View>;
  }

  if (!permissao.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.textpermission}>Você precisa autorizar o aplicativo para utilizar a câmera</Text>
        <Button title="Dar Permissão" onPress={pedirPermissao} />
      </View>
    );
  }

  if (!mediaPermissao?.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.textpermission}>Você precisa autorizar o aplicativo para salvar fotos na galeria</Text>
        <Button title="Dar Permissão para Galeria" onPress={pedirMediaPermissao} />
      </View>
    );
  }

  const tirarFoto = async () => {
    const foto = await cameraRef.current?.takePictureAsync({
      quality: 0.5,
      base64: true,
    });
    setFoto(foto);
  };

  const salvarFoto = async () => {
    try {
      const asset = await MediaLibrary.createAssetAsync(foto.uri);
      await MediaLibrary.createAlbumAsync('Camera', asset, false);
      console.log('Foto salva com sucesso!');
      setFoto(null)
    } catch (error) {
      console.log('Erro ao salvar a foto:', error);
    }
  };

  const inverterLadoCamera = () => {
    setLadoCamera(ladoCamera === "back" ? "front" : "back");
  };

  const BarcodeScanningResult = (result) => {
    console.log('Link encontrado:', result.data);
    setLinkQRCode(result.data); 
    setModalVisible(true); 
  };

  const navegarParaLink = async () => {
    setModalVisible(false);
    const supported = await Linking.canOpenURL(linkQRCode);
  
    if (supported) {
      Linking.openURL(linkQRCode);  // Aqui você está realmente abrindo o link
    } else {
      console.log("Não é possível abrir o link:", linkQRCode);
    }
  };
  

  return (
    <View style={styles.container}>
      {foto ? 
        <SafeAreaView style={styles.result}>
          <Image style={styles.image} source={{ uri: foto.uri }} />
          <View style={styles.options}>
            <Pressable onPress={() => setFoto(null)} style={styles.switchButton}>
              <Image
                source={require('../../assets/images/delete.png')}
                style={styles.optionicon}
              />
            </Pressable>
            <Pressable onPress={salvarFoto} style={styles.cameraButtonContainer}>
              <Image
                source={require('../../assets/images/save.png')}
                style={styles.optionicon}
              />
            </Pressable>
          </View>
        </SafeAreaView>
      : 
        <CameraView
          facing={ladoCamera}
          style={styles.camera}
          ref={cameraRef}
          onBarcodeScanned={BarcodeScanningResult}
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
        >
          <View style={styles.buttonContainer}>
            <Pressable onPress={inverterLadoCamera} style={styles.switchButton}>
              <Image
                source={require('../../assets/images/mudar-camera.png')}
                style={styles.switchImage}
              />
            </Pressable>
            <Pressable onPress={tirarFoto} style={styles.cameraButtonContainer}>
              <Image
                source={require('../../assets/images/botao-camera.png')}
                style={styles.cameraButton}
              />
            </Pressable>
          </View>
        </CameraView>
      }
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Você deseja navegar para o link:</Text>
            <Text style={styles.modalLink}>{linkQRCode}</Text>
            <View style={styles.modalButtons}>
              <Button title="Não" onPress={() => setModalVisible(false)} />
              <Button title="Sim" onPress={navegarParaLink} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textpermission: {
        textAlign: 'center',
        marginBottom: 20
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row', 
        width: '100%', 
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    cameraButtonContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraButton: {
        width: 90,
        height: 90,
        marginLeft: -50,
        resizeMode: 'contain',
    },
    switchButton: {
        justifyContent: 'flex-start',
    },
    switchImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    image:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    result:{
        flex:1,
        justifyContent: "center",
    },

    options:{
        backgroundColor: '#434343', 
        flexDirection: 'row', 
        width: '100%', 
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-around',
    }, 

    optionicon: {
        marginHorizontal: 50,
        alignItems: 'center',
        resizeMode: 'contain',
        width: 50,
        height: 60
    },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 10,
    fontSize: 18,
  },
  modalLink: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

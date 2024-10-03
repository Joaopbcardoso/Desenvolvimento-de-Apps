import { useState, useRef } from "react";
import { View, StyleSheet, Image, Pressable, Text, Button } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from 'expo-media-library'; // Importa o módulo MediaLibrary

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [mediaPermissao, pedirMediaPermissao] = MediaLibrary.usePermissions(); // Permissão para salvar mídia
    const [foto, setFoto] = useState(null);
    const [cameraType, setCameraType] = useState("back"); // Estado para definir o tipo de câmera (traseira ou frontal)
    const cameraRef = useRef(null);

    // Verifica permissão da câmera
    if (!permissao) {
        return <View></View>;
    }

    // Solicita permissão para a câmera se não for concedida
    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.textpermission}>Você precisa autorizar o aplicativo para utilizar a câmera</Text>
                <Button title="Dar Permissão" onPress={pedirPermissao} />
            </View>
        );
    }

    // Solicita permissão para a galeria se não for concedida
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
            base64: true
        });
        setFoto(foto);

        // Salva a foto na galeria do dispositivo
        const asset = await MediaLibrary.createAssetAsync(foto.uri);
        MediaLibrary.createAlbumAsync('Camera', asset, false)
            .then(() => {
                console.log('Foto salva com sucesso!');
            })
            .catch((error) => {
                console.log('Erro ao salvar a foto:', error);
            });
    };

    const alternarCamera = () => {
        setCameraType((prevCameraType) => (prevCameraType === "back" ? "front" : "back"));
    };

    return (
        <CameraView
            facing={cameraType} // Usa o estado para controlar a câmera (traseira ou frontal)
            style={styles.camera}
            ref={cameraRef}
        >
            <View style={styles.buttonContainer}>
                {/* Botão de alternar câmera (alinhado à esquerda) */}
                <Pressable onPress={alternarCamera} style={styles.switchButton}>
                    <Image
                        source={require('../../assets/images/mudar-camera.png')}
                        style={styles.switchImage}
                    />
                </Pressable>

                {/* Botão para tirar foto (centralizado) */}
                <Pressable onPress={tirarFoto} style={styles.cameraButtonContainer}>
                    <Image
                        source={require('../../assets/images/botao-camera.png')}
                        style={styles.cameraButton}
                    />
                </Pressable>
            </View>
        </CameraView>
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
        flexDirection: 'row', // Coloca os botões em linha
        width: '100%', // Faz o container ocupar toda a largura da tela
        alignItems: 'center',
        justifyContent: 'space-between', // Alinha um botão à esquerda e outro no centro
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
    }
});

import React from "react"; // Importa a biblioteca React
import { View, Text } from "react-native"; // Importa os componentes View e Text da biblioteca react-native

// Define o componente funcional TabScreen
export default function TabScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Tab</Text>
        </View>
    );
}

// Define os estilos utilizados no componente
const styles = {
    container: {
        flex: 1, // Faz o componente ocupar todo o espaço disponível
        justifyContent: "center", // Centraliza o conteúdo verticalmente
        alignItems: "center", // Centraliza o conteúdo horizontalmente
        backgroundColor: "salmon", // Define a cor de fundo como salmão
    },
    title: {
        fontSize: 30, // Define o tamanho da fonte como 30
    },
};
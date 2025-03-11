import React from "react"; // Importa a biblioteca React
import { View, Text } from "react-native"; // Importa os componentes View e Text da biblioteca react-native

// Define o componente funcional DrawerScreen
export default function DrawerScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Drawer</Text>
        </View>
    );
}

// Define os estilos utilizados no componente
const styles = {
    container: {
        flex: 1, // Faz a View ocupar todo o espaço disponível
        justifyContent: "center", // Centraliza o conteúdo verticalmente
        alignItems: "center", // Centraliza o conteúdo horizontalmente
        backgroundColor: "lightgreen", // Define a cor de fundo como verde claro
    },
    title: {
        fontSize: 30, // Define o tamanho da fonte como 30
    },
};
import React from "react"; // Importa a biblioteca React
import { View, Text } from "react-native"; // Importa os componentes View e Text da biblioteca react-native

// Função principal que define o componente Drawer2
export default function Drawer2() {
    return (
        <View style={styles.container}></View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
    },
    title: {
        fontSize: 30,
    },
};
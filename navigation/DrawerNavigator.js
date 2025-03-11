import React from "react"; // Importa a biblioteca React
import { createDrawerNavigator } from "@react-navigation/drawer"; // Importa a função para criar um navegador de gaveta
import DrawerScreen from "../pages/DrawerScreen"; // Importa o componente DrawerScreen
import Drawer2 from "../pages/Drawer2"; // Importa o componente Drawer2

const Drawer = createDrawerNavigator(); // Cria uma instância do navegador de gaveta

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="DrawerScreen"> "DrawerScreen"
            <Drawer.Screen name="Drawer Screen" component={DrawerScreen} />
            <Drawer.Screen name="Drawer 2" component={Drawer2} />
        </Drawer.Navigator>
    );
}
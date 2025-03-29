import React from "react"; 
import { createDrawerNavigator } from "@react-navigation/drawer"; 
import Home from "../pages/Home"; 
import Detalhes from "../pages/Detalhes"; 

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() { 
return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Detalhes" component={Detalhes} />
    </Drawer.Navigator>
);
}
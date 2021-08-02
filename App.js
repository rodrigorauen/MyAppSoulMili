import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { createContext, useState } from 'react';
import Deposito from './src/Components/Deposito';
import Header from './src/Components/Header';
import Home from './src/Components/Home';
import Tips from './src/Components/Tips';
import Ionicons from "react-native-vector-icons/Ionicons";


const Tab = createMaterialTopTabNavigator();
export const UsuarioContext = createContext();
export default function App() {
    const [usuario, setUsuario]=useState({
        nome: 'Sr(a)',
        agencia: 'SC1920-X',
        cc: '666-69',
        saldo: 0,
    })

  return (  
    
    <NavigationContainer>
      <StatusBar style='auto'/>
      <Header/>
      <UsuarioContext.Provider value={{usuario , setUsuario}}>
        <Tab.Navigator
        initialRouteName='Home'
          screenOptions={({route}) => ({
            tabBarIcon: ({color,size}) => {
              let iconName;
              switch(route.name){
                case 'Home':
                  iconName = "home"
                  break;
                case 'Deposito':
                  iconName = 'cash'
                  break;
                case 'Dicas':
                  iconName='briefcase-sharp'
                  break;
              }
              return <Ionicons name={iconName} size={22} color={color}/>;
            },
          })}
        tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: 'blue',
          showIcon:'true',
        }}
        >
          <Tab.Screen name='Home' component={Home}/>
          <Tab.Screen name='Deposito' component={Deposito}/>
          <Tab.Screen name='Dicas' component={Tips}/>
        </Tab.Navigator>
      </UsuarioContext.Provider>
    </NavigationContainer>
   
  );
}


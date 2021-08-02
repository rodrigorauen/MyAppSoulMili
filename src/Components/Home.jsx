import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { UsuarioContext } from '../../App';
import { styles } from '../Style/Styles';
import Ionicons from "react-native-vector-icons/Ionicons";



export default function Home(){
    const {usuario, setUsuario}=useContext(UsuarioContext)
    const [hide, setHide]=useState(styles.show);
    const handleInputChange = (param,valor) => {
        setUsuario({
            ...usuario,[param]: valor
        })    
    };
    return(
        <View style={styles.viewPrincipal}>
            <View style={hide}>
                <Text style={styles.textHeader}>Como devo chama-lo(a)?</Text>
                <TextInput 
                    placeholder='Seu nome'
                    style={styles.input}
                    onChangeText={(valor) => handleInputChange('nome',valor)}
                />
                <TouchableOpacity
                    style={styles.buttonDepo}
                    onPress={()=> setHide(styles.hide)}
                >
                    <Text style={styles.buttonText}>Cofirmar</Text>
                </TouchableOpacity> 
            </View>
            <Text style={styles.textMain}>
                Olá {usuario.nome} !
            </Text>
            <Text style={styles.textMain}>
                Agência: {usuario.agencia}
            </Text>
            <Text style={styles.textMain}>
                Conta: {usuario.cc}
            </Text>
            <Text style={styles.textMain}>
                Saldo: R${usuario.saldo}
            </Text>
            <View>
                <View style={styles.viewIcons}>
                    <TouchableOpacity
                        style={styles.iconsHome}
                    >
                        <Ionicons name={'card'} size={35} color={'orange'}/>
                        <Text style={styles.textIconsHome}>Cartão</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.iconsHome}
                    >
                        <Ionicons name={'barcode-outline'} size={35} color={'orange'}/>
                        <Text style={styles.textIconsHome}>Pagamentos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.iconsHome}
                    >
                        <Ionicons name={'analytics-outline'} size={35} color={'orange'}/>
                        <Text style={styles.textIconsHome}>Investimentos</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewIcons}>
                    <TouchableOpacity
                        style={styles.iconsHome}
                    >
                        <Ionicons name={'logo-usd'} size={35} color={'orange'}/>
                        <Text style={styles.textIconsHome}>Empréstimos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.iconsHome}
                    >
                        <Ionicons name={'fitness-outline'} size={35} color={'orange'}/>
                        <Text style={styles.textIconsHome}>Seguro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.iconsHome}
                    >
                        <Ionicons name={'chatbubbles-outline'} size={35} color={'orange'}/>
                        <Text style={styles.textIconsHome}>Contato</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
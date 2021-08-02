import React, { useContext, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../Style/Styles';
import { UsuarioContext } from '../../App';
import { Value } from 'react-native-reanimated';

export default function Deposito(){

    const {usuario, setUsuario}= useContext(UsuarioContext);
    const [dep,setDep]=useState({
        dep: 0,
        });
    const handleInputChange = (param,valor) => {
        setUsuario({
            ...usuario,[param]: valor
        })
    };
    const handleInputChange2 = (param,valor) => {
        setDep({
            ...dep,[param]: Number(valor)
        })
    };
    return(
        <View style={styles.viewPrincipal}>
            <Text style={styles.textMain}>Seu saldo total é de:</Text>
            <Text style={styles.textHeader}>R$:{usuario.saldo}</Text>
            <Text style={styles.textMain}>Gostaria de fazer um depósito?</Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                placeholder= 'Valor do depósito'
                onChangeText={
                    (valor) => handleInputChange2('dep', valor*1.7)}
            />
            <TouchableOpacity
                style={styles.buttonDepo}
                onPress={
                   () => handleInputChange('saldo', Number((usuario.saldo + dep.dep).toFixed(2)))
                }
            >
                <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    )
}
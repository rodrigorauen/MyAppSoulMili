import React from 'react';
import { View,Text } from 'react-native';
import { styles } from '../Style/Styles';

export default function Header(){
    return(
        <View style={styles.viewHeader}>
            <Text style={[styles.textHeader, styles.textColorHeader]}>SoulMili</Text>
        </View>
    )
}
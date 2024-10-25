import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from '../contexts/ThemeContext';
import { lightTheme, darkTheme } from '../themes/themes';
import questionIcon from '../../assets/img/question.png';  
import closeIcon from '../../assets/img/close.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import securityIcon from '../../assets/img/security.png';
import configsIcon from '../../assets/img/settings.png';

const functions = [
    {id:1, icon: 'cash-fast', name: 'Transferir', route:'Transferir' },
    {id:2, icon: 'barcode', name: 'Pagar' },
    {id:6, icon: 'cash-refund', name: 'Cobrar' },
    {id:5, icon: 'cellphone', name: 'Recarga de celular' },
    {id:7, icon: 'globe-model', name: 'Transferir Internac.' },
    {id:7, icon: 'heart-outline', name: 'Doação' },
]

export default function AreaPix() {
    const navigation = useNavigation();
    const { isDarkMode } = useTheme();
    const theme = isDarkMode ? darkTheme : lightTheme;

    const handlePressClose = () => {
        navigation.navigate('Home');
    }
    const handlePressNavigate = (item) => {
        navigation.navigate(item.route);
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <ScrollView>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={handlePressClose} style={styles.iconClose}>
                        <Image source={closeIcon} style={[styles.icon, { tintColor: theme.iconColor }]} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconQuestion}>
                        <Image source={questionIcon} style={[styles.icon, { tintColor: theme.iconColor }]} />
                    </TouchableOpacity>
                </View>
                <View style={styles.pixContainer}>
                    <Text style={[styles.pixTitle, { color: theme.textColor }]}>Área Pix</Text>
                    <Text style={[styles.pixSubtitle, { color: theme.textColor }]}>Envie e receba pagamentos a qualquer hora e dia da semana, sem pagar nada por isso</Text>
                </View>

                <View style={styles.pixButtons}>
                    {functions.map((item) => (
                        <View key={item.id} style={styles.pixButtonWrapper}>
                            <TouchableOpacity 
                                style={[styles.Button, { backgroundColor: theme.functionIconBackground }]} 
                                onPress={() => handlePressNavigate(item)}
                            >
                                <View style={styles.iconContainer}>
                                    <Icon name={item.icon} size={24} color={theme.functionIconColor} />
                                </View>
                            </TouchableOpacity>
                            <Text style={[styles.pixButtonText, { color: theme.textColor }]}>{item.name}</Text>
                        </View>
                    ))}
                </View>

                <View style={[styles.divider, { backgroundColor: theme.dividerColor }]}></View>
                <View style={styles.preferences}>
                    <View style={styles.preferencesChaves}>
                        <Image source={securityIcon} style={[styles.icon, { tintColor: theme.iconColor }]} />
                        <Text style={[styles.preferencesText, { color: theme.textColor }]}>Registrar ou trazer chaves</Text>
                    </View>
                    <View style={[styles.divider2, { backgroundColor: theme.dividerColor }]}></View>
                    <View style={styles.preferencesConfigs}>
                        <Image source={configsIcon} style={[styles.icon, { tintColor: theme.iconColor }]} />
                        <Text style={[styles.preferencesConfigsText, { color: theme.textColor }]}>Configurar Pix</Text>
                    </View>
                    <View style={[styles.divider2, { backgroundColor: theme.dividerColor }]}></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pixContainer: {
        margin: 30,
        marginTop: -20,
    },
    pixTitle: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    pixSubtitle: {
        marginTop: 10,
        fontSize: 17,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        marginTop: 40,
    },
    iconQuestion: {
        marginRight: 20,
    },
    iconClose: {
        marginLeft: 20,
    },
    icon: {
        width: 24,
        height: 24,
    },
    pixButtons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: 20,
    },
    pixButtonWrapper: {
        width: '30%', 
        alignItems: 'center',
        marginBottom: 20,
    },
    Button: {
        padding: 10,
        borderRadius: 32,
        width: 64,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pixButtonText: {
        marginTop: 10,
        fontSize: 12,
        textAlign: 'center',
    },
    divider: {
        width: '100%',
        height: 1,
        marginTop: 20, 
    },
    preferences: {
        margin: 30,
    },
    preferencesChaves: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    preferencesText: {
        fontSize: 16,
    },
    preferencesConfigs: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    preferencesConfigsText: {
        fontSize: 16,
    },
    divider2: {
        width: '100%',
        height: 1,
        marginTop: 20, 
    },
}); 

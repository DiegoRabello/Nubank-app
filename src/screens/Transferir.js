import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../contexts/ThemeContext';
import { lightTheme, darkTheme } from '../themes/themes';

import closeIcon from '../../assets/img/close.png';
import questionIcon from '../../assets/img/question.png';

export default function Transferir() {
    const navigation = useNavigation();
    const [valor, setValor] = useState('');
    const [destinatario, setDestinatario] = useState('');
    const [saldo, setSaldo] = useState(1000);
    const { isDarkMode } = useTheme();
    const theme = isDarkMode ? darkTheme : lightTheme;

    useEffect(() => {
        const carregarSaldo = async () => {
            try {
                const saldoSalvo = await AsyncStorage.getItem('saldo');
                if (saldoSalvo !== null) {
                    setSaldo(parseFloat(saldoSalvo));
                }
            } catch (error) {
                console.error('Erro ao carregar o saldo:', error);
            }
        };

        carregarSaldo();
    }, []);

    const handlePressClose = () => {
        navigation.goBack();
    }

    const handleTransferir = async () => {
        const valorTransferencia = parseFloat(valor);
        if (isNaN(valorTransferencia) || valorTransferencia <= 0) {
            Alert.alert('Erro', 'Por favor, insira um valor válido.');
            return;
        }

        if (valorTransferencia > saldo) {
            Alert.alert('Erro', 'Saldo insuficiente para realizar a transferência.');
            return;
        }

        if (!destinatario.trim()) {
            Alert.alert('Erro', 'Por favor, insira o destinatário.');
            return;
        }

        const novoSaldo = saldo - valorTransferencia;
        setSaldo(novoSaldo);

        try {
            await AsyncStorage.setItem('saldo', novoSaldo.toString());
            Alert.alert('Sucesso', `Transferência de R$ ${valorTransferencia.toFixed(2)} para ${destinatario} realizada com sucesso.`);
            navigation.navigate('Home');
        } catch (error) {
            console.error('Erro ao salvar o novo saldo:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao realizar a transferência. Tente novamente.');
        }
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePressClose} style={styles.iconButton}>
                    <Image source={closeIcon} style={[styles.icon, { tintColor: theme.iconColor }]} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: theme.textColor }]}>Transferência</Text>
                <TouchableOpacity style={styles.iconButton}>
                    <Image source={questionIcon} style={[styles.icon, { tintColor: theme.iconColor }]} />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={[styles.title, { color: theme.textColor }]}>Qual é o valor da transferência?</Text>
                <Text style={[styles.subtitle, { color: theme.textColor }]}>Saldo disponível: R$ {saldo.toFixed(2)}</Text>
                <View style={[styles.inputWrapper, { borderBottomColor: theme.dividerColor }]}>
                    <Text style={[styles.currencySymbol, { color: theme.textColor }]}>R$</Text>
                    <TextInput 
                        style={[styles.valueInput, { color: theme.textColor }]}
                        placeholder="0,00"
                        placeholderTextColor={theme.textColor + '80'}
                        keyboardType="numeric"
                        value={valor}
                        onChangeText={setValor}
                    />
                </View>
                <TextInput 
                    style={[styles.destinatarioInput, { borderBottomColor: theme.dividerColor, color: theme.textColor }]}
                    placeholder="Para quem você quer transferir?"
                    placeholderTextColor={theme.textColor + '80'}
                    value={destinatario}
                    onChangeText={setDestinatario}
                />
            </ScrollView>
            <TouchableOpacity style={[styles.transferButton, { backgroundColor: theme.buttonBackground }]} onPress={handleTransferir}>
                <Text style={[styles.transferButtonText, { color: theme.buttonTextColor }]}>Transferir</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    iconButton: {
        padding: 10,
    },
    icon: {
        width: 24,
        height: 24,
    },
    content: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.7,
        marginBottom: 30,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        marginBottom: 30,
    },
    currencySymbol: {
        fontSize: 24,
        marginRight: 10,
    },
    valueInput: {
        flex: 1,
        fontSize: 32,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    destinatarioInput: {
        borderBottomWidth: 1,
        fontSize: 18,
        paddingVertical: 10,
    },
    transferButton: {
        paddingVertical: 15,
        borderRadius: 25,
        marginHorizontal: 30,
        marginBottom: 30,
    },
    transferButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

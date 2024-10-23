import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import closeIcon from '../../assets/img/close.png';
import questionIcon from '../../assets/img/question.png';

export default function Transferir() {
    const navigation = useNavigation();
    const [valor, setValor] = useState('');
    const [destinatario, setDestinatario] = useState('');
    const [saldo, setSaldo] = useState(1000);

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
        navigation.navigate('AreaPix');
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
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePressClose} style={styles.iconButton}>
                    <Image source={closeIcon} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Transferência</Text>
                <TouchableOpacity style={styles.iconButton}>
                    <Image source={questionIcon} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Qual é o valor da transferência?</Text>
                <Text style={styles.subtitle}>Saldo disponível: R$ {saldo.toFixed(2)}</Text>
                <View style={styles.inputWrapper}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <TextInput 
                        style={styles.valueInput}
                        placeholder="0,00"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        keyboardType="numeric"
                        value={valor}
                        onChangeText={setValor}
                    />
                </View>
                <TextInput 
                    style={styles.destinatarioInput}
                    placeholder="Para quem você quer transferir?"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    value={destinatario}
                    onChangeText={setDestinatario}
                />
            </View>
            <TouchableOpacity style={styles.transferButton} onPress={handleTransferir}>
                <Text style={styles.transferButtonText}>Transferir</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
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
        color: 'white',
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
        color: 'white',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: 30,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginBottom: 30,
    },
    currencySymbol: {
        color: 'white',
        fontSize: 24,
        marginRight: 10,
    },
    valueInput: {
        flex: 1,
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    destinatarioInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        color: 'white',
        fontSize: 18,
        paddingVertical: 10,
    },
    transferButton: {
        backgroundColor: '#FF0000',
        paddingVertical: 15,
        borderRadius: 10,
        marginHorizontal: 30,
        marginBottom: 30,
    },
    transferButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

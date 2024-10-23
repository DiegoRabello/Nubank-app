import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import HomeHeader from "../components/homeHeader";
import FunctionsHome from "../components/functionsHome";
import CreditCardIcon from '../../assets/img/credit_card.png';

export default function HomeScreen() {
    const [saldo, setSaldo] = useState(1000);

    useFocusEffect(
        React.useCallback(() => {
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
        }, [])
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <HomeHeader />
                <View style={styles.content}>
                    <View style={styles.containerCard}>
                        <Text style={styles.titleCard}>
                            Conta
                        </Text>
                        <View style={styles.valorCard}>
                            <Text style={styles.valorText}>
                                R$ {saldo.toFixed(2)}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.functionsContainer}>
                    <FunctionsHome />
                </View>
                <TouchableOpacity style={styles.myCard}>
                    <Image source={CreditCardIcon} style={styles.myCardImage}></Image>
                    <Text style={styles.myCardText}>
                        Meus cartões
                    </Text>
                </TouchableOpacity>

                <View style={styles.divider}></View>

                <View style={styles.cardsContainer}>
                    <Text style={styles.cardsTitle}>
                        Cartão de Crédito
                    </Text>
                    <Text style={styles.cardSubtitle}>
                        Fatura atual
                    </Text>
                    <View style={styles.cardValue}>
                        <Text style={styles.cardValueText}>
                            R$ 100,00
                        </Text>
                        <Text style={styles.cardLimitText}>
                            Limite disponível R$ 400,00
                        </Text>
                        <Text style={styles.cardVencimentoText}>
                            Vencimento em 22 OUT
                        </Text>
                    </View>
                    <View  style={styles.cardButtonContainer}>
                        <TouchableOpacity style={styles.cardButton}>
                            <Text style={styles.cardButtonText}>
                            Pagar
                        </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.parcelarButton}>
                            <Text style={styles.parcelarButtonText}>
                                Parcelar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.emprestimoContainer}>
                    <Text style={styles.emprestimoTitle}>
                        Empréstimo
                    </Text>
                    <Text style={styles.emprestimoSubtitle}>
                        Dinheiro parado no FGTS? você pode antecipar até 12 parcelas do seu saque-aniversário.
                    </Text>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.proxPayment}>
                    <Text style={styles.proxPaymentTitle}>
                        Próximo pagamento
                    </Text>
                    <Text style={styles.proxPaymentSubtitle}>
                        Terça-feira, 22 de Outubro
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    content: {
        paddingHorizontal: 25,
        paddingTop: 20,
    },
    containerCard: {
        marginBottom: 15,
    },
    titleCard: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
    },
    valorCard: {
        marginBottom: 20,
    },
    valorText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    myCard: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        margin:30,
        padding: 10,
        borderRadius: 10,
    },
    myCardImage: {
        width: 24,
        height: 24,
    },
    myCardText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
        
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginTop: 20, 
    },
    cardsContainer: {
        marginTop: 20,
        margin:20,
    },
    cardsTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    cardSubtitle: {
        marginTop: 10,
        color: 'white',
        fontSize: 14,
        fontWeight: '400',
    },
    cardValue: {
        marginTop: 10,
    },
    cardValueText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardLimitText: {
        marginTop: 10,
        color: 'white',
        fontSize: 14,
        fontWeight: '400',
    },
    cardVencimentoText: {
        marginTop: 5,
        color: 'white',
        fontSize: 14,
        fontWeight: '400',
    },
    cardButtonContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    cardButton: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        width: '20%',
    },
    cardButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
    },
    parcelarButton: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        width: '20%',
        padding: 10,
        borderRadius: 10,
    },
    parcelarButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
    },
    emprestimoContainer: {
        marginTop: 20,
        margin:20,
    },
    emprestimoTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    emprestimoSubtitle: {
        marginTop: 10,
        color: 'white',
        fontSize: 14,
        fontWeight: '400',
    },
    proxPayment: {
        marginTop: 20,
        margin:20,
    },
    proxPaymentTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    proxPaymentSubtitle: {
        marginTop: 10,
        color: 'white',
        fontSize: 14,
        fontWeight: '400',
    },
}); 

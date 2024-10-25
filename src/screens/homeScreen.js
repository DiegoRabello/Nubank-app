import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import HomeHeader from "../components/homeHeader";
import FunctionsHome from "../components/functionsHome";
import CreditCardIcon from '../../assets/img/credit_card.png';

import { ThemeProvider,useTheme } from '../contexts/ThemeContext';
import{lightTheme,darkTheme} from '../themes/themes';



export default function HomeScreen() {
    const [saldo, setSaldo] = useState(1000);
    const [isVisible, setIsVisible] = useState(true);
    const { isDarkMode } = useTheme();
    const theme = isDarkMode ? darkTheme : lightTheme;


    const navigation = useNavigation();
    const handleNavigateToCartoes = () => {
        navigation.navigate('Cartoes');
    };

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

    const toggleVisibility = () => {
        setIsVisible((prevState) => {
            console.log('Toggling visibility:', !prevState);
            return !prevState;
        });
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <HomeHeader 
                    onToggleVisibility={toggleVisibility} 
                    isVisible={isVisible}
                />
                <View style={styles.content}>
                    <View style={[styles.containerCard]}>
                        <Text style={[styles.titleCard, { color: theme.textColor }]}>
                            Conta
                        </Text>
                        <View style={styles.valorCard}>
                            <Text style={[styles.valorText, { color: theme.textColor }]}>
                                {isVisible ? `R$ ${saldo.toFixed(2)}` : '••••••'}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.functionsContainer}>
                    <FunctionsHome />
                </View>
                <TouchableOpacity style={[styles.myCard, { backgroundColor: theme.cardBackground }]} onPress={handleNavigateToCartoes}>
                    <Image source={CreditCardIcon} style={[styles.myCardImage, { tintColor: theme.iconColor }]} />
                    <Text style={[styles.myCardText, { color: theme.textColor }]}>
                        Meus cartões
                    </Text>
                </TouchableOpacity>

                <View style={[styles.divider, { backgroundColor: theme.dividerColor }]}></View>

                <View style={styles.cardsContainer}>
                    <Text style={[styles.cardsTitle, { color: theme.textColor }]}>
                        Cartão de Crédito
                    </Text>
                    <Text style={[styles.cardSubtitle, { color: theme.textColor }]}>
                        Fatura atual
                    </Text>
                    <View style={styles.cardValue}>
                        <Text style={[styles.cardValueText, { color: theme.textColor }]}>
                            R$ 100,00
                        </Text>
                        <Text style={[styles.cardLimitText, { color: theme.textColor }]}>
                            Limite disponível R$ 400,00
                        </Text>
                        <Text style={[styles.cardVencimentoText, { color: theme.textColor }]}>
                            Vencimento em 22 OUT
                        </Text>
                    </View>
                    <View style={styles.cardButtonContainer}>
                        <TouchableOpacity style={[styles.cardButton,{backgroundColor: theme.paycardBackground}]}>
                            <Text style={[styles.cardButtonText, { color: theme.textColor } ]}>
                                Pagar
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.parcelarButton]}>
                            <Text style={[styles.parcelarButtonText, { color: theme.textColor }]}>
                                Parcelar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.divider, { backgroundColor: theme.dividerColor }]}></View>

                <View style={styles.emprestimoContainer}>
                    <Text style={[styles.emprestimoTitle, { color: theme.textColor }]}>
                        Empréstimo
                    </Text>
                    <Text style={[styles.emprestimoSubtitle, { color: theme.textColor }]}>
                        Dinheiro parado no FGTS? você pode antecipar até 12 parcelas do seu saque-aniversário.
                    </Text>
                </View>

                <View style={[styles.divider, { backgroundColor: theme.dividerColor }]}></View>

                <View style={styles.proxPayment}>
                    <Text style={[styles.proxPaymentTitle, { color: theme.textColor }]}>
                        Próximo pagamento
                    </Text>
                    <Text style={[styles.proxPaymentSubtitle, { color: theme.textColor }]}>
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
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    content: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    containerCard: {
        marginBottom: 20,
    },
    titleCard: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
    },
    valorCard: {
        marginBottom: 20,
    },
    valorText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    functionsContainer: {
        marginBottom: 20,
    },
    myCard: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginHorizontal: 20,
        marginVertical: 15,
        padding: 15,
        borderRadius: 10,
    },
    myCardImage: {
        width: 24,
        height: 24,
    },
    myCardText: {
        fontSize: 16,
        fontWeight: '500',
    },
    divider: {
        width: '100%',
        height: 1,
        marginVertical: 20,
    },
    cardsContainer: {
        marginHorizontal: 20,
    },
    cardsTitle: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
    },
    cardSubtitle: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 10,
    },
    cardValue: {
        marginBottom: 15,
    },
    cardValueText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardLimitText: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 5,
    },
    cardVencimentoText: {
        fontSize: 14,
        fontWeight: '400',
    },
    cardButtonContainer: {
        flexDirection: 'row',
        gap: 15,
        marginTop: 15,
    },
    cardButton: {
        alignItems: 'center',
        padding: 12,
        borderRadius: 10,
        flex: 1,
    },
    cardButtonText: {
        fontSize: 14,
        fontWeight: '500',
    },
    parcelarButton: {
        alignItems: 'center',
        padding: 12,
        borderRadius: 10,
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    parcelarButtonText: {
        fontSize: 14,
        fontWeight: '500',
    },
    emprestimoContainer: {
        marginHorizontal: 20,
    },
    emprestimoTitle: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
    },
    emprestimoSubtitle: {
        fontSize: 14,
        fontWeight: '400',
    },
    proxPayment: {
        marginHorizontal: 20,
    },
    proxPaymentTitle: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
    },
    proxPaymentSubtitle: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 50,
    },
});

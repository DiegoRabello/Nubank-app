import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../contexts/ThemeContext';
import { lightTheme, darkTheme } from '../themes/themes';
import closeIcon from '../../assets/img/close.png';
import creditCardIcon from '../../assets/img/credit_card.png';

export default function Cartoes() {
    const { isDarkMode } = useTheme();
    const theme = isDarkMode ? darkTheme : lightTheme;
    
    const navigation = useNavigation();
    const handlePressClose = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePressClose}>
                    <Image source={closeIcon} style={[styles.icon, { tintColor: theme.iconColor }]} />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={[styles.title, { color: theme.textColor }]}>Meus cartões</Text>
                
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: theme.textColor }]}>Cartões virtuais</Text>
                    <TouchableOpacity style={styles.cardItem}>
                        <Image source={creditCardIcon} style={[styles.cardIcon, { tintColor: theme.iconColor }]} />
                        <View style={styles.cardInfo}>
                            <Text style={[styles.cardName, { color: theme.textColor }]}>Assinaturas</Text>
                            <Text style={[styles.cardNumber, { color: theme.textColor }]}>•••• 4433</Text>
                        </View>
                        <Text style={[styles.cardArrow, { color: theme.textColor }]}>{'>'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardItem}>
                        <Image source={creditCardIcon} style={[styles.cardIcon, { tintColor: theme.iconColor }]} />
                        <View style={styles.cardInfo}>
                            <Text style={[styles.cardName, { color: theme.textColor }]}>Delivery</Text>
                            <Text style={[styles.cardNumber, { color: theme.textColor }]}>•••• 7368</Text>
                        </View>
                        <Text style={[styles.cardArrow, { color: theme.textColor }]}>{'>'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.createCardButton, { borderColor: theme.buttonBackground }]}>
                        <Text style={[styles.createCardText, { color: theme.buttonBackground }]}>+ Criar cartão virtual</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: theme.textColor }]}>Cartões físicos</Text>
                    <TouchableOpacity style={styles.cardItem}>
                        <Image source={creditCardIcon} style={[styles.cardIcon, { tintColor: theme.iconColor }]} />
                        <View style={styles.cardInfo}>
                            <Text style={[styles.cardName, { color: theme.textColor }]}>Diego R R Silva</Text>
                            <Text style={[styles.cardNumber, { color: theme.textColor }]}>•••• 6587</Text>
                        </View>
                        <Text style={[styles.cardArrow, { color: theme.textColor }]}>{'>'}</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={[styles.requestCardButton, { backgroundColor: theme.buttonBackground }]}>
                    <Text style={[styles.requestCardText, { color: theme.buttonTextColor }]}>Pedir cartão adicional</Text>
                </TouchableOpacity>
            </ScrollView>
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
        padding: 20,
        paddingTop: 50, // Aumentado para mover o conteúdo para baixo
    },
    scrollViewContent: {
        paddingTop: 20, // Adicionado para dar mais espaço no topo
    },
    icon: {
        width: 24,
        height: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 30,
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginBottom: 10,
    },
    cardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    cardIcon: {
        width: 32,
        height: 32,
        marginRight: 15,
    },
    cardInfo: {
        flex: 1,
    },
    cardName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardNumber: {
        fontSize: 14,
    },
    cardArrow: {
        fontSize: 20,
    },
    createCardButton: {
        borderWidth: 1,
        borderRadius: 25,
        padding: 15,
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: 10,
    },
    createCardText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    requestCardButton: {
        borderRadius: 25,
        padding: 15,
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    requestCardText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

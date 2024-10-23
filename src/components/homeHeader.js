import React from 'react';
import { View, StyleSheet, SafeAreaView, Image, TouchableOpacity, Text } from "react-native";
import userIcon from '../../assets/img/User.png'; 
import visibilityIcon from '../../assets/img/visibility.png';
import questionIcon from '../../assets/img/question.png';   
import securityIcon from '../../assets/img/security.png';

const IconButton = ({ source, style }) => (
    <TouchableOpacity style={[styles.iconContainer, style]}>
        <Image source={source} style={styles.icon} />
    </TouchableOpacity>
);

export default function HomeHeader() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <TouchableOpacity>
                        <Image source={userIcon} style={styles.userIcon} />
                    </TouchableOpacity>
                    <View style={styles.iconGroup}>
                        <IconButton source={visibilityIcon} />
                        <IconButton source={questionIcon} />
                        <IconButton source={securityIcon} />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>Olá, Diego</Text>
                    <Text style={styles.subtitle}>Bem-vindo(a) de volta!</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#830AD1',
        width: '100%',
        height: '19%',
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 20,
        marginTop: 30,
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    userIcon: {
        width: 24,
        height: 24,
        tintColor: 'white',
    },
    iconGroup: {
        flexDirection: 'row',
        gap: 16,
    },
    iconContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: 'white',
    },
    content: {
        marginTop: 30,
        marginLeft: 10,
        flexDirection: 'column',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    subtitle: {
        color: 'white',
        fontSize: 16,
    },
});

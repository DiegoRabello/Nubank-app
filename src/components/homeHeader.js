import React from 'react';
import { View, StyleSheet, SafeAreaView, Image, TouchableOpacity, Text } from "react-native";
import userIcon from '../../assets/img/User.png'; 
import visibilityIcon from '../../assets/img/visibility.png';
import visibilityOffIcon from '../../assets/img/visibility_off.png';
import questionIcon from '../../assets/img/question.png';   
// import securityIcon from '../../assets/img/security.png';
import { ThemeProvider,useTheme } from '../contexts/ThemeContext';
import{lightTheme,darkTheme} from '../themes/themes';
import ThemeToggleButton from './themebutton';

const IconButton = ({ source, style, onPress }) => (
    <TouchableOpacity style={[styles.iconContainer, style]} onPress={onPress}>
        <Image source={source} style={styles.icon} />
    </TouchableOpacity>
);

export default function HomeHeader({ onToggleVisibility, isVisible }) {
    const { isDarkMode } = useTheme();
    const theme = isDarkMode ? darkTheme : lightTheme;
    console.log('HomeHeader isVisible:', isVisible);
    return (
        <SafeAreaView style={[styles.safeArea]}>
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <TouchableOpacity style={styles.userIconContainer}>
                        <Image source={userIcon} style={styles.userIcon} />
                    </TouchableOpacity>
                    <View style={styles.iconGroup}>
                        <IconButton 
                            source={isVisible ? visibilityIcon : visibilityOffIcon} 
                            onPress={onToggleVisibility} 
                        />
                        <IconButton source={questionIcon} />
                        <ThemeToggleButton />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={[styles.title]}>Olá, Diego</Text>
                    <Text style={[styles.subtitle]}>Bem-vindo(a) de volta!</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'purple',
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
    userIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userIcon: {
        width: 24,
        height: 24,
        tintColor: 'white',
    
    },
    iconGroup: {
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
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

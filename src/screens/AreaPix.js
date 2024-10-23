import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
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

    const handlePressClose = () => {
        navigation.navigate('Home');
    }
    const handlePressNavigate = (item) => {
        navigation.navigate(item.route);
    }

    return (
        <View style={styles.container}>
            <View style={styles.icons}>
                <TouchableOpacity onPress={handlePressClose} style={styles.iconClose}>
                    <Image source={closeIcon} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconQuestion}>
                    <Image source={questionIcon} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.pixContainer}>
                <Text style={styles.pixTitle}>Área Pix</Text>
                <Text style={styles.pixSubtitle}>Envie e receba pagamentos a qualquer hora e dia da semana, sem pagar nada por isso</Text>
            </View>

            <View style={styles.pixButtons}>
                {functions.map((item) => (
                    <View key={item.id} style={styles.pixButtonWrapper}>
                        <TouchableOpacity style={styles.Button} onPress={() => handlePressNavigate(item)}>
                            <View style={styles.iconContainer}>
                                <Icon name={item.icon} size={24} color="white" />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.pixButtonText}>{item.name}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.divider}></View>
            <View style={styles.preferences}>
                <View style={styles.preferencesChaves}>
                    <Image source={securityIcon} style={styles.icon} />
                    <Text style={styles.preferencesText}>Registrar ou trazer chaves</Text>
                </View>
                <View style={styles.divider2}></View>
                <View style={styles.preferencesConfigs}>
                    <Image source={configsIcon} style={styles.icon} />
                    <Text style={styles.preferencesConfigsText}>Configurar Pix</Text>
                </View>
                <View style={styles.divider2}></View>
            </View>
        </View>

        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    pixContainer: {
        margin: 30,
        marginTop: -20,
    },
    pixTitle: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    pixSubtitle: {
        marginTop: 10,
        fontSize: 17,
        color: 'white',
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
        backgroundColor: '#1E1E1E',
        width: 64,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pixButtonText: {
        marginTop: 10,
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
        color: 'white',
    },
    preferencesConfigs: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    preferencesConfigsText: {
        fontSize: 16,
        color: 'white',
    },
    divider2: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginTop: 20, 
    },
}); 

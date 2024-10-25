import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../contexts/ThemeContext';
import { lightTheme, darkTheme } from '../themes/themes';
import pixIcon from '../../assets/img/pix.png';

const functions = [
  {id: 1, image: pixIcon, name: 'Área Pix', route: 'AreaPix' },
  {id: 2, icon: 'barcode', name: 'Pagar' },
  {id: 3, icon: 'bank-transfer', name: 'Transferir', route: 'Transferir' },
  {id: 4, icon: 'cash-plus', name: 'Depositar' },
  {id: 5, icon: 'cellphone', name: 'Recarga de celular' },
  {id: 6, icon: 'cash-refund', name: 'Cobrar' },
  {id: 7, icon: 'heart-outline', name: 'Doação' },
  {id: 8, icon: 'globe-model', name: 'Transferir Internac.' },
];

export default function FunctionsHome() {
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const handlePressNavigate = (item) => {
    if (item.route) {
      navigation.navigate(item.route);
    } else {
      console.log(`Rota não definida para ${item.name}`);
    }
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {functions.map((item) => (
        <TouchableOpacity 
          key={item.id} 
          style={styles.functionItem}
          onPress={() => handlePressNavigate(item)}
        >
          <View style={[styles.iconContainer, { backgroundColor: theme.functionIconBackground }]}>
            {item.image ? (
              <Image source={item.image} style={[styles.imageIcon, { tintColor: theme.functionIconColor }]} />
            ) : (
              <Icon name={item.icon} size={30} color={theme.functionIconColor} />
            )}
          </View>
          <Text style={[styles.functionName, { color: theme.textColor }]}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    paddingLeft: 25,  
  },
  functionItem: {
    alignItems: 'center',
    marginRight: 12,
    width: 70,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  imageIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  functionName: {
    fontSize: 13,
    textAlign: 'center',
  },
});

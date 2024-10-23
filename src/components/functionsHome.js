import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const functions = [
  {id:1, icon: 'cash-fast', name: 'Área Pix', route:'AreaPix' },
  {id:2, icon: 'barcode', name: 'Pagar' },
  {id:3, icon: 'bank-transfer', name: 'Transferir', route: 'Transferir' },
  {id:4, icon: 'cash-plus', name: 'Depositar' },
  {id:5, icon: 'cellphone', name: 'Recarga de celular' },
  {id:6, icon: 'cash-refund', name: 'Cobrar' },
  {id:7, icon: 'heart-outline', name: 'Doação' },
  { icon: 'globe-model', name: 'Transferir Internac.' },
];

export default function FunctionsHome() {
  const navigation = useNavigation();

  const handlePressNavigate = (item) => {
    if (item.route) {
      navigation.navigate(item.route);
    } else {
      // Adicione um alerta ou outra ação para itens sem rota definida
      console.log(`Rota não definida para ${item.name}`);
    }
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {functions.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.functionItem}
          onPress={() => handlePressNavigate(item)}
        >
          <View style={styles.iconContainer}>
            <Icon name={item.icon} size={24} color="#FFF" />
          </View>
          <Text style={styles.functionName}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    paddingLeft: 25,  // Adicione este padding para alinhar com o conteúdo acima
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
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  functionName: {
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
  },
});

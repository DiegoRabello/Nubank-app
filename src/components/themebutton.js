import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <TouchableOpacity onPress={toggleTheme}>
      <MaterialCommunityIcons 
        name={isDarkMode ? 'white-balance-sunny' : 'moon-waning-crescent'} 
        size={24} 
        color={isDarkMode ? '#FFFFFF' : '#000000'} 
      />
    </TouchableOpacity>
  );
};

export default ThemeToggleButton;
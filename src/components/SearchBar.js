import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export default function SearchBar({ placeholder = 'Search Store' }) {
  return (
    <View style={styles.container}>
      <Feather name="search" size={18} color={COLORS.text} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.inputBg,
    marginHorizontal: 20,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    fontSize: 14,
    marginLeft: 8,
    color: COLORS.text,
  },
});
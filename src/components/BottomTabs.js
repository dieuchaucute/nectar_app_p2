import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export default function BottomTabs({ activeTab, onChange }) {
  const tabs = useMemo(
    () => [
      { key: 'shop', label: 'Shop', icon: 'storefront-outline', type: 'Ionicons' },
      { key: 'explore', label: 'Explore', icon: 'search1', type: 'AntDesign' },
      { key: 'cart', label: 'Cart', icon: 'shopping-cart', type: 'Feather' },
      { key: 'favorite', label: 'Favourite', icon: 'hearto', type: 'AntDesign' },
      { key: 'account', label: 'Account', icon: 'user', type: 'Feather' },
    ],
    []
  );

  const renderIcon = (tab, color) => {
    if (tab.type === 'AntDesign') {
      return <AntDesign name={tab.icon} size={20} color={color} />;
    }
    if (tab.type === 'Feather') {
      return <Feather name={tab.icon} size={19} color={color} />;
    }
    return <Ionicons name={tab.icon} size={20} color={color} />;
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;

        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.item}
            activeOpacity={0.7}
            onPress={() => onChange(tab.key)}
          >
            {renderIcon(tab, isActive ? COLORS.primary : COLORS.text)}

            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 14,
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
    backgroundColor: '#fff',

    // fix nổi lên giống design
    elevation: 10,
  },

  item: {
    alignItems: 'center',
    gap: 4,
  },

  label: {
    fontSize: 12,
    color: COLORS.text,
  },

  activeLabel: {
    color: COLORS.primary,
    fontWeight: '700',
  },
});
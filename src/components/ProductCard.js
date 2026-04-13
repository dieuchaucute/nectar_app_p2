import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

export default function ProductCard({ item, onPress }) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={() => onPress && onPress(item)}
    >
      {/* IMAGE */}
      <View style={styles.imageWrap}>
        <Image
          source={item.image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* NAME */}
      <Text style={styles.name} numberOfLines={2}>
        {item.name}
      </Text>

      {/* SUB */}
      <Text style={styles.sub}>{item.subtitle}</Text>

      {/* PRICE + BUTTON */}
      <View style={styles.bottomRow}>
        <Text style={styles.price}>{formatPrice(item.price)}</Text>

        <TouchableOpacity style={styles.addBtn}>
          <AntDesign name="plus" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 170, // dùng cho horizontal list
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    padding: 14,
    backgroundColor: COLORS.bg,
    marginRight: 14,
  },

  imageWrap: {
    alignItems: 'center',
    marginBottom: 12,
  },

  image: {
    width: '100%',
    height: 100,
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    minHeight: 40,
  },

  sub: {
    fontSize: 13,
    color: COLORS.subText,
    marginTop: 4,
  },

  bottomRow: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },

  addBtn: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
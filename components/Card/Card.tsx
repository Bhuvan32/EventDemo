import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles';

interface CardProps {
  image: any;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  width?: number | string;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, onPress, width }) => {
  return (
    <TouchableOpacity style={[styles.card, width ? { width } : {}]} onPress={onPress}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </TouchableOpacity>
  );
};

export default Card;
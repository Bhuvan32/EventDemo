import React from 'react';
import { Text, StyleSheet } from 'react-native';
import icons from '../../assets/Icons/icons'; // Import the icons

type CustomIconProps = {
  name: keyof typeof icons; // Key of the `icons` object
  size?: number; // Icon size
  color?: string; // Icon color
};

const CustomIcon: React.FC<CustomIconProps> = ({ name, size = 24, color = '#000' }) => {
  const icon = icons[name]; // Get the Unicode from the icons object
  if (!icon) {
    console.warn(`Icon "${name}" does not exist in icons.ts`);
    return null; // Fallback if the icon name is invalid
  }

  return (
    <Text style={[styles.icon, { fontSize: size, color }]}>{icon}</Text>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontFamily: 'site-app-icons', // Custom font family
  },
});

export default CustomIcon;
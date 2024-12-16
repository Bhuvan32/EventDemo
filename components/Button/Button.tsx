import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import ButtonProps from './types';

const Button = ({ title, onPress, variant }: ButtonProps) => {
    const isPrimary = variant === 'primary';
    const isSecondary = variant === 'secondary';
    return (
        <TouchableOpacity style={[styles.button, isPrimary ? styles.primaryButton : styles.secondaryButton]} onPress={onPress}>
        <Text style={[styles.buttonText, isPrimary ? styles.primaryButtonText : styles.secondaryButtonText]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
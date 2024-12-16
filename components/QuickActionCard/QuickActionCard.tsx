import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import { colors } from '@/styles/colors';
import { useFonts } from 'expo-font';
import CustomIcon from '@/components/CustomIcon/CustomIcon';
import icons from '@/assets/Icons/icons';

interface QuickActionCardProps {
  title: string;
  cardContent: { icon: string; text: string }[];
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({ title, cardContent }) => {

  const [fontsLoaded] = useFonts({
    'site-app-icons': require('../../assets/fonts/site-app-icons.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.cardGrid}>
        {cardContent.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <CustomIcon name={item.icon as keyof typeof icons} size={24} color= {colors.themeColor} />
            <Text style={styles.cardText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default QuickActionCard;
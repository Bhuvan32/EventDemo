import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

interface HorizontalScrollCardSectionProps {
  title: string;
  actionText?: string;
  onActionPress?: () => void;
  data: any[]; // Array of card data
  renderItem: ({ item }: { item: any }) => JSX.Element; // Function to render each card
}

const HorizontalScrollCardSection: React.FC<HorizontalScrollCardSectionProps> = ({
  title,
  actionText = 'View All',
  onActionPress,
  data,
  renderItem,
}) => {
  return (
    <View style={styles.container}>
      {/* Section Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {onActionPress && (
          <TouchableOpacity onPress={onActionPress}>
            <Text style={styles.actionText}>{actionText}</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Horizontal Scroll Cards */}
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.cardList}
      />
    </View>
  );
};



export default HorizontalScrollCardSection;
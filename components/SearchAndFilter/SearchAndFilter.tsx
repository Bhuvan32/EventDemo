import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import styles from './styles';

interface SearchAndFilterProps {
  placeholder?: string; // Placeholder text for the search bar
  onSearch?: (text: string) => void; // Callback when the user types in the search bar
  onFilterPress?: () => void; // Callback for the filter button press
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  placeholder = 'Search session', // Default placeholder
  onSearch,
  onFilterPress,
}) => {
  const handleSearchInputChange = (text: string) => {
    if (onSearch) {
      onSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color={colors.gray} />
        <TextInput
          style={styles.searchInput}
          placeholder={placeholder}
          placeholderTextColor={colors.gray}
          onChangeText={handleSearchInputChange}
        />
      </View>

      {/* Filter Button */}
      <TouchableOpacity style={styles.filterButton} onPress={onFilterPress}>
        <MaterialIcons name="filter-list" size={24} color={colors.defaultText} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchAndFilter;
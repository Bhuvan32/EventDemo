import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface FilterTabsProps {
  filters: string[]; // Array of filter labels
  selectedFilter: string; // Currently selected filter
  onFilterChange: (filter: string) => void; // Callback for filter change
}

const FilterTabs: React.FC<FilterTabsProps> = ({
  filters = ['All sessions', 'Bookmarked', 'Live'], // Default filters
  selectedFilter,
  onFilterChange,
}) => {
  return (
    <View style={styles.container}>
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter}
          style={[
            styles.tab,
            selectedFilter === filter && styles.activeTab, // Highlight active tab
          ]}
          onPress={() => onFilterChange(filter)}
        >
          <Text
            style={[
              styles.tabText,
              selectedFilter === filter && styles.activeTabText, // Change text color for active tab
            ]}
          >
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FilterTabs;
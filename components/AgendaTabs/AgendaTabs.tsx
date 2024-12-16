import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface AgendaTabsProps {
  selectedDay: string; // Currently selected day (e.g., "Day1")
  onDayChange: (day: string) => void; // Callback to change selected day
  availableTabs: { label: string; value: string }[];
}

const AgendaTabs: React.FC<AgendaTabsProps> = ({ selectedDay, onDayChange, availableTabs }) => {


  return (
    <View style={styles.container}>
      {availableTabs.map((tab) => (
        <TouchableOpacity
          key={tab.value}
          style={[
            styles.tab,
            selectedDay === tab.value && styles.activeTab, // Highlight active tab
          ]}
          onPress={() => onDayChange(tab.value)}
        >
          <Text style={selectedDay === tab.value ? styles.activeTabText : styles.tabText}>
            {tab.label.split(' - ')[0]} {/* Day (e.g., "Day 1") */}
          </Text>
          <Text style={selectedDay === tab.value ? styles.activeTabDateText : styles.tabDateText}>
            {tab.label.split(' - ')[1]} {/* Event Date (e.g., "Mon, Sep 30") */}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AgendaTabs;
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Or any other icon library
import styles from './styles';
import { BottomNavProps } from './type';
import { colors } from '@/styles';
import { useFonts } from 'expo-font';
import CustomIcon from '@/components/CustomIcon/CustomIcon';
import icons from '@/assets/Icons/icons';

const BottomNav: React.FC<BottomNavProps> = ({ selectedTab, onTabPress }) => {
  const [fontsLoaded] = useFonts({
    'site-app-icons': require('../../assets/fonts/site-app-icons.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'home' && styles.activeTab]}
        onPress={() => onTabPress('home')}
      >
        <CustomIcon
          name={selectedTab === 'home' ? 'homeFill' : 'homeOutline'}
          size={24}
          color={selectedTab === 'home' ? colors.themeColor : colors.defaultText}
        />
        <Text style={[styles.tabLabel, selectedTab === 'home' && styles.activeLabel]}>Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'agenda' && styles.activeTab]}
        onPress={() => onTabPress('agenda')}
      >
        <CustomIcon
          name={selectedTab === 'agenda' ? 'calendarFill' : 'calendar'}
          size={24}
          color={selectedTab === 'agenda' ? colors.themeColor : colors.defaultText}
        />
        <Text style={[styles.tabLabel, selectedTab === 'agenda' && styles.activeLabel]}>Agenda</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, selectedTab === 'profile' && styles.activeTab]}
        onPress={() => onTabPress('profile')}
      >
        <CustomIcon
          name={selectedTab === 'profile' ? 'profileOutline' : 'profileFill'}
          size={24}
          color={selectedTab === 'profile' ? colors.themeColor : colors.defaultText}
        />
        <Text style={[styles.tabLabel, selectedTab === 'profile' && styles.activeLabel]}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;
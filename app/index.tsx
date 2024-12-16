import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet } from 'react-native';
import Topbar from '../components/Topbar';
import BottomNav from '@/components/BottomNav';
import HomeScreen from '@/screens/Home/HomeScreen';
import AgendaScreen from '@/screens/Agenda/AgendaScreen';
import ProfileScreen from '@/screens/Profile/ProfileScreen';
import { colors } from '@/styles/colors';
import * as SplashScreen from 'expo-splash-screen';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('home');

  useEffect(() => {
    const hideSplash = async () => {
      // Simulate loading process, e.g., fetch data or initialization
      await new Promise(resolve => setTimeout(resolve, 3000)); // Display splash for 3 seconds
      await SplashScreen.hideAsync(); // Hide splash screen after the timeout
    };

    hideSplash(); // Call the function to hide splash after delay
  }, []);

  const handleNotificationPress = () => {
    alert('Notification Pressed');
  };

  const handleTabPress = (tab: string) => {
    setSelectedTab(tab);
  };

  // Data for flatlist rendering (this will be your dynamic agenda data)
  const data = [
    { id: '1', title: 'Home Screen' },
    { id: '2', title: 'Agenda Screen' },
    { id: '3', title: 'Profile Screen' },
  ];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Topbar userName="Andy Piper" onNotificationPress={handleNotificationPress} />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.screenContainer}>
            {selectedTab === 'home' && item.title === 'Home Screen' && <HomeScreen />}
            {selectedTab === 'agenda' && item.title === 'Agenda Screen' && <AgendaScreen />}
            {selectedTab === 'profile' && item.title === 'Profile Screen' && <ProfileScreen />}
          </View>
        )}
      />
      <BottomNav selectedTab={selectedTab} onTabPress={handleTabPress} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.defaultBackground,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.defaultBackground,
  },
});
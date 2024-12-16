import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Using Expo vector icons
import styles from './styles'; // Importing styles
import { TopbarProps } from './type'; // Importing types
import Modal from '../../components/Modal/Modal';
import CustomIcon from '../CustomIcon/CustomIcon';    
import { colors } from '@/styles';
import { useFonts } from 'expo-font';

const Topbar: React.FC<TopbarProps> = ({ userName, onNotificationPress }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    'site-app-icons': require('../../assets/fonts/site-app-icons.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      {/* Left Section: Logo and Greeting */}
      <View style={styles.logoWrapper}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.greeting}>Welcome, {userName}!</Text>

      {/* Right Section: Notification Icon */}
      <TouchableOpacity 
        style={styles.notificationWrapper} 
        onPress={() => setIsModalVisible(true)}
      >
        <CustomIcon name="notify" size={24} color={colors.topBarIconColor} />
      </TouchableOpacity>

      {/* Modal */}
      <Modal isModalVisible={isModalVisible} setModalVisible={setIsModalVisible} />
    </View>
  );
};

export default Topbar;
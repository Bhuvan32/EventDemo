import React, { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Button from '@/components/Button/Button';
import styles from './styles';
import { colors } from '@/styles/colors';
import Modal from '@/components/Modal/Modal';
import CustomIcon from '@/components/CustomIcon/CustomIcon';
import { useFonts } from 'expo-font';

const EventDetails: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleRegister = () => {
    setModalVisible(true);
  };

  const [fontsLoaded] = useFonts({
    'site-app-icons': require('../../../../assets/fonts/site-app-icons.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.eventDetailsContainer}>
      <View style={styles.eventDetails}>
        <Text style={styles.title}>Tech Expo 2024</Text>
        <View>
          <View style={styles.subtitleGroup}>
            <CustomIcon name="calendar" size={16} color={colors.secondaryText} />
            <Text style={styles.subtitleText}>December 20, 2024</Text>
          </View>
          <View style={styles.subtitleGroup}>
            <CustomIcon name="location" size={16} color={colors.secondaryText} />
            <Text style={styles.subtitleText}>San Francisco</Text>  
          </View>
        </View>
      </View>
      <Button title="Register" onPress={() => {handleRegister()}} variant="primary" />


         {/* Modal */}
         <Modal isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default EventDetails;
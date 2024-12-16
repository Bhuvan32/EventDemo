import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image, Dimensions, ActivityIndicator } from 'react-native';
import styles from './styles';
import CustomIcon from '@/components/CustomIcon/CustomIcon';
import { colors } from '@/styles';
import { useFonts } from 'expo-font';

interface ModalComponentProps {
  isModalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const screenWidth = Dimensions.get('window').width;

const ModalComponent = ({ isModalVisible, setModalVisible }: ModalComponentProps) => {
  const calculatedWidth = screenWidth - 40;
  const [fontsLoaded] = useFonts({
    'site-app-icons': require('../../assets/fonts/site-app-icons.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }


  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => setModalVisible(false)} // Close the modal when back pressed
    >
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { width: calculatedWidth }]}>
          <Image
            source={require('@/assets/images/under-construction.png')} // Correct usage of require for local images
            style={styles.modalImage}
          />
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
            <CustomIcon name='close' size={24} color={colors.defaultText} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
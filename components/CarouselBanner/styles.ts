import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '@/styles/colors';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginVertical: 16,
    },
    slide: {
      width: width * 0.8,
      height: 150,
      borderRadius: 10,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 150,
      borderRadius: 8,
      resizeMode: 'cover',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10,
    },
    button: {
      backgroundColor: colors.white,
      padding: 10,
      marginTop: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: colors.black,
      fontSize: 16,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: colors.black,
      marginHorizontal: 4,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        width: '100%',
        zIndex: 10, // Ensure dots are above the image
    },
    dotsInsideImage: {
        position: 'absolute',
        left: '-3%',
        bottom: '25%',  // Adjust based on how much space inside the image
    },  
  });

export default styles;
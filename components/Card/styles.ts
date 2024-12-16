import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';
import { metrics } from '@/styles/metrics';

const styles = StyleSheet.create({
    card: {
      backgroundColor: colors.defaultBackground,
      borderRadius: metrics.borderRadius.small,
      padding: metrics.spacing.small,
      alignItems: 'center',
      marginRight: metrics.spacing.small,
      width: 160,
      borderWidth: 1,
      borderColor: colors.themeBorderColor,
    },
    image: {
      width: 60,
      height: 60,
      marginBottom: metrics.spacing.small,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 14,
      fontWeight: '600',
      textAlign: 'center',
      color: colors.defaultText,
      marginBottom: metrics.spacing.small,
    },
    subtitle: {
      fontSize: 12,
      color: colors.secondaryText,
      textAlign: 'center',
    },
  });

  export default styles;    
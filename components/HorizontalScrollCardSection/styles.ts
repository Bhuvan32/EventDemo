import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';
import { metrics } from '@/styles/metrics';

const styles = StyleSheet.create({
    container: {
      margin: metrics.spacing.medium,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: metrics.spacing.small,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.defaultText,
    },
    actionText: {
      fontSize: 14,
      color: colors.themeColor,
    },
});

export default styles;  
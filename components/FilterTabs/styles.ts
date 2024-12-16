import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';
import { metrics } from '@/styles/metrics';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: metrics.spacing.small,
      marginTop: metrics.spacing.large,
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: metrics.spacing.small,
      borderRadius: metrics.borderRadius.large,
      marginHorizontal: metrics.spacing.small,
      backgroundColor: colors.defaultBackground, // Default background
      borderWidth: 1,
      borderColor: colors.themeBorderColor,
    },
    activeTab: {
      backgroundColor: colors.themeColor, // Background for active tab
    },
    tabText: {
      fontSize: 14,
      color: colors.defaultText,
    },
    activeTabText: {
      color: colors.white, // Text color for active tab
      fontWeight: 'bold',
    },
  });

  export default styles;
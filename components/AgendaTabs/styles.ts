import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';
import { metrics } from '@/styles/metrics';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors.lightBlue,
      paddingHorizontal: metrics.spacing.medium,
      gap: metrics.spacing.small,
      paddingVertical: metrics.spacing.large,
      paddingBottom: metrics.spacing.xxLarge,
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      borderRadius: metrics.borderRadius.small,
      padding: metrics.spacing.small,
      backgroundColor: colors.defaultBackground, // Default background
      borderWidth: 1,
      borderColor: colors.themeBorderColor,
    },
    activeTab: {
      backgroundColor: colors.themeColor, // Highlighted tab background
    },
    tabText: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.defaultText,
    },
    activeTabText: {
      color: colors.white, // Active tab text color
      fontWeight: '600',
      fontSize: 16,
    },
    tabDateText: {
      fontSize: 12,
      color: colors.gray,
      marginTop: 2,
    },
    activeTabDateText: {
      color: colors.white, // Active tab date color
      fontSize: 12,
    },
  });

export default styles;
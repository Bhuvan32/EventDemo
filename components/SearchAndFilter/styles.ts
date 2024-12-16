import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';
import { metrics } from '@/styles/metrics';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: metrics.spacing.medium,
      marginTop: -metrics.spacing.large,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      backgroundColor: colors.white,
      paddingVertical: metrics.spacing.small,
      paddingHorizontal: metrics.spacing.medium,
      borderRadius: metrics.borderRadius.large,
      marginRight: metrics.spacing.medium,
      borderWidth: 1,
      borderColor: colors.themeBorderColor,
    },
    searchInput: {
      flex: 1,
      marginLeft: metrics.spacing.small,
      fontSize: 16,
      color: colors.defaultText,
    },
    filterButton: {
      backgroundColor: colors.defaultBackground,
      padding: metrics.spacing.small,
      borderRadius: metrics.borderRadius.large,
      borderWidth: 1,
      borderColor: colors.themeBorderColor,
    },
  });

  export default styles;
import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 20,
      backgroundColor: colors.defaultBackground,
      borderTopWidth: 1,
      borderTopColor: colors.themeBorderColor,
    },
    tab: {
      alignItems: 'center',
    },
    activeTab: {
      borderBottomColor: colors.themeColor, // Green for active tab
    },
    tabLabel: {
      fontWeight: 'bold',
      fontSize: 12,
      color: colors.defaultText, // Inactive color
    },
    activeLabel: {
      color: colors.themeColor, // Active tab text color
      fontWeight: 'bold',
    },
  });

  export default styles;
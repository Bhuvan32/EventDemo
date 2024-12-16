import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';
import { metrics } from '@/styles/metrics';

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.defaultBackground,
    },
    timelineContainer: {
    },
    emptyState: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 200,
      marginTop: metrics.spacing.large,
    },
    emptyText: {
      color: colors.defaultText,
      fontSize: 16,
    }
});

export default styles;    
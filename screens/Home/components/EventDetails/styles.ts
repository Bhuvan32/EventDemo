import { colors } from '@/styles/colors';
import { metrics } from '@/styles/metrics';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  eventDetailsContainer: {
    backgroundColor: colors.cardBackgroundColor,
    padding: metrics.spacing.medium,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: metrics.borderRadius.small,
    margin: metrics.spacing.medium,
  },
  eventDetails: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: metrics.spacing.small,
    gap: metrics.spacing.small,
  },
  subtitleText: {
    fontSize: 14,
    color: colors.secondaryText,
  },
});

export default styles;
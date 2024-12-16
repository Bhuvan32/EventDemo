import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles'; // Global styles for colors and metrics

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: metrics.spacing.medium,
    borderBottomWidth: 1,
    backgroundColor: colors.topBarBackgroundColor,
    color: colors.topBarTextColor,
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 40,
    marginRight: metrics.spacing.small,
  },
  greeting: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.topBarTextColor,
    textAlign: 'center',
    flex: 1,
  },
  notificationWrapper: {
    alignItems: 'center',
    padding: metrics.spacing.small,
    color: colors.topBarTextColor,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.notificationBadge, // Red badge for notification count
  },
});

export default styles;
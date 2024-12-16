import { StyleSheet } from 'react-native';
import { metrics } from '@/styles';
import { colors } from '@/styles/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: metrics.spacing.medium,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.defaultText,
    marginBottom: 16,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap', // To make rows wrap around
    gap: metrics.spacing.medium,
  },
  card: {
    backgroundColor: colors.cardBackgroundColor,
    width: '30%', // 3 cards in a row (approx.)
    alignItems: 'center',
    paddingVertical: metrics.spacing.medium,
    borderRadius: 8,
  },
  cardText: {
    marginTop: 8,
    fontSize: 12,
    color: colors.cardTextColor,
    textAlign: 'center',
  },
});

export default styles;
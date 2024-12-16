import { StyleSheet } from 'react-native';
import { colors } from "@/styles/colors";
import { metrics } from "@/styles/metrics";

const styles = StyleSheet.create({
    timelineContainer: {
      paddingVertical: metrics.spacing.medium,
      paddingHorizontal: metrics.spacing.medium,
    },
    sessionContainer: {
      flexDirection: 'row',
      margin: metrics.spacing.large,
      marginBottom: metrics.spacing.small,
    },
    timeContainer: {
      width: 70,
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      paddingRight: metrics.spacing.small,
      paddingTop: metrics.spacing.large,
    },
    timeText: {
      fontSize: 14,
      color: colors.defaultText,
    },
    cardContainer: {
      flex: 1,
      backgroundColor: colors.defaultBackground,
      borderRadius: metrics.borderRadius.small,
      padding: metrics.spacing.medium,
      shadowColor: colors.gray,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 2,
    },
    cardHeader: {
      marginBottom: metrics.spacing.small,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.defaultText,
    },
    subtitle: {
      fontSize: 12,
      color: colors.gray,
    },
    tagContainer: {
      flexDirection: 'row',
      marginVertical: metrics.spacing.small,
    },
    tag: {
      backgroundColor: colors.gray,
      color: colors.white,
      fontSize: 12,
      paddingHorizontal: metrics.spacing.small,
      paddingVertical: metrics.spacing.xsmall,
      borderRadius: metrics.borderRadius.small,
      marginRight: metrics.spacing.small,
    },
    speakersContainer: {
      flexDirection: 'row',
      marginTop: metrics.spacing.small,
    },
    speakerImage: {
      width: 30,
      height: 30,
      borderRadius: 15,
      marginRight: metrics.spacing.small,
    },
  });

  export default styles;    
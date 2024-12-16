import { StyleSheet } from "react-native";
import { metrics } from "@/styles/metrics";
import { colors } from "@/styles/colors";

const styles = StyleSheet.create({
    primaryButton: {
        padding: metrics.spacing.small,
        paddingHorizontal: metrics.spacing.medium,
        backgroundColor: colors.themeColor,
        borderRadius: metrics.borderRadius.small,
    },
    primaryButtonText: {
        color: colors.themeTextColor,
        fontSize: 14,
        fontWeight: 'bold',
    },
    secondaryButton: {
        padding: metrics.spacing.small,
        paddingHorizontal: metrics.spacing.medium,
        backgroundColor: colors.secondary,
        borderRadius: metrics.borderRadius.small,
    },
    secondaryButtonText: {
        color: colors.defaultText,
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default styles;
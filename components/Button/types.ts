import { ViewStyle } from "react-native";
import { StyleProp } from "react-native";
import { TextStyle } from "react-native";

interface ButtonProps {
    title: string; // Text to display on the button
    onPress: () => void; // Function to execute on button press
    style?: StyleProp<ViewStyle>; // Optional styling for the button
    textStyle?: StyleProp<TextStyle>; // Optional styling for the button text
    variant?: 'primary' | 'secondary'; // Button type for theme-based styling
}

export default ButtonProps;
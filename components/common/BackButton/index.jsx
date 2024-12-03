import { TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export function BackButton({ style }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={style} onPress={() => navigation.goBack()} activeOpacity={0.75}>
            <MaterialIcons name="keyboard-backspace" size={34} color="white" />
        </TouchableOpacity>
    );
}
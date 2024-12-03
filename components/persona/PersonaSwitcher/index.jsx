import { useState } from "react";

import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

export function PersonaSwitcher({ value, max, partyMember, onValueChange = () => {} }) {
    const [curNum, setCurNum] = useState(value);

    const goToPrev = () => {
        if (curNum > 0) {
            setCurNum(curNum - 1);
            onValueChange(curNum - 1);
        }
    };

    const goToNext = () => {
        if (curNum < max) {
            setCurNum(curNum + 1);
            onValueChange(curNum + 1);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goToPrev} activeOpacity={0.75}>
                <Text style={[styles.buttonText, curNum === 0 ? styles.buttonDisabled : undefined]}>Prev</Text>
            </TouchableOpacity>

            <Text style={styles.partyName}>{partyMember}</Text>
            
            <TouchableOpacity onPress={goToNext} activeOpacity={0.75}>
                <Text style={[styles.buttonText, curNum === max ? styles.buttonDisabled : undefined]}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}
import { useRef } from "react";

import { View, Text, Image } from "react-native";

import { useApi } from "../../../hooks/useApi";

import { itemIcons } from "../../../utils/imageMaps";
import styles from "./styles";

export function ItemDetail({ item, skillCard, isRare }) {
    const itemData = useApi().item;
    const details = itemData[item];
    const itemIcon = useRef(getItemIcon(skillCard ? "skillCard" : details.type, isRare));

    return (
        <View style={styles.container}>
            <View style={styles.itemNameContainer}>
                <Image source={itemIcon.current} style={{width: 60, height: 20}} resizeMode="contain" />

                <Text style={[styles.text, styles.itemName]}>{item}</Text>
            </View>

            {!skillCard && <Text style={styles.text}>{details.description}</Text>}
        </View>
    );
}

function getItemIcon(type, isRare) {
    // if this is a skill card, just return the skill card icon
    if (type === "skillCard") {
        return itemIcons.skillCard;
    }

    // otherwise, split the type string to determine icon
    const typeSplit = type.split(" - ");
    // if only 1 segment, just use that first segment directly
    if (typeSplit.length < 2) {
        return itemIcons[typeSplit[0]];
    }

    // get category and user
    const category = typeSplit[0];
    const user = typeSplit[1].split(" ")[0];    // trim off "only"

    return itemIcons[category][user][isRare ? "rare" : "standard"];
}
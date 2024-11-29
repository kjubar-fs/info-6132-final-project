import { View, Text, Image } from "react-native";

// TODO: replace this with data from API
import itemData from "../../../dummyData/ItemDataRoyal.json";

import { itemIcons } from "../../../utils/imageMaps";
import styles from "./styles";
import { useRef } from "react";

export function ItemDetail({ item, skillCard, isRare }) {
    const details = itemData[item];
    const itemIcon = useRef(getItemIcon(skillCard ? "skillCard" : details.type, isRare));

    return (
        <View style={styles.container}>
            <View style={styles.itemNameContainer}>
                <Image source={itemIcon.current} style={{width: 60, height: 20}} resizeMode="contain" />

                <Text>{item}</Text>
            </View>

            {!skillCard && <Text>{details.description}</Text>}
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
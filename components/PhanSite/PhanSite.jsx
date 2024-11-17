import { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./PhanSiteStyles";

const PhanSite = () => {

    const [battery, setBattery] = useState(56.4)

    return(
        <View style={styles.container}>
            <ImageBackground
                style={styles.img}
                source={require('../../assets/phan-site.png')}
            >
                <View style={{...styles.fill, width: `${(battery/100)*59}%` }}>
                </View>
                <Text style={{...styles.votes, marginLeft: 230-(battery*2)}}>{battery}%</Text>
            </ImageBackground>
        </View>
    )
}
export default PhanSite